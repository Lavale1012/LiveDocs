import { useOthers } from "@liveblocks/react/suspense";
import { link } from "fs";
import Image from "next/image";
import React from "react";

const Activecollab = () => {
  const others = useOthers();
  const collabs = others.map((other) => other.info);
  return (
    <div>
      <ul className=" collaborators-list">
        {collabs.map(({ id, avatar, name, color }) => (
          <li key={id}>
            <Image
              src={avatar}
              alt={name}
              width={100}
              height={100}
              className=" inline-block size-8 rounded-full ring-2 ring-dark-100"
              style={{ border: `3px solid ${color}` }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activecollab;
