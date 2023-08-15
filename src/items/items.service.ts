import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Items, ItemsDocument } from './schema/items.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Items.name) private itemsModule: Model<ItemsDocument>){
  }

  async create(createItemDto: CreateItemDto) {
    const itemCreated = await this.itemsModule.create(createItemDto);
    return itemCreated;
  }

  async findAll() {
    const list = await this.itemsModule.find({});
    return list;
  }

  async findOne(id: number) {
    return await this.itemsModule.findById(id);
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    return await this.itemsModule.updateOne({id},updateItemDto);
  }

  async remove(id: number) {
    return await this.itemsModule.findByIdAndRemove(id);
  }
}
