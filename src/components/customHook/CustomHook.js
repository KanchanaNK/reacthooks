import React from "react";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import DocTitle from "./DocTitle";
import DocTitle2 from "./DocTitle2";
import UserForm from "./UserForm";

export default function CustomHook() {
  return (
    <div className="row">
      <div>
        <DocTitle />
        <DocTitle2 />
      </div>
      <div>
        <Counter />
        <Counter2 />
      </div>
      <div>
          <UserForm/>
      </div>
    </div>
  );
}
