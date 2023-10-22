import api from '@/service/api';

export type ProductType = {
  id?: number;
  title: string;
  description: string;
  price: number | string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export function getProducts() {
  return new Promise<ProductType[]>((resolve) => {
    api
      .get('/products')
      .then((res) => {
        const products: ProductType[] = res.data.products;
        resolve(products);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
