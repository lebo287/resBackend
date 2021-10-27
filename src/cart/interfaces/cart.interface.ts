import { Document } from "mongoose";

export interface Cart extends Document {
    id: string;
    name: string;
    price: string;
    quantity: string;
    total: string;
}