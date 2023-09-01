import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UploadState {
  file: File | null;
  title: string;
  category: string | null;
  widget: number[];
}

const initialState: UploadState = {
  file: null,
  title: "",
  category: null,
  widget: [0, 1],
};

export const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    uploadFile: (state, action: PayloadAction<File>) => {
      state.file = action.payload;
    },
    deleteFile: (state) => {
      state.file = null;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    setWidget: (state, action: PayloadAction<number[]>) => {
      state.widget = action.payload;
    },
    resetUpload: (state) => {
      state.file = null;
      state.title = "";
      state.category = null;
      state.widget = [];
    },
  },
});

export const {
  uploadFile,
  deleteFile,
  resetUpload,
  setTitle,
  setCategory,
  setWidget,
} = uploadSlice.actions;

export const selectFile = (state: { upload: UploadState }) => state.upload.file;
export const selectTitle = (state: { upload: UploadState }) =>
  state.upload.title;
export const selectCategory = (state: { upload: UploadState }) =>
  state.upload.category;
export const selectWidget = (state: { upload: UploadState }) =>
  state.upload.widget;
export const submitForm = (state: { upload: UploadState }) => {
  if (state.upload.file === null) return null;
  if (state.upload.title === "") return null;
  if (state.upload.category === null) return null;
  if (state.upload.widget.length === 0) return null;
  const formData = new FormData();
  formData.append("file", state.upload.file);
  formData.append("title", state.upload.title);
  formData.append("category", state.upload.category);
  formData.append("widget", state.upload.widget.join(","));
  return formData;
};

export default uploadSlice.reducer;
