import { Module } from '@nestjs/common';
import { BrandSchema } from '../../schemas/brand.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandController } from 'src/controllers/brand/brand.controller';
import { BrandService } from 'src/services/brand/brand.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Brand', schema: BrandSchema}])],
    controllers: [BrandController],
    providers: [BrandService],
})
export class BrandModule {}