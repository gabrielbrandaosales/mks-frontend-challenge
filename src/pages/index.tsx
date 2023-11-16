import { Product } from '@/components/Home/Product';
import { useProducts } from '@/hooks/useProducts';
import { HomeContainer, ProductsContainer } from '@/styles/pages/home';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const { data, isLoading } = useProducts();
  const [checked, setChecked] = useState(false);

  return (
    <HomeContainer>
      <Head>
        <title>Home | MKS</title>
      </Head>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={() => setChecked(!checked)}
      />
      <ProductsContainer>
        {data?.products.map((product) => (
          <Product key={product.id} product={product} isLoading={checked} />
        ))}
      </ProductsContainer>
    </HomeContainer>
  );
}
