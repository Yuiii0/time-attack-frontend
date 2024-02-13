import { createSlice } from "@reduxjs/toolkit";

type ModalStore = {
  modal: React.ReactElement | null;
};

const initialState: ModalStore = {
  modal: null,
};

const modalSlice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    setModal: (
      state,
      action: { type: string; payload: ModalStore["modal"] }
    ) => {
      state.modal = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { setModal } = modalSlice.actions;
