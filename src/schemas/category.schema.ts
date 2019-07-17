import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
	id: String,
	group: String,
	name: String,
})