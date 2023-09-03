import { NoteDB } from "@/firebase/note";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNoteData = createAsyncThunk(
  "noteSlice/fetchNoteData",
  async (userEmail: string) => {
    try {
      const noteArray = await NoteDB.getNoteByEmail(userEmail);
      return noteArray;
    } catch (error) {
      throw error;
    }
  }
);

export type NoteUnit = {
  noteId: string;
  summaryText: string;
  title: string;
  category: string;
  userEmail: string;
};

export interface noteState {
  data: NoteUnit[] | null;
  loading: boolean;
  error: any;
}

const initialState: noteState = {
  data: null,
  loading: false,
  error: null,
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNoteData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNoteData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNoteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = noteSlice.actions;

export const noteData = (state: { note: noteState }) => state.note?.data;
export const noteLoading = (state: { note: noteState }) => state.note?.loading;
export const noteError = (state: { note: noteState }) => state.note?.error;

export default noteSlice.reducer;
