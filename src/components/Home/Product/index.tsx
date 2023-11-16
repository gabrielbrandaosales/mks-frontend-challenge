import Image from 'next/image';
import { FC } from 'react';
import { Container, Description, MainInfo, ProductImage } from './styles';
import { FiShoppingBag } from 'react-icons/fi';
import { addProduct } from '@/features/cart/cart-slice';
import { useDispatch } from 'react-redux';
import { IProduct } from '@/services/products/types';
import { ProductSkeleton } from './ProductSkeleton';

interface ProductProps {
  product: IProduct;
  isLoading: boolean;
}

export const Product: FC<ProductProps> = ({ product, isLoading }) => {
  const dispatch = useDispatch();

  function handleBuyProduct() {
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      photo: product.photo,
    };

    dispatch(addProduct(newProduct));
  }

  if (isLoading) return <ProductSkeleton />;

  return (
    <Container>
      <ProductImage>
        <Image
          src={product.photo}
          alt={product.name}
          width={100}
          height={100}
          priority
        />
      </ProductImage>

      <Description>
        <MainInfo>
          <h1>{product.name}</h1>
          <span className="price">{product.price}</span>
        </MainInfo>

        <p>{product.description}</p>
      </Description>

      <button onClick={handleBuyProduct}>
        <FiShoppingBag size={15} />
        Comprar
      </button>
    </Container>
  );
};
