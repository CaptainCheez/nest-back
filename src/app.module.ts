import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ItemModule } from './modules/item/item.module';
import { CategoryModule } from './modules/category/category.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';

@Module({
  imports: [ItemModule, CategoryModule, MongooseModule.forRoot('mongodb://localhost:27017/brandship_db', { useNewUrlParser: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
