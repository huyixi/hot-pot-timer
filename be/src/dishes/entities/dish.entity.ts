// src/dishes/entities/dish.entity.ts

import { Dish } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DishEntity implements Dish {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  restaurantId: number;
}
