// src/utils/toast.tsx
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

export const showSuccess = (title: string, message: string) =>
  toast.custom((t) => (
    <div
      className={`bg-green-100 text-green-800 px-4 py-3 rounded shadow-lg flex items-start gap-3 max-w-sm w-full ${
        t.visible ? "animate-enter" : "animate-leave"
      }`}
    >
      <FaCheckCircle className="text-green-600 text-xl mt-1" />
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  ));

export const showError = (title: string, message: string) =>
  toast.custom((t) => (
    <div
      className={`bg-red-100 text-red-800 px-4 py-3 rounded shadow-lg flex items-start gap-3 max-w-sm w-full ${
        t.visible ? "animate-enter" : "animate-leave"
      }`}
    >
      <MdError className="text-red-600 text-xl mt-1" />
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  ));
