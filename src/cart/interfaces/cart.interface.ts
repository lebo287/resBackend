import { Document } from "mongoose";

export interface Cart extends Document {
    readonly id: string;
    readonly name: string;
    readonly info: string;
    readonly price: string;
}