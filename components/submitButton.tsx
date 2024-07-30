import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group bg-gray-900 dark:bg-white/10 text-white px-7 py-3 flex items-center h-[3rem] w-[8rem] gap-2 rounded-full outline-none transition focus:bg-gray-700 hover:bg-gray-700 active:bg-gray-600 dark:focus:bg-gray-800 dark:hover:bg-gray-800 dark:active:bg-gray-700"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}