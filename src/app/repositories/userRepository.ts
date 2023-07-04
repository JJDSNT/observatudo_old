//https://levelup.gitconnected.com/datasource-in-typeorm-a-new-way-to-connect-to-your-database-cdc6622f9bbc
import DB from "../database/config/ormconfig";
import { User } from "../database/entity/User"

export class UserRepository {
    public async createUser (): Promise<User> {
        console.log("Inserting a new user into the database...")
        const user = new User()
        user.firstName = "Timber"
        user.lastName = "Saw"
        user.age = 25
        //await AppDataSource.manager.save(user)
        await DB.getRepository(User).insert(user);
        console.log("Saved a new user with id: " + user.id)
        return user;
    }

    public async readUsers (): Promise<User|User[]> {
        let users = await DB.getRepository(User).find();
        return users;
    }
}
    
        



/*
AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

*/