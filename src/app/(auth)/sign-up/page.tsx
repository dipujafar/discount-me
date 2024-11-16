import React from "react";
import SignUpForm from "./_components/SignUpForm";
import Container from "@/components/ui/container";

const SignUpPage = () => {
  return (
    <Container className="flex-center min-h-[calc(100vh-200px)] mt-2">
      <SignUpForm></SignUpForm>{" "}
    </Container>
  );
};

export default SignUpPage;
