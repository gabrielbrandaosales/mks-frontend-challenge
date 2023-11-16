import { FC } from 'react';
import { Container, Description, MainInfo, ProductImage } from './styles';
import Skeleton from 'react-loading-skeleton';
import { FiShoppingBag } from 'react-icons/fi';

export const ProductSkeleton: FC = () => {
  return (
    <Container>
      <ProductImage>
        <Skeleton height={100} width={100} />
      </ProductImage>

      <Description>
        <MainInfo>
          <h1>
            <Skeleton count={2} width={90} />
          </h1>
        </MainInfo>

        <p>
          <Skeleton count={3} width={200} />
        </p>
      </Description>

      <div className="buttonLoading"></div>
    </Container>
  );
};
