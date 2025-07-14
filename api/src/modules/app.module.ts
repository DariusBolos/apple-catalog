import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { ProductModule } from './product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'darius2004',
      database: 'apple',
      entities: [Product],
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
