import { Module } from '@nestjs/common';
import { CategorySchema } from '../../schemas/category.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from 'src/controllers/category/category.controller';
import { CategoryService } from 'src/services/category/category.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Categorys', schema: CategorySchema}])],
    controllers: [CategoryController],
    providers: [CategoryService],
})
export class CategoryModule {}
