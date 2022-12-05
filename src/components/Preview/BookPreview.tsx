import React from 'react';
import { ISingleBook, ISingleBookInfo } from '../../books.interfaces';
import { IconContainer } from './IconContainer';

export const BookPreview = ({
  slide,
  bookInfo,
  setSlide,
}: {
  slide: boolean;
  bookInfo: any;
  setSlide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log(bookInfo);
  return (
    <div className={slide ? 'singleBook show' : 'singleBook'}>
      <div style={{ background: '#002b73', height: '20vh' }}>
        <IconContainer id={bookInfo.id} setSlide={setSlide} />
        <div
          style={{
            textAlign: 'left',
            width: '100%',
          }}
        >
          <div
            style={{
              padding: '2.5rem 1.5rem',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.3rem',
            }}
          >
            <h4>{bookInfo.title}</h4>
            <h6>{bookInfo.nameOfAuthor}</h6>
          </div>
        </div>
      </div>
      <img
        src={bookInfo.coverPhoto}
        alt=''
        style={{ width: '100%', height: '40%', objectFit: 'contain' }}
      />
    </div>
  );
};
