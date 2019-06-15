import { Controller, Get, Post, Delete, Put, Body, Param, Req } from '@nestjs/common';
import { BrandService } from '../../services/brand/brand.service';
import { CreateBrandDto } from '../../dto/create-brand.dto';
import { Brand } from '../../interfaces/brand.interface';

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService: BrandService) {}
    @Get()
    findAll(): Promise<Brand[]> {
        return this.brandService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Brand> {
        return this.brandService.findOne(id);
    }
        
    @Post()
    createBrand(@Body() newBrand: CreateBrandDto): Promise<Brand> {
        return this.brandService.createBrand(newBrand);
    }

    @Put(':id')
    updateBrand(@Body() updateItemDto: CreateBrandDto, @Param('id') id): Promise<Brand> {
        return this.brandService.updateBrand(updateItemDto, id);
    }

    @Delete(':id')
    deleteBrand(@Param('id') id): Promise<Brand> {
        return this.brandService.deleteBrand(id);
    }
}