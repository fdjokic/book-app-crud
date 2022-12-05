import React from 'react';
import { CircleBtn } from '../../styles/customComponents';
import AddIcon from '@mui/icons-material/Add';

interface ICirlceBtn {
  slide: boolean;
  setSlide: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CircleButton = ({ setSlide, slide }: any) => {
  return (
    <CircleBtn onClick={() => setSlide(!slide)}>
      <AddIcon
        fontSize='large'
        sx={{ color: 'green', verticalAlign: 'middle', fontSize: 20 }}
      />
    </CircleBtn>
  );
};
