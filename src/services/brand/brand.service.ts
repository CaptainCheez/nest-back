import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Brand } from '../../interfaces/brand.interface';

@Injectable()
export class BrandService {
    constructor(@InjectModel('Brand') private readonly brandModel:Model<Brand>){}
	async findAll(): Promise<Brand[]> {
		return await this.brandModel.find();
	}

	async findOne(id: string): Promise<Brand> {
		return await this.brandModel.findOne({ _id: id });
    }

	async createBrand(brand: Brand): Promise<Brand> {
		const newBrand = new this.brandModel(brand);
		return await newBrand.save();
	}

	async deleteBrand(id: string): Promise<Brand> {
		return await this.brandModel.findByIdAndRemove(id);
	}

	async updateBrand(brand: Brand, id: string): Promise<Brand> {
		return await this.brandModel.findByIdAndUpdate(id, brand, {new: true});
	}
}