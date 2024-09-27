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
      defaultAccesses: ["room:write"],
    });

    revalidatePath("/");
    return parseStringify(room);
  } catch (error) {
    console.log(`Error happened when creating a room ${error}`);
  }
};
export const getDocument = async ({
  roomId,
  userId,
}: {
  roomId: string;
  userId: string;
}) => {
  try {
    const room = await liveblocks.getRoom(roomId);

    const hasAccess = Object.keys(room.usersAccesses).includes(userId);

    // if (!hasAccess) {
    //   throw new Error("You do not have access to this document");
    // }

    return parseStringify(room);
  } catch (error) {
    console.log(`Error happened while getting a room: ${error}`);
  }
};
// export const updateDocument = async (roomId: string, title: string) => {
//   try {
//     const updateRoom = await liveblocks.updateRoom(roomId, {
//       metadata: {
//         title,
//       },
//     });
//     revalidatePath(`/documents/${roomId}`);
//     parseStringify(updateRoom);
//   } catch (error) {
//     console.log(`Error happened while updating room ${error}`);
//   }
// };
export const updateDocument = async (
  roomId: string,
  title: string
): Promise<boolean> => {
  try {
    const updateRoom = await liveblocks.updateRoom(roomId, {
      metadata: {
        title,
      },
    });
    revalidatePath(`/documents/${roomId}`);
    parseStringify(updateRoom);
    return true; // Indicating success
  } catch (error) {
    console.log(`Error happened while updating room: ${error}`);
    return false; // Indicating failure
  }
};
