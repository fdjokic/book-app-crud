import { Box, Button, TableCell, TableContainer, TablePagination } from "@mui/material";
import { styled } from "@mui/system";

export const CustomCell = styled(TableCell)(()=>({
    borderBottom:'none',
    color:'GrayText'
}))

export const CustomTableContainer = styled(TableContainer)(()=>({
    height:'70vh',
    overflow:'auto',
}))

export const CustomPagination = styled(TablePagination)(()=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
    marginRight:'20px',
    borderTop:'1px solid #e1e1e1',
    borderBottom:'none',
    height:'70px',
    color:'GrayText'

}))

export const CircleBtn = styled(Button)(()=>({
 height:'65px',
 background:'white',
    borderRadius:'50%',
    position:'absolute',
    bottom:'-20%',
    left:'1%',
    zIndex:'99',
    boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)',
   
}))

export const CustomBox = styled(Box)(()=>({
    height:'20vh',
    background:'blue',
    position:'relative',

}))