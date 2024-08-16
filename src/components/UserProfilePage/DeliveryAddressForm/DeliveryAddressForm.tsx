import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import Select from 'react-select';
import toast from 'react-hot-toast';
import { debounce } from 'lodash';
import {
  selectCities,
  selectIsLoading,
  selectWarehouses,
} from '../../../redux/order/orderSelectors';
import {
  getDeliveryCities,
  getDeliveryWarehouses,
} from '../../../redux/order/orderOperations';
import { editUserAddress } from '../../../redux/user/userOperations';
import { selectDelivery } from '../../../redux/user/userSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { theme } from 'styles/theme';
import {
  Box,
  BtnWrapper,
  CancelBtn,
  SubmitAddressBtn,
  Text,
  selectStyles,
} from './DeliveryAddressForm.styled';


type Props = {
  text: string;
  handleShowForm: () => void;
};

type Options = {
  value: string;
  label: string;
};

export const DeliveryAddressForm: FC<Props> = ({ text, handleShowForm }) => {
  const dispatch = useTypedDispatch();

  const isLoading = useTypedSelector(selectIsLoading);
  const deliveryAddress = useTypedSelector(selectDelivery);

  let cities = useTypedSelector(selectCities);
  const [city, setCity] = useState(deliveryAddress.city);
  let warehouses = useTypedSelector(selectWarehouses);
  const [warehouse, setWarehouse] = useState(deliveryAddress.warehouse);

  const optionsCities: Options[] = cities.map((city: string): Options => {
    return {
      value: city,
      label: city,
    };
  });

  const getCity = (): Options | string | undefined => {
    return city ? optionsCities.find(c => c.value === city) : '';
  };

  // const debouncedGetCities = useMemo(
  //   () => debounce((value) => dispatch(getDeliveryCities(value)), 1000),
  //   [dispatch]
  // );

  // const handleCityChange = (event) => {
  //   setCity(event.value);
  //   dispatch(getDeliveryWarehouses(event.value));
  // };

  // const handleSelectCity = useCallback(
  //   event => {
  //     if (event === '') {
  //       return;
  //     }
  //     debouncedGetCities(event);
  //   },
  //   [debouncedGetCities]
  // );

  const clearInputCity = () => {
    setCity('');
    setWarehouse('');
  };

  const optionsWarehouses: Options[] = warehouses.map((warehouse: string): Options => {
    return {
      value: warehouse,
      label: warehouse,
    };
  });

  const getWarehouse = (): Options | string | undefined  => {
    return warehouse ? optionsWarehouses.find(w => w.value === warehouse) : '';
  };

  // const handleWarehouseChange = event => {
  //   setWarehouse(event.value);
  // };

  // const clearInputWarehouse = () => {
  //   if (city) {
  //     dispatch(getDeliveryWarehouses(city));
  //   }
  //   setWarehouse('');
  // };

  // const handleEditAddress = () => {
  //   if (!city || !warehouse) {
  //     toast('Введіть адресу доставки', {
  //       id: 'warning',
  //       icon: '👀',
  //       style: {
  //         background: `${theme.colors.secondary}`,
  //         color: `${theme.colors.textPrimary}`,
  //       },
  //     });
  //   } else {
  //     dispatch(
  //       editUserAddress({
  //         delivery: {
  //           city: city,
  //           warehouse: warehouse,
  //         },
  //       })
  //     ).then(result => {
  //       if (result.meta.requestStatus === 'fulfilled') {
  //         handleShowForm();
  //       }
  //     });
  //   }
  // };
  return (
    <>
      {isLoading && <CustomLoader />}
      <Text>{text}</Text>
      <Box>
        <Select
          options={optionsCities}
          defaultValue={{
            label: city,
            value: city,
          }}
          value={getCity()}
          // onChange={handleCityChange}
          // onInputChange={handleSelectCity}
          onFocus={clearInputCity}
          placeholder={'Місто'}
          styles={selectStyles}
        />
        <Select
          options={optionsWarehouses}
          defaultValue={{
            label: warehouse,
            value: warehouse,
          }}
          value={getWarehouse()}
          // onChange={handleWarehouseChange}
          // onFocus={clearInputWarehouse}
          placeholder={'Відділення/поштомат'}
          styles={selectStyles}
        />
      </Box>
      <BtnWrapper>
        {/* <SubmitAddressBtn type="button" onClick={handleEditAddress}>
          Зберегти адресу
        </SubmitAddressBtn> */}
        <CancelBtn type="button" onClick={handleShowForm}>
          Відмінити
        </CancelBtn>
      </BtnWrapper>
    </>
  );
};
