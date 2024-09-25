"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.action";
import { useRouter } from "next/navigation";

function AddDocumentBtn({ userId, email }: AddDocumentBtnProps) {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className=" gradient-blue flex gap-1 shadow-md"
    >
      <Image
        src="/assets/icons/add.svg"
        alt="Add Document"
        width={20}
        height={20}
      />
      <p className=" hidden sm:block">Start a new document</p>
    </Button>
  );
}

export default AddDocumentBtn;
