import * as mongooose from 'mongoose';

export const ItemsSchema = new mongooose.Schema({
    id: String,
    name: String,
    info: String,
    pricae: String,
    img: String
})