import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    salePrice: Number,
    photos: [String],
    colors: [String],
    sizes: [String],
    brandId: String,
    categories: [Number],
    for: String,
})