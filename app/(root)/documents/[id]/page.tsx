import CollabRoom from "@/components/CollabRoom";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

function Document() {
  return (
    <main className=" flex w-full flex-col items-center">
      <CollabRoom />
    </main>
  );
}

export default Document;
