import * as mongooose from 'mongoose';

export const CartSchema = new mongooose.Schema({
    id: String,
    name: String,
    price: String,
    quantity: String,
    total: String,
})