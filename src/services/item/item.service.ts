import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from '../../interfaces/item.interface';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
const shortid = require('shortid');

@Injectable()
export class ItemService {
    constructor(@InjectModel('Items') private readonly itemModel:Model<Item>){}
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

	async createItem(file, item): Promise<Item> {
		const itemDto = {
			title: item.title,
			image: item.path,
			sizes: item.sizes,
			photos: [file.path],
			colors: item.colors,
			categories: item.categories,
			price: item.price,
			brandId: item.brandId,
			salePrice: item.salePrice,
			for: item.for,
			id: shortid.generate()
		}
		const newItem = this.itemModel(itemDto);
		return await newItem.save();
	}

	async deleteItem(id: string): Promise<Item> {
		return await this.itemModel.findByIdAndRemove(id);
	}

	async updateItem(item: Item, id: string): Promise<Item> {
		return await this.itemModel.findByIdAndUpdate(id, item, {new: true});
	}
}
