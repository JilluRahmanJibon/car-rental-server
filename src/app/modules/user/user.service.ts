import { TUser } from "./user.interface"
import { User } from "./user.model"

const createUserInToDb = async (userData :Partial<TUser>) => {
    const result = await User.create(userData)
    return result
}



export const UserServices = {
    createUserInToDb
}