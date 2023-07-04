import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "../services/UserService";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getUsers(req: NextApiRequest, res: NextApiResponse) {
    try {
      const users = await this.userService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getUser(req: NextApiRequest, res: NextApiResponse) {
    try {
      const userId = parseInt(req.query.id as string);
      const user = await this.userService.getUser(userId);

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async createUser(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { firstName, lastName, age } = req.body;
      const newUser = await this.userService.createUser({
        firstName,
        lastName,
        age,
      });
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateUser(req: NextApiRequest, res: NextApiResponse) {
    try {
      const userId = parseInt(req.query.id as string);
      const { firstName, lastName, age } = req.body;
      const updatedUser = await this.userService.updateUser(userId, {
        firstName,
        lastName,
        age,
      });

      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteUser(req: NextApiRequest, res: NextApiResponse) {
    try {
      const userId = parseInt(req.query.id as string);
      const deletedUser = await this.userService.deleteUser(userId);

      if (deletedUser) {
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
