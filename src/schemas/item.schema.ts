import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
	id: String,
	title: String,
	description: String,
    image: String,
    price: Number,
    categories: [Number],
    brand: String,
    sex: String,
})