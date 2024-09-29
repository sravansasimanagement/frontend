import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";
import { ISignUp } from "../../models/signUp";

export const signUpRequest = createAsyncThunk(
  "api/users",
  async (inputValue: ISignUp) => {
    try {
      const response = await API.post("api/users", inputValue);
      if (response.status === 201) {
        return response.data;
      } else {
        return new Error("Failed to create user");
      }
    } catch (error) {
      console.log(error);
    }
  }
);
