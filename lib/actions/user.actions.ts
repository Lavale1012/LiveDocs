"use server";

import { clerkClient, EmailAddress } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import { liveblocks } from "../liveblocks";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    const { data } = await clerkClient.users.getUserList({
      emailAddress: userIds,
    });
    const users = data.map((user) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}}`,
      email: user.emailAddresses[0].emailAddress,
      avatar: user.imageUrl,
    }));
    const soetedUsers = userIds.map((email) =>
      users.find((user) => user.email === email)
    );
    return parseStringify(soetedUsers);
  } catch (error) {
    console.log(`Error getting users: ${error}`);
  }
};
