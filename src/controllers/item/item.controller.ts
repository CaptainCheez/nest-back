import { Controller, Get, Post, Delete, Put, Body, Param, Req } from '@nestjs/common';
import { ItemService } from '../../services/item/item.service';
import { Item } from '../../interfaces/item.interface';
import { CreateItemDto } from '../../dto/create-item.dto';

@Controller('items')
export class ItemController {
	constructor(private readonly itemService: ItemService) {}
	@Get()
	findAll(): Promise<Item[]> {
		return this.itemService.findAll();
	}

  @Get(':id')
	findOne(@Param('id') id): Promise<Item> {
		return this.itemService.findOne(id);
  }

  @Get('/brand/:brandid')
	getByBrand(@Param('brandid') brandid: string): Promise<Item> {
		return this.itemService.filterByBrand(brandid);
	} 

	@Get('/category/:categoryid')
	getByCategory(@Param('categoryid') categoryid): Promise<Item> {
		return this.itemService.filterByCategory(categoryid);
  }
    
  @Get('/category/:categoryid/brand/:brandid')
	getByBrandByCategory(@Param() params): Promise<Item> {
		return this.itemService.filterByBrandByCategory(params.brandid, params.categoryid);
  }
    
  @Post()
	createItem(@Body() newItem: CreateItemDto): Promise<Item> {
		return this.itemService.createItem(newItem);
  }

  @Put(':id')
	UpdateItem(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
		return this.itemService.updateItem(updateItemDto, id);
  }

  @Delete(':id')
	deleteItem(@Param('id') id): Promise<Item> {
		return this.itemService.deleteItem(id);
  }
}
