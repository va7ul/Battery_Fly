import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import { Wrapper, Title } from './UserProfile.styled';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAuth } from 'utils/hooks';
import { useMediaQuery } from 'react-responsive';



export const UserProfile = () => {
    const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });
  const {
    userData: { firstName, lastName, patronymic, tel, email },
  } = useAuth();

  function createData(userData, value) {
  return { userData, value };
}

const rows = [
  createData('Ім’я', firstName),
  createData('Прізвище', lastName),
  createData('По батькові', patronymic),
  createData('Мобільний номер', tel),
  createData('Email', email),
  createData('Пароль', '*********'),
];
 
  return (
    <Wrapper>
      {desktopVersion && <SideBarNav />}
      <div>
        <Title>Користувач</Title>

        <TableContainer
          component={Paper}
          sx={{ backgroundColor: 'rgba(255,255,255,1)' }}
        >
          <Table sx={{ minWidth: 175 }} aria-label="user data table">
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.userData}>
                  <TableCell
                    style={{ fontSize: '10px', padding: '10px' }}
                    component="th"
                    scope="row"
                  >
                    {row.userData}
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: '10px',
                      fontWeight: '600',
                      textAlign: 'left',
                      padding: '10px'
                    }}
                    align="right"
                  >
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Wrapper>
  );
};
