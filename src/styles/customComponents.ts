import { Box, Button, TableCell, TablePagination } from "@mui/material";
import { styled } from "@mui/system";

export const CustomCell = styled(TableCell)(()=>({
    borderBottom:'none',
    color:'GrayText'
}))

export const CustomPagination = styled(TablePagination)(()=>({
    display:'flex',
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
    height:'150px',
    background:'blue',
    position:'relative',

}))