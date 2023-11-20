import { Product } from '@/components/Home/Product';
import { ProductSkeleton } from '@/components/Home/Product/ProductSkeleton';
import { useProducts } from '@/hooks/useProducts';
import { HomeContainer, ProductsContainer } from '@/styles/pages/home';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const { data, isLoading } = useProducts();

  return (
    <HomeContainer>
      <Head>
        <title>Home | MKS</title>
      </Head>
      <ProductsContainer>
        {isLoading &&
          [...Array(8)].map((item, index) => <ProductSkeleton key={index} />)}
        {data?.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </HomeContainer>
  );
}
