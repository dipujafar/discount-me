import React from "react";
import SignInForm from "./_components/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account to continue using our services.",
};

const SignInPage = () => {
  return (
    <div>
      <SignInForm></SignInForm>
    </div>
  );
};

export default SignInPage;
