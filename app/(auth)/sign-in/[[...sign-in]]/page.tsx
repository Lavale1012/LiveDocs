import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
  return (
    <main className=" auth-page">
      <SignIn routing="hash" />
    </main>
  );
}

export default SignInPage;
