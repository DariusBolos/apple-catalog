import { Injectable } from '@nestjs/common';
import { Product } from '../types/Product';
import products from '../data/products';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  constructor() {
    this.products = products;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product {
    return <Product>this.products.find((product) => product.id === id);
  }

  addProduct(product: Product) {
    this.products.push(product);
    return !!product;
  }

  updateProduct(id: string, product: Product) {
    const toBeUpdatedIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (toBeUpdatedIndex === -1) {
      return false;
    }

    this.products = [
      ...this.products.slice(0, toBeUpdatedIndex),
      product,
      ...this.products.slice(toBeUpdatedIndex + 1),
    ];

    return true;
  }

  deleteProduct(id: string) {
    const product = this.products.find((product) => product.id === id);
    this.products = this.products.filter((product) => product.id !== id);
    return !!product;
  }
}
