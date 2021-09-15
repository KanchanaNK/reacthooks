import React, { useContext } from "react";
import { UserContext } from "./UseContext";
import { ChannelContext } from "./UseContext";

export default function ComponentF() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      comp F - {user}, {channel}
    </div>
  );
}
