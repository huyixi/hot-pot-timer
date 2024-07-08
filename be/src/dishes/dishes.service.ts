import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Injectable()
export class DishesService {
  constructor(private prisma: PrismaService) {}

  create(createDishDto: CreateDishDto) {
    return this.prisma.dish.create({
      data: createDishDto,
    });
  }

  findAll() {
    return this.prisma.dish.findMany();
  }

  async findOne(id: number) {
    const dish = await this.prisma.dish.findUnique({
      where: { id },
    });
    if (!dish) {
      throw new NotFoundException(`Dish #${id} not found`);
    }
    return dish;
  }

  async update(id: number, updateDishDto: UpdateDishDto) {
    try {
      return await this.prisma.dish.update({
        where: { id },
        data: updateDishDto,
      });
    } catch (error) {
      throw new NotFoundException(`Dish #${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.dish.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Dish #${id} not found`);
    }
  }
}
