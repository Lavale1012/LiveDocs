"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Header from "./Header";
import { Editor } from "./editor/Editor";
import Activecollab from "./Activecollab";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

function CollabRoom({ roomId, roomMetadata }: CollaborativeRoomProps) {
  const [editing, setEditing] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
  useEffect(() => {}, []);
  const updateTitleHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const currentUserType: String = "editor";

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className=" collaborative-room">
          <Header>
            <div
              className="flex w-fit items-center justify-center gap-2"
              ref={containerRef}
            >
              {editing && !Loading ? (
                <Input
                  type="text"
                  value={documentTitle}
                  ref={inputRef}
                  placeholder="Enter title"
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  onKeyDown={updateTitleHandler}
                  disabled={!editing}
                  className=" document-title-input"
                />
              ) : (
                <>
                  <p className=" document-title">{documentTitle}</p>
                </>
              )}
              {currentUserType === "editor" && !editing && (
                <Image
                  src="/assets/icons/edit.svg"
                  alt="edit icon"
                  width={24}
                  height={24}
                  onClick={() => setEditing(true)}
                  className="pointer"
                />
              )}
              {currentUserType !== "editor" && !editing && (
                <p className=" view-only-tag">view only</p>
              )}
              {Loading && <p className=" text-sm text-grey-400">Saving...</p>}
            </div>
            <div className=" flex w-full flex-1 justify-end gap-2 sm:gap-3">
              <Activecollab />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default CollabRoom;
