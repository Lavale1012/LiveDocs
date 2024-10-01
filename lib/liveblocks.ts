import { Liveblocks } from "@liveblocks/node";

// Ensure the environment variable is correctly set
if (!process.env.LIVEBLOCKS_SECRET_KEY) {
  throw new Error("Missing LIVEBLOCKS_SECRET_KEY environment variable");
}

console.log("Liveblocks Secret Key:", process.env.LIVEBLOCKS_SECRET_KEY); // Temporary logging for debugging

export const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});
