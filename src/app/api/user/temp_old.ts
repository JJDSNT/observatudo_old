import { NextApiRequest, NextApiResponse } from "next";
import { UserController } from "../../controllers/UserController";

const userController = new UserController();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      if (req.query.id) {
        await userController.getUser(req, res);
      } else {
        await userController.getUsers(req, res);
      }
      break;
    case "POST":
      await userController.createUser(req, res);
      break;
    case "PUT":
      await userController.updateUser(req, res);
      break;
    case "DELETE":
      await userController.deleteUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).json({ error: `Method ${method} Not Allowed` });
      break;
  }
}
