import React, { useState } from 'react';
import { ISingleBook, ISingleBookPOST } from '../books.interfaces';
import { Header } from '../components/Header/Header';
import Input from '../components/Input/Inputs';

export const AddBook = () => {
  const [state, setState] = useState<ISingleBookPOST>({
    isbn: 23902390923,
    title: '',
    nameOfAuthor: '',
    dateOfBirthAuthor: '',
    numberOfPages: null,
    yearOfPublishing: null,
    quantity: null,
    coverPhoto: '',
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({ ...state, [name]: value });
  };
  console.log(state);
  return (
    <>
      <Header title='Add Book' />
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
        }}
      >
        <form
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '5rem',
          }}
        >
          <Input
            name='title'
            label='Title'
            value={state.title}
            onChange={handleChange}
          />
          <Input
            label='Author'
            placeholder='Name of author'
            value={state.nameOfAuthor}
            name='nameOfAuthor'
            onChange={handleChange}
          />
          <Input
            label='Number of pages'
            width='20%'
            name='numberOfPages'
            value={state.numberOfPages}
            onChange={handleChange}
          />
          <Input
            label='Year of publishing'
            width='20%'
            name='yearOfPublishing'
            type='number'
            value={state.yearOfPublishing}
            onChange={handleChange}
          />
          <Input
            label='Quantity'
            width='20%'
            name='quantity'
            value={state.quantity}
            onChange={handleChange}
          />
          <Input label='Title' name='blah' />
        </form>
      </div>
    </>
  );
};
