import { baseUrl } from './../axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBase64 } from '../helpers';
import { toast } from 'react-toastify';

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
  async (id: number, thunkAPI) => {
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
  async (book: any, thunkAPI) => {
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

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled.type]: (state:any, { payload }) => {
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
      console.log(payload);
    },
    [getSingleBook.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [deleteBook.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteBook.fulfilled.type]: (state) => {
      state.isLoading = false;
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
    [getSelectOptions.fulfilled.type]: (state:any, { payload }) => {

      state.isLoading = false;

      state.selectOptions = payload.records.map((i:any) => {
        return  i.nameOfAuthor 
      })
    },
    [getSelectOptions.rejected.type]: (state) => {
      state.isLoading = false;
    },

    
  },
});

// export const { handleEdit, handleAddCompany, clearCompanies } = books.actions
export default booksSlice.reducer;
