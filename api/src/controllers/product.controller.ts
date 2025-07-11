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
import { Product } from '../types/Product';

@Controller('products')
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get('all')
  getProducts(): Product[] {
    return this.appService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Product {
    return this.appService.getProductById(id);
  }

  @Post()
  addProduct(@Body() product: any): boolean {
    return this.appService.addProduct(product as Product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() product: any): boolean {
    return this.appService.updateProduct(id, product as Product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): boolean {
    return this.appService.deleteProduct(id);
  }
}
