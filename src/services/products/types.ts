export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
}

export interface ProductList {
  products: IProduct[];
  count: number;
}
