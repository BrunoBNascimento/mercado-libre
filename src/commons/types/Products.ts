import Price from './Price';

interface Product {
  id: number;
  title: number;
  picture: string;
  price: Price;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export default Product;
