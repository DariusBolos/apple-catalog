import { Injectable } from '@nestjs/common';
import { TProduct } from '../types/TProduct';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: string): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }

  create(product: TProduct): boolean {
    return !!this.productRepository.save(product);
  }

  update(id: string, product: TProduct): boolean {
    return !!this.productRepository.update(id, product);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.productRepository.delete(id);
  }
}
