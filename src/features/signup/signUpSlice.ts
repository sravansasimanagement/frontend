import { createSlice } from "@reduxjs/toolkit";

import { signUpRequest } from "./signUpApi";

export const SignUpSlice = createSlice({
  name: "user",
  initialState: {
    list: {
      isLoading: false,
      status: "",
      values: [],
    },
    save: {
      status: "",
    },
  },
  reducers: {
    clearSuccessMessage: (state, payload) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(signUpRequest.pending, (state, action) => {
      // pending
      state.save.status = "pending";
    });
    builder.addCase(signUpRequest.fulfilled, (state, action) => {
      // fulfilled
      state.save.status = "success";
    });
    builder.addCase(signUpRequest.rejected, (state, action) => {
      // rejected
      state.save.status = "failed";
    });
  },
});

export default SignUpSlice.reducer;
