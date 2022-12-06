import { TableCell, TableSortLabel } from '@mui/material';
import {
  Box,
  Button,
  Select,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/system';

export const CustomCell = styled(TableCell)(() => ({
  borderBottom: 'none',
  color: 'GrayText',
 maxWidth:'7rem',
 minWidth:'5rem'



}));

export const CustomTableContainer = styled(TableContainer)(() => ({
  height: '70vh',
  overflowY: 'auto',
  background: 'white',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

export const CustomPagination = styled(TablePagination)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderTop: '1px solid #e1e1e1',
  borderBottom: 'none',
  height: '74px',
  color: 'GrayText',
  background: 'white',
}));

export const CircleBtn = styled(Button)(() => ({
  height: '65px',
  background: 'white',
  borderRadius: '50%',
  position: 'absolute',
  bottom: '-20%',
  left: '1%',
  zIndex: '99',
  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  '&:hover': {
    backgroundColor: 'white',
  },
}));

export const CustomBox = styled(Box)(() => ({
  height: '20vh',
  background: '#0b52a2',
  position: 'relative',
  display:'flex',
  justifyContent:'flex-start',
  alignItems:'self-end',
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.3)",
  zIndex:'99'



}));
export const CustomTableRow = styled(TableRow)(() => ({
  transition: 'all 0.6s ease-out',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#e1e1e1',
    transition: 'all 0.5s ease-out',
  },
}));

export const CustomSelect = styled(Select)(()=>({
  outline:'1px solid white',
  width:'10rem',
  height:'2rem',
  color:'white',

}))

export const CustomTableHeaderCell = styled(TableCell)(()=>({
fontWeight:'500',
  color:'gray',

}))
