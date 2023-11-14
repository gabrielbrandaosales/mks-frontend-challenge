interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}

export interface ProductList {
  products: Product[];
  count: number;
}
