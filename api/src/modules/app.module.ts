import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { ProductModule } from './product.module';
import { User } from '../entities/user.entity';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'darius2004',
      database: 'apple',
      entities: [Product, User],
      synchronize: true,
    }),
    ProductModule,
    AuthModule,
  ],
})
export class AppModule {}
