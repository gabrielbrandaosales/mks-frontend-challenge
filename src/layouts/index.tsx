import Image from 'next/image';
import { FC, ReactNode, useState } from 'react';
import logoMks from '@/assets/MKS.svg';

import { MdShoppingCart } from 'react-icons/md';
import { useAppSelector } from '@/hooks/useSelector';
import { Cart } from '@/components/Cart';

import { Footer, Header, LayoutContainer } from './styles';
interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartQuantity = useAppSelector((state) => state.cart.cart.length);

  function handleOpenCart() {
    setCartIsOpen(!cartIsOpen);
  }

  return (
    <>
      {cartIsOpen && <Cart handleOpenCart={handleOpenCart} />}
      <LayoutContainer>
        <Header>
          <Image src={logoMks} alt="Logo MKS" />

          <button onClick={handleOpenCart}>
            <MdShoppingCart size={20} />
            <span>{cartQuantity}</span>
          </button>
        </Header>

        <main>{children}</main>

        <Footer>
          <p>MKS sistemas © Todos os direitos reservados</p>
        </Footer>
      </LayoutContainer>
    </>
  );
};
