import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton() {
    return(
        <div>
            <Link href="/admin/mainpanel" className="inline-block">
                    <button
                      type="button"
                      className="
                        flex items-center gap-2
                        text-white bg-gray-600                 hover:bg-gray-700
                        px-4 py-2 rounded-md
                        transition-transform duration-200 ease-in-out
                        hover:scale-105
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                        cursor-pointer
                        mt-3 
                        ml-2
                      "
                      aria-label="Back to dashboard"
                    >
                      <ArrowLeft size={20} />
                      <span className="font-semibold text-sm ">Back</span>
                    </button>
                  </Link>
        </div>
    )
}