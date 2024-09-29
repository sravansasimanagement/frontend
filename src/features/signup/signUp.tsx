import React from "react";

import { signUpRequest } from "./signUpApi";
import SignUpForm from "../../components/SignUpForm";
import { useAppDispatch } from "../../store";

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const handleSuccess = (value: any) => {
    dispatch(signUpRequest(value));
  };

  return (
    <>
      <div>
        <SignUpForm data-testid="signupform" onSubmit={handleSuccess} />
      </div>
    </>
  );
};
