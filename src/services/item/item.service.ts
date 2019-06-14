import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from '../../interfaces/item.interface';

@Injectable()
export class ItemService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>){}
	async findAll(): Promise<Item[]> {
		return await this.itemModel.find();
	}

	async findOne(id: string): Promise<Item> {
		return await this.itemModel.findOne({ _id: id });
    }
    
    async filterByBrand(brandId: string): Promise<Item> {
        return await this.itemModel.find({brand: brandId})
    }

    async filterByCategory(categoryId: string): Promise<Item> {
        return await this.itemModel.find({categories: categoryId})
    }

    async filterByBrandByCategory(brandId: string, categoryId: string): Promise<Item> {
        return await this.itemModel.find({brand: brandId, categories: categoryId})
    }

	async createItem(item: Item): Promise<Item> {
		const newItem = new this.itemModel(item);
		return await newItem.save();
	}

	async deleteItem(id: string): Promise<Item> {
		return await this.itemModel.findByIdAndRemove(id);
	}

	async updateItem(item: Item, id: string): Promise<Item> {
		return await this.itemModel.findByIdAndUpdate(id, item, {new: true});
	}
}
