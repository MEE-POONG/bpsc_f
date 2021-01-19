import React from "react";
import CreateTitle from "./CreateTitle";
import CreateDetail from "./CreateDetail";
import CreateTag from "./CreateTag";
const Create = () => {
  return (
    <div className="create-page text-uppercase">
      <CreateTitle />
      <CreateDetail />
      <CreateTag/>
    </div>
  );
}

export default Create;
