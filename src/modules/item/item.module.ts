import { Module } from '@nestjs/common';
import { ItemSchema } from '../../schemas/item.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemController } from '../../controllers/item/item.controller';
import { ItemService } from '../../services/item/item.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Items', schema: ItemSchema}])],
    controllers: [ItemController],
    providers: [ItemService],
})

export class ItemModule {}
