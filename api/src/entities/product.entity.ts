import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('products')
export class Product {
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
