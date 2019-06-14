import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ItemModule } from './modules/item/item.module';

import { AppController } from './app.controller';
import { ItemController } from './controllers/item/item.controller';

import { AppService } from './app.service';
import { ItemService } from './services/item/item.service';

@Module({
  imports: [ItemModule, MongooseModule.forRoot('mongodb://localhost:27017/brandship_db', { useNewUrlParser: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
