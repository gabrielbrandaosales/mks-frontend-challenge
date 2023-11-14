import { useProducts } from '@/hooks/useProducts';
import { HomeContainer, ProductsContainer } from '@/styles/pages/home';
import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';

export default function Home() {
  const { data } = useProducts();
  console.log(data);

  return (
    <HomeContainer>
      <Head>
        <title>Home | MKS</title>
      </Head>
      <ProductsContainer>
        <h1>Produtos</h1>
        <div>
          {data?.products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </ProductsContainer>
    </HomeContainer>
  );
}
