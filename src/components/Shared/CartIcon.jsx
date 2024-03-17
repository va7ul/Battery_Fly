import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/basket/basketSelectors';

export const CartIcon = () => {
  const products = useSelector(selectItems);
  return (
    <Badge
      badgeContent={products.length}
      color="secondary"
      sx={{
        '& .MuiBadge-badge': {
          fontSize: 7,
          fontWeight: '400',
          color: 'background.default',
          height: {
            mobile: 12,
            desktop: 15,
          },
          minWidth: {
            mobile: 12,
            desktop: 15,
          },
          top: 5,
          p: 0,
        },
      }}
    >
      <ShoppingCartOutlinedIcon
        sx={{
          p: 0,
          color: 'background.paper',
          width: '20px',
          ' &:hover': {
            color: 'secondary.main',
          },
        }}
      />
    </Badge>
  );
};
