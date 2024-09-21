import { error } from "console";
import { nanoid } from "nanoid";

export const createDocument = async ({
  userId,
  email,
}: CreateDocumentParams) => {
  const roomId = nanoid();
  try {
  } catch (error) {
    console.log(`Error happened when creating a room ${error}`);
  }
};
