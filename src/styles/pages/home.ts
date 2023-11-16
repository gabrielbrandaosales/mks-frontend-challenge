import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3.1rem;
  column-gap: 2.2rem;

  @media (max-width: 1094px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;
