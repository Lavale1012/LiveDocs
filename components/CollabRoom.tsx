"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Header from "./Header";
import { Editor } from "./editor/Editor";

function CollabRoom() {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className=" collaborative-room">
          <Header>
            <div className="flex w-fit items-center justify-center gap-2">
              <p className=" document-title">share</p>
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default CollabRoom;
