import { Liveblocks } from "@liveblocks/node";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_9rTh8gDko--8YwZ2P4TIce7Hk3b1wonKsNUtSPryud_Chye3AXRxMp5mvXJr-ijX",
});

export async function POST(request: Request) {
  // Get the current user from your database
  const user = __getUserFromDB__(request);

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.id,
      groupIds, // Optional
    },
    { userInfo: user.metadata }
  );

  return new Response(body, { status });
}
