import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  price: number;

  @Column()
  currency: string;

  @Column()
  color: string;

  @Column()
  storage: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  release_date: string;
}

export { Product };
