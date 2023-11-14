import { api } from '../api';
import { ProductList } from './types';

export const getAll = async (): Promise<ProductList> => {
  const { data } = await api.get<ProductList>(
    'products?page=1&rows=8&sortBy=id&orderBy=DESC',
  );
  return data;
};
