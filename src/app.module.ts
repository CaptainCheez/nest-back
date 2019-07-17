import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ItemModule } from './modules/item/item.module';
import { CategoryModule } from './modules/category/category.module';

import { AppController } from './app.controller';
import { BrandModule } from './modules/brand/brand.module';
import { AppService } from './app.service';

@Module({
  imports: [ItemModule, CategoryModule, BrandModule, MongooseModule.forRoot('mongodb://localhost:27017/mambo', { useNewUrlParser: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
