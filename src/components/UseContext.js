import React from "react";
import ComponentC from "./ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function UseContext() {
  return (
    <div>
      <UserContext.Provider value={"User"}>
        <ChannelContext.Provider value={"Channel"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
