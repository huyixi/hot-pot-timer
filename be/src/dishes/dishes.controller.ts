import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateDishDto } from './dto/create-dish.dto'; // Adjust path as necessary
import { UpdateDishDto } from './dto/update-dish.dto'; // Adjust path as necessary
import { DishEntity } from './entities/dish.entity'; // Adjust path as necessary
import { DishesService } from './dishes.service'; // Adjust path as necessary

@Controller('dishes')
@ApiTags('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post()
  @ApiCreatedResponse({ type: DishEntity })
  create(@Body() createDishDto: CreateDishDto) {
    return this.dishesService.create(createDishDto);
  }

  @Get()
  @ApiOkResponse({ type: DishEntity, isArray: true })
  findAll() {
    return this.dishesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DishEntity })
  findOne(@Param('id') id: string) {
    return this.dishesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DishEntity })
  update(@Param('id') id: string, @Body() updateDishDto: UpdateDishDto) {
    return this.dishesService.update(+id, updateDishDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DishEntity })
  remove(@Param('id') id: string) {
    return this.dishesService.remove(+id);
  }
}
