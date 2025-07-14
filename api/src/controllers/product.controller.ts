import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from '../providers/product.service';
import { TProduct } from '../types/TProduct';
import { Product } from '../entities/product.entity';
import { DeleteResult } from 'typeorm';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product | null> {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() product: TProduct): boolean {
    return this.productService.create(product);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: TProduct): boolean {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.productService.remove(id);
  }
}
