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
            <Image src={avatar} alt={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activecollab;
