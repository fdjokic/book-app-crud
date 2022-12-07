import { ISingleBookPOST } from '../types/books.interfaces';
import { baseUrl } from './../axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBase64 } from '../helpers';
import { toast } from 'react-toastify';
import { ISingleBook } from '../types/books.interfaces';

const initialState = {
  isLoading: false,
  books: [],
  singleBook: {},
  totalRecords: null,
  limit: null,
  selectOptions:[],
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (filter: string | null, thunkAPI) => {
    try {
      let resp;

      if (filter) {
        resp = await baseUrl.get('/books' + filter);
      } else {
        resp = await baseUrl.get('/books');
      }
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleBook = createAsyncThunk(
  'books/getSingleBook',
  async (id: undefined | string | number, thunkAPI) => {
    try {
      const resp = await baseUrl.get('/books/' + id);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id: number, thunkAPI) => {
    try {
      const resp = await baseUrl.delete('/books/' + id);

      thunkAPI.dispatch(getBooks('?startPage=1&limitPage=10'));
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createBook = createAsyncThunk(
  'books/createBook',
  async (book: ISingleBookPOST, thunkAPI) => {
    try {
   
      const resp = await baseUrl.post('/books', book, thunkAPI);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSelectOptions = createAsyncThunk(
  'books/getSelectOptions',
  async (_, thunkAPI) => {
    try {
    
       const  resp = await baseUrl.get('/books');

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateBook = createAsyncThunk('books/updateBook',async(book:any,thunkAPI)=>{
  try {
    const  resp = await baseUrl.patch('/books/' + book.id, book);

      return resp.data;
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
    
  }
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled.type]: (state, { payload }) => {
      state.books = payload.records;
      state.isLoading = false;
      state.totalRecords = payload.totalRecords;
      state.limit = payload.limit;
    
    },
    [getBooks.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getSingleBook.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getSingleBook.fulfilled.type]: (state, { payload }) => {
      state.singleBook = payload;
      state.isLoading = false;
    },
    [getSingleBook.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [deleteBook.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteBook.fulfilled.type]: (state) => {
      state.isLoading = false;
      toast.success('Book deleted')
    },
    [deleteBook.rejected.type]: (state) => {
      state.isLoading = false;
    },

    [createBook.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createBook.fulfilled.type]: (state) => {
      state.isLoading = false;
      toast.success('Book added')
    },
    [createBook.rejected.type]: (state, {payload}) => {
      state.isLoading = false;
      toast.success(payload.error.responseMessage[0])

    },
    [getSelectOptions.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getSelectOptions.fulfilled.type]: (state, { payload }) => {

      state.isLoading = false;

      state.selectOptions = payload.records.map((i:ISingleBook) => {
        return  i.nameOfAuthor 
      })
    },
    [getSelectOptions.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [updateBook.pending.type]: (state) => {
      state.isLoading = true;
    },
    [updateBook.fulfilled.type]: (state) => {
      state.isLoading = false;
      toast.success('Book updated')
    },
    [updateBook.rejected.type]: (state, {payload}) => {
      state.isLoading = false;
      toast.success(payload.error.responseMessage[0])

    },

    
  },
});

// export const { handleEdit } = books.actions
export default booksSlice.reducer;
