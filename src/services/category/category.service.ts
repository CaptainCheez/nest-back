import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../../interfaces/category.interface';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Categorys') private readonly categoryModel:Model<Category>){}
	async findAll(): Promise<Category[]> {
		return await this.categoryModel.find();
	}

	async findOne(id: string): Promise<Category> {
		return await this.categoryModel.findOne({ _id: id });
    }

	async createCategory(category: Category): Promise<Category> {
		const newCategory = new this.categoryModel(category);
		return await newCategory.save();
	}

	async deleteCategory(id: string): Promise<Category> {
		return await this.categoryModel.findByIdAndRemove(id);
	}

	async updateCategory(category: Category, id: string): Promise<Category> {
		return await this.categoryModel.findByIdAndUpdate(id, category, {new: true});
	}
}
