import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status, type SubjectType } from "../types/classTypes";
import axios from "axios";
import type { AppDispatch } from "./store";


const  InitialState = {
    books : [],
    status : Status.LOADING,
} 

export interface BookState {
    books: SubjectType[];
    status: Status;
}

const book = createSlice({
    name : "books",
    initialState : InitialState ,
    reducers : {

        setBooks(state:BookState, action:PayloadAction<SubjectType[]>){
            state.books = action.payload;   
        },
        setStatus(state:BookState, action:PayloadAction<Status>){
            state.status = action.payload;
        }


    }
})
export const {setBooks, setStatus} = book.actions
export default book.reducer


export function addBooks(classNum: string, bookName: string) {
  return async function addBooksThunk(dispatch: AppDispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await axios.get(
        `https://cdc-apis.onrender.com/api/books/` + classNum + `/` + bookName
      );
      console.log(response.data);
      const { link } = response.data;

      if (response.status == 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setBooks(response.data.data));
        if (link) {
          window.open(link, "_blank");
        } else {
          console.warn("No PDF link found");
        }
      } else {
        dispatch(setStatus(Status.ERROR));
        alert("No books found for this class and subject");
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
      console.log(error);
    }
  };
}