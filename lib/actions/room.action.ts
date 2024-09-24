"use server";

import { error } from "console";
import { nanoid } from "nanoid";
import { title } from "process";
import { liveblocks } from "../liveblocks";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";

export const createDocument = async ({
  userId,
  email,
}: CreateDocumentParams) => {
  const roomId = nanoid();
  try {
    const metadata = {
      creatorId: userId,
      email,
      title: "untitled",
    };
    const usersAccesses: RoomAccesses = {
      [email]: ["room:write"],
    };
    const room = await liveblocks.createRoom(roomId, {
      metadata,
      usersAccesses,
      defaultAccesses: [],
    });

    revalidatePath("/");
    return parseStringify(room);
  } catch (error) {
    console.log(`Error happened when creating a room ${error}`);
  }
};
