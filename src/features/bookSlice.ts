import { baseUrl } from './../axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading:false,
    books:[],
    singleBooks:{},
    totalRecords:null,
    limit:null
}


export const getBooks = createAsyncThunk('books/getBooks',async(filter:string,thunkAPI)=>{
    try {
            let resp
      
            if (filter) {
              resp = await baseUrl.get('/books' + filter)
            } else {
           resp = await baseUrl.get('/books')
            }
            return resp.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const booksSlice = createSlice({
    name:'books',
    initialState,
    reducers:{},
    extraReducers:{

        [getBooks.pending.type]: (state) => {
            state.isLoading = true
          },
          [getBooks.fulfilled.type]: (state, { payload }) => {
            state.books = payload.records
            state.isLoading = false
            state.totalRecords = payload.totalRecords
            state.limit = payload.limit
          },
          [getBooks.rejected.type]: (state) => {
            state.isLoading = false
          },
    }
})

// export const { handleEdit, handleAddCompany, clearCompanies } = books.actions
export default booksSlice.reducer