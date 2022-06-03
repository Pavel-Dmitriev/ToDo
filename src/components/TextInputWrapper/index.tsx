import React from "react";

import Button from "components/Button";

function TextInputWrapper() {
  return (
    <div className=" rounded-4 bg-gray pr-8 pl-8">
      <input placeholder="Добавить дело" className="mt-8 mr-4 mb-8 ml-8 w-[70%]" />
      <Button />
    </div>
  );
}

export default TextInputWrapper;
