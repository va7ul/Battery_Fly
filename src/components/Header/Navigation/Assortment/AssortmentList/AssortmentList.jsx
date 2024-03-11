import { Batteries } from '../Batteries/Batteries';
import { ListItem } from './ListItem/ListItem';

export const AssortmentList = ({
  handleClick,
  openSubDrawer,
  setOpenSubDrawer,
  isOpen,
  setIsOpen,
}) => {
  const closeSubDrawer = newOpen => {
    if (openSubDrawer) {
      return handleClick(newOpen);
    }
  };

  return (
    <ul onClick={closeSubDrawer(false)}>
      <ListItem page="/sales" title="Акції" />
      <Batteries
        openSubDrawer={openSubDrawer}
        setOpenSubDrawer={setOpenSubDrawer}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <ListItem page="/assembly" title="Готові батареї" />
      <ListItem page="/batteries-for-fpv" title="Батареї для FPV-дронів" />
      <ListItem
        page="/batteries-for-transport"
        title="Батареї для електротранспорту"
      />
      <ListItem page="/batteries-for-toys" title="Батареї для іграшок" />
      <ListItem page="/devices" title="Прилади" />
      <ListItem page="/materials" title="Розхідні матеріали" />
    </ul>
  );
};