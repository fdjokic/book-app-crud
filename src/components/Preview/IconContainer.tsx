import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Icon } from '../Icon/Icon';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { deleteBook } from '../../features/bookSlice';

export type IconType = ReturnType<typeof EditIcon>;

export const IconContainer = ({
  id,
  setSlide,
}: {
  id: number;
  setSlide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteBook(id));
    setSlide(false);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div style={{ padding: '1rem 1.5rem', display: 'flex', gap: '0.8rem' }}>
        <Icon
          width='25px'
          color='white'
          fontSize='25px'
          onClick={() => console.log('heey')}
        >
          <EditIcon />
        </Icon>
        <Icon width='25px' color='white' fontSize='25px' onClick={handleDelete}>
          <DeleteIcon />
        </Icon>
      </div>
    </div>
  );
};
