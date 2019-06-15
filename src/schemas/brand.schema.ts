import * as mongoose from 'mongoose';

export const BrandSchema = new mongoose.Schema({
	id: String,
	name: String,
	description: String,
})