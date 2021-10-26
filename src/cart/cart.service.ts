import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CallTracker } from 'assert';
import { Model } from 'mongoose';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './interfaces/cart.interface';

@Injectable()
export class CartService {

  constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) {}

  async findAll(): Promise<Cart[]> {
    const cart = await this.cartModel.find().exec();
    return cart;
  }

  async findOne(id: string): Promise<Cart> {
    const cart = await this.cartModel.findById(id).exec();
    return cart;
  }

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const newCart = new this.cartModel(createCartDto);
    return await newCart.save();
  }

  async update(id: number, updateCartDto: UpdateCartDto): Promise<Cart> {
    const updatedCart = await this.cartModel
    .findByIdAndUpdate(id, updateCartDto, { new: true });
      return updatedCart;
  }

  async remove(id: number): Promise<any> {
    const deletedCart = await this.cartModel.findByIdAndDelete(id);
    return deletedCart;
  }
}
