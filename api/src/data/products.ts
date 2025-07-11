/* eslint-disable prettier/prettier */
import { Product } from '../types/Product';

const products: Product[] = [
  {
    id: "macbook-pro-14-m3pro-512gb",
    name: "MacBook Pro 14-inch",
    type: "Mac",
    price: 1999,
    currency: "USD",
    color: "Space Black",
    storage: "512GB",
    image: "https://example.com/images/macbook-pro-14.jpg",
    description: "14.2-inch Liquid Retina XDR, M3 Pro chip, 16GB RAM",
    release_date: "2023-10-30"
  },
  {
    id: "macbook-air-13-m2-256gb",
    name: "MacBook Air 13-inch",
    type: "Mac",
    price: 1099,
    currency: "USD",
    color: "Midnight",
    storage: "256GB",
    image: "https://example.com/images/macbook-air-13.jpg",
    description: "13.6-inch Liquid Retina, M2 chip, 8GB RAM",
    release_date: "2022-07-15"
  },
  {
    id: "mac-mini-m2-512gb",
    name: "Mac mini",
    type: "Mac",
    price: 799,
    currency: "USD",
    color: "Silver",
    storage: "512GB",
    image: "https://example.com/images/mac-mini.jpg",
    description: "M2 chip, 8-core CPU, 10-core GPU, 8GB RAM",
    release_date: "2023-01-24"
  },
  {
    id: "mac-studio-m2max-1tb",
    name: "Mac Studio",
    type: "Mac",
    price: 1999,
    currency: "USD",
    color: "Silver",
    storage: "1TB",
    image: "https://example.com/images/mac-studio.jpg",
    description: "M2 Max chip, 12-core CPU, 30-core GPU, 32GB RAM",
    release_date: "2023-06-13"
  },
  {
    id: "apple-watch-series-9-45mm",
    name: "Apple Watch Series 9",
    type: "Watch",
    price: 429,
    currency: "USD",
    color: "Starlight",
    storage: "32GB",
    image: "https://example.com/images/apple-watch-series9.jpg",
    description: "45mm Aluminum Case, S9 chip, Always-On display",
    release_date: "2023-09-22"
  },
  {
    id: "apple-watch-ultra-2-49mm",
    name: "Apple Watch Ultra 2",
    type: "Watch",
    price: 799,
    currency: "USD",
    color: "Titanium",
    storage: "64GB",
    image: "https://example.com/images/apple-watch-ultra-2.jpg",
    description: "49mm Titanium Case, S9 SiP, Dual-frequency GPS",
    release_date: "2023-09-22"
  },
  {
    id: "airpods-pro-2-usb-c",
    name: "AirPods Pro (2nd Generation)",
    type: "AirPods",
    price: 249,
    currency: "USD",
    color: "White",
    storage: "None",
    image: "https://example.com/images/airpods-pro-2.jpg",
    description: "Active Noise Cancellation, USB‑C charging, H2 chip",
    release_date: "2023-09-22"
  },
  {
    id: "airpods-3rd-gen",
    name: "AirPods (3rd Generation)",
    type: "AirPods",
    price: 179,
    currency: "USD",
    color: "White",
    storage: "None",
    image: "https://example.com/images/airpods-3.jpg",
    description: "Spatial audio, sweat and water resistant, MagSafe charging",
    release_date: "2021-10-26"
  },
  {
    id: "imac-24-m3-256gb",
    name: "iMac 24-inch",
    type: "Mac",
    price: 1299,
    currency: "USD",
    color: "Blue",
    storage: "256GB",
    image: "https://example.com/images/imac-24.jpg",
    description: "24-inch 4.5K Retina display, M3 chip, 8GB RAM",
    release_date: "2023-10-30"
  },
  {
    id: "macbook-pro-16-m3max-1tb",
    name: "MacBook Pro 16-inch",
    type: "Mac",
    price: 3499,
    currency: "USD",
    color: "Space Black",
    storage: "1TB",
    image: "https://example.com/images/macbook-pro-16.jpg",
    description: '16.2-inch Liquid Retina XDR, M3 Max chip, 36GB RAM',
    release_date: "2023-10-30"
  },
  {
    id: "iphone-15-pro-256gb",
    name: "iPhone 15 Pro",
    type: "iPhone",
    price: 1199,
    currency: "USD",
    color: "Natural Titanium",
    storage: "256GB",
    image: "https://example.com/images/iphone-15-pro.jpg",
    description: "6.1-inch Super Retina XDR display, A17 Pro chip, 3x Telephoto",
    release_date: "2023-09-22"
  },
  {
    id: "iphone-15-128gb",
    name: "iPhone 15",
    type: "iPhone",
    price: 799,
    currency: "USD",
    color: "Pink",
    storage: "128GB",
    image: "https://example.com/images/iphone-15.jpg",
    description: "6.1-inch Super Retina XDR display, A16 Bionic chip, Dual-camera system",
    release_date: "2023-09-22"
  },
  {
    id: "iphone-15-plus-512gb",
    name: "iPhone 15 Plus",
    type: "iPhone",
    price: 1129,
    currency: "USD",
    color: "Blue",
    storage: "512GB",
    image: "https://example.com/images/iphone-15-plus.jpg",
    description: "6.7-inch Super Retina XDR display, A16 Bionic chip, Longest battery life",
    release_date: "2023-09-22"
  },
  {
    id: "iphone-14-128gb",
    name: "iPhone 14",
    type: "iPhone",
    price: 699,
    currency: "USD",
    color: "Midnight",
    storage: "128GB",
    image: "https://example.com/images/iphone-14.jpg",
    description: "6.1-inch OLED display, A15 Bionic chip, Emergency SOS via satellite",
    release_date: "2022-09-16"
  },
  {
    id: "iphone-se-3rd-gen-64gb",
    name: "iPhone SE (3rd Generation)",
    type: "iPhone",
    price: 429,
    currency: "USD",
    color: "Product(RED)",
    storage: "64GB",
    image: "https://example.com/images/iphone-se-3.jpg",
    description: "4.7-inch Retina HD display, A15 Bionic chip, Touch ID",
    release_date: "2022-03-18"
  },
];

export default products;
