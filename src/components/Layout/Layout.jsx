import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { themeMUI } from 'styles/GlobalStyled';
import { Container } from './Layout.styled';
import { Footer } from '../Footer/Footer';
import { Header } from '../../components/Header/Header';

// import { MenuAppBar } from 'components/Appbar/AppBar';

export const Layout = () => {
  return (
    <>
      <ThemeProvider theme={themeMUI}>
        <header>
          <Header />
        </header>
        <main>
          <section>
            <Container>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </Container>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  );
};
