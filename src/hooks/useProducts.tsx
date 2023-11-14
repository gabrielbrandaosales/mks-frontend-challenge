import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { getAll } from '@/services/products';
import { ProductList } from '@/services/products/types';

const key = 'products';

export const useProducts = (
  params?: UseQueryOptions<ProductList | undefined>,
) => {
  return useQuery(['products'], () => getAll());
};
