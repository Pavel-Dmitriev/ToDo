import { useState } from "react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

import Textarea from "components/Textarea";

import { ITextAreaWprapper } from "./interface";

function TextareaWrapper({ text, name, className, placeholder = "Добавить" }: ITextAreaWprapper) {
  const [isHovered, setIsHovered] = useState(false);

  const { register } = useFormContext();

  function toggleHover() {
    setIsHovered(!isHovered);
  }

  return (
    <div
      className={clsx(
        "relative mb-8 flex min-h-[46px] flex-col overflow-y-auto rounded-default",
        className,
      )}
    >
      <Textarea
        {...register(name)}
        placeholder={placeholder}
        className={clsx(
          "min-h-[46px] flex-1 resize-none border-1 bg-white px-12 text-xs text-xs transition-colors duration-300 placeholder:font-normal hover:border-gray-900 focus:outline-none focus-visible:outline-none",
          {
            "font-semibold leading-5": !isHovered,
            "border-solid border-gray-400": isHovered,
          },
        )}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        defaultValue={text}
        maxLength={255}
        readOnly={!isHovered}
      />
    </div>
  );
}

export default TextareaWrapper;
