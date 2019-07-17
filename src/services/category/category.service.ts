import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../../interfaces/category.interface';
const shortid = require('shortid');

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Categories') private readonly categoryModel:Model<Category>){}
	async findAll(): Promise<any> {
		const hats = await this.categoryModel.find({"group": "headwear"});
		const clothes = await this.categoryModel.find({"group": "clothes"});
		const shoes = await this.categoryModel.find({"group": "shoes"});
		const accessories = await this.categoryModel.find({"group": "accessories"});
		const result = {
			hats,
			clothes,
			shoes,
			accessories
		};
		return result;
	}

	async findOne(id: string): Promise<Category> {
		return await this.categoryModel.findOne({ _id: id });
    }

	async createCategory(category: Category): Promise<Category> {
		const categoryDto = {
			...category,
			id: shortid.generate()
		}
		const newCategory = new this.categoryModel(categoryDto);
		return await newCategory.save();
	}

	async deleteCategory(id: string): Promise<Category> {
		return await this.categoryModel.findByIdAndRemove(id);
	}

	async updateCategory(category: Category, id: string): Promise<Category> {
		return await this.categoryModel.findByIdAndUpdate(id, category, {new: true});
	}
}
