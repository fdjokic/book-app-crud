import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ISingleBook, ISingleBookPOST } from '../books.interfaces';
import { Header } from '../components/Header/Header';
import Input from '../components/Input/Inputs';
import { createBook } from '../features/bookSlice';
import { getBase64, onlyLetters } from '../helpers';
import { AppDispatch } from '../store';

export const AddBook = () => {
  const dispatch = useDispatch<AppDispatch>();
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

  const handleChange = async (e: any) => {
    const name = e.target.name;
    let value = e.target.value;
    const checkInt = ['numberOfPages', 'yearOfPublishing', 'quantity'];

    if (checkInt.includes(name)) {
      value = value && parseInt(value);
    }

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(createBook(state));
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
            label={state.dateOfBirthAuthor ? 'Date of Birth' : ''}
            name='dateOfBirthAuthor'
            type='date'
            width='30%'
            placeholder='Enter Date'
            value={state.dateOfBirthAuthor}
            onChange={handleChange}
          />
          <Input
            label='Number of pages'
            width='20%'
            name='numberOfPages'
            value={state.numberOfPages}
            onChange={handleChange}
            onKeyDown={onlyLetters}
          />
          <Input
            label='Year of publishing'
            width='20%'
            name='yearOfPublishing'
            value={state.yearOfPublishing}
            onChange={handleChange}
            onKeyDown={onlyLetters}
          />
          <Input
            label='Quantity'
            width='20%'
            name='quantity'
            value={state.quantity}
            onChange={handleChange}
            onKeyDown={onlyLetters}
          />
          <input
            name='coverPhoto'
            onChange={(e: any) => {
              getBase64(e.target.files[0]).then((res) =>
                setState((prev: ISingleBookPOST) => {
                  const copy = { ...prev };
                  copy.coverPhoto = res;
                  return copy;
                })
              );
            }}
            type='file'
            accept='image/*'
          />
          <button onClick={handleSubmit}></button>
        </form>
      </div>
    </>
  );
};
