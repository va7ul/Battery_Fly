import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getBatteriesForToys } from '../redux/products/productsOperations';
import {
  selectAllProductsError,
  selectAllProductsIsLoading,
} from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';
import { SubNavBar } from 'components/Shared/SubNavBar/SubNavBar';

const BatteriesForToysPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllProductsIsLoading);
  const error = useSelector(selectAllProductsError);
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });

  useEffect(() => {
    dispatch(getBatteriesForToys());
  }, [dispatch]);

  return (
    <>
      {!isLoading && !error && desktopVersion && <SubNavBar />}
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <ProductsSection category={'Батареї для іграшок'} />
      )}
    </>
  );
};

export default BatteriesForToysPage;
