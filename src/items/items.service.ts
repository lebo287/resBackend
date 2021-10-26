import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    const items = await this.itemModel.find().exec();
    return items;
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.itemModel.findById(id).exec();
    return item;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = new this.itemModel(createItemDto);
    return await newItem.save();
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    const updatedItem = await this.itemModel
    .findByIdAndUpdate(id, updateItemDto, { new: true });
      return updatedItem;
  }

  async remove(id: number): Promise<any> {
    const deletedItem = await this.itemModel.findByIdAndDelete(id);
    return deletedItem;
  }
}
