type Product = {
  id: string;
  name: string;
  type: 'iPhone' | 'Mac' | 'Watch' | 'AirPods';
  price: number;
  currency: string;
  color: string;
  storage: string;
  image: string;
  description: string;
  release_date: string;
};

export type { Product };
