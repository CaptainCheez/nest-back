import { Controller, Get, Post, Delete, Put, Body, Param, Req } from '@nestjs/common';
import { CategoryService } from '../../services/category/category.service';
import { CreateCategoryDto } from '../../dto/create-category.dto';
import { Category } from '../../interfaces/category.interface';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
    @Get()
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Category> {
        return this.categoryService.findOne(id);
    }
        
    @Post()
    createBrand(@Body() newCategory: CreateCategoryDto): Promise<Category> {
        return this.categoryService.createCategory(newCategory);
    }

    @Put(':id')
    updateBrand(@Body() updateCategoryDto: CreateCategoryDto, @Param('id') id): Promise<Category> {
        return this.categoryService.updateCategory(updateCategoryDto, id);
    }

    @Delete(':id')
    deleteBrand(@Param('id') id): Promise<Category> {
        return this.categoryService.deleteCategory(id);
    }
}
