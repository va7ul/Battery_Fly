import { useDispatch } from 'react-redux';
import {
  Item,
  GoodWrap,
  Image,
  GoodName,
  QuantityWrap,
  Button,
  Input,
  Price,
  DeleteBtn,
  CapacityWrap,
  Capacity,
  SealingHolders,
} from './CartItem.styled';
import { FaMinus, FaPlus, FaXmark } from 'react-icons/fa6';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
} from '../../../../../redux/basket/basketSlice';
import { setCartOpen } from '../../../../../redux/menu/menuSlice';

export const CartItem = ({ item }) => {
  const {
    codeOfGood,
    image,
    name,
    quantity,
    quantityOrdered,
    totalPrice,
    capacityKey,
    selectedSealing,
    selectedHolder,
  } = item;

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(setCartOpen(false));
  };

  const changeValue = e => {
    if (Number(e.target.value) > quantity) {
      dispatch(
        changeQuantity({
          ...item,
          codeOfGood,
          quantity,
          capacityKey,
          selectedSealing,
          selectedHolder,
          quantityOrdered: quantity,
        })
      );
    }

    if (Number(e.target.value) <= quantity && Number(e.target.value) >= 0) {
      dispatch(
        changeQuantity({
          ...item,
          codeOfGood,
          quantity,
          capacityKey,
          selectedSealing,
          selectedHolder,
          quantityOrdered: Number(e.target.value),
        })
      );
    }
  };

  const deleteFromCart = () => {
    dispatch(
      deleteItem({
        totalPrice,
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
      })
    );
  };

  return (
    <Item>
      <GoodWrap>
        <Image src={image[0]} alt={name} />
        <GoodName onClick={closeCart} to={`/assortment/${codeOfGood}`}>
          {name}
        </GoodName>
        <QuantityWrap>
          <Button
            type="button"
            onClick={() => dispatch(decreaseQuantity(item))}
          >
            <FaMinus />
          </Button>
          <Input type="number" onChange={changeValue} value={quantityOrdered} />
          <Button
            type="button"
            onClick={() => dispatch(increaseQuantity(item))}
          >
            <FaPlus />
          </Button>
        </QuantityWrap>
        <Price>{totalPrice}</Price>
        <DeleteBtn type="button" onClick={deleteFromCart}>
          <FaXmark />
        </DeleteBtn>
      </GoodWrap>
      {capacityKey && (
        <CapacityWrap>
          <Capacity>
            <Battery0BarIcon
              sx={{
                width: {
                  mobile: 14,
                  desktop: 19,
                },
                height: {
                  mobile: 14,
                  desktop: 19,
                },
              }}
            />
            <p>{capacityKey}Ah</p>
          </Capacity>
          {selectedSealing && (
            <SealingHolders>
              <CheckCircleOutlineIcon
                sx={{
                  color: ' rgb(20, 211, 16)',
                  width: {
                    mobile: 14,
                    desktop: 16,
                  },
                  height: {
                    mobile: 14,
                    desktop: 16,
                  },
                }}
              />
              <p>Герметизація</p>
            </SealingHolders>
          )}
          {selectedHolder && (
            <SealingHolders>
              <CheckCircleOutlineIcon
                sx={{
                  color: ' rgb(20, 211, 16)',
                  width: {
                    mobile: 13,
                    desktop: 16,
                  },
                  height: {
                    mobile: 13,
                    desktop: 16,
                  },
                }}
              />
              <p>Використовувати холдери</p>
            </SealingHolders>
          )}
        </CapacityWrap>
      )}
    </Item>
  );
};
