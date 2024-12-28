import clsx from "clsx";
import { buttonProps } from "@/app/src/types";

function Button({ type, text, onClick, actionButton, bgColor}: buttonProps) {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton && "text-white hover:bg-blue-800 rounded-md justify-center focus:ring-4 font-medium founded-lg text-sm px-5 py-2.5 m-auto focus:outline-none bg-blue-800",
          bgColor && `${bgColor} hover:${bgColor} focus:ring-4 rounded-md font-medium justify-center founded-lg text-sm px-5 py-2.5 m-auto focus:outline-none`
        )}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;