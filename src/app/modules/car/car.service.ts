import { TCar } from "./car.interface";
import { Car } from "./car.model";


const createCarInToDb =async (payload:Partial<TCar>) => {
    const result =await Car.create(payload)
    return result
}


export const CarServices = {
    createCarInToDb
}