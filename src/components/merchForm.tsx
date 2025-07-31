


// "use client";

// import { useActionState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// import { createMerch, type merchActionState } from "@/app/admin/addmerch/merch";
// import { showError, showSuccess } from "@/app/utils/toast";


// export type IMerchandise = {
//   merchandise: {
//     image?: string;
//     title?: string;
//     description?: string;
//     price?: number;
//   } | null;
// }


// export default function MerchForm( {merchandise}:IMerchandise) {
//   const router = useRouter();

//   // const merchAction = async (_prevState: merchActionState, formData: FormData) => {
//   //   return await createMerch(formData);
//   // };

//   const [state, action, isPending] = useActionState<merchActionState, FormData>(
//    createMerch ,
//     {}
//   );

//   useEffect(() => {
//     if (state?.success) {
//       showSuccess("Success", "Product was added successfully!");
//       router.push("/dashboard");
//     } else if (state?.errors) {
//       showError("Error", "Please fix the form errors and try again.");
//     }
//   }, [state, router]);

//   return (
//     <div className="min-h-screen bg-gradient-to-r     bg-gradient-to-b   from-neutral-900 via-gray-800 to-neutral-900 flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-xl bg-gray-50 border border-gray-10 shadow-2xl p-8 space-y-8">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Add New Product</h1>

//         <form action={action} className="space-y-6">
//           {/* Image */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900">Image URL</label>
//             <input
//               type="text"
//               name="image"
//               placeholder="https://example.com/image.jpg"
//               className="mt-1 w-full  max-w-xl px-3 py-2   rounded-xl border border-gray-600 bg-gray-100 text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
//               defaultValue={    state?.image || merchandise?.image }
//             />
//             {state?.errors?.image && (
//               <p className="text-red-400 text-sm mt-1">{state.errors.image[0]}</p>
//             )}
//           </div>

//           {/* Title */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900">Title</label>
//             <input
//               type="text"
//               name="title"
//               placeholder="Product name"
//               className="mt-2 w-full max-w-xl px-3 py-2 rounded-xl border border-gray-600 bg-gray-100  text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
//                defaultValue={ state?.title || merchandise?.title }
//             />
//             {state?.errors?.title && (
//               <p className="text-red-400 text-sm mt-1">{state.errors.title[0]}</p>
//             )}
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900 ">Description</label>
//             <textarea
//               name="description"
//               rows={4}
//               placeholder="Detailed product description..."
//               className="mt-1 w-full  px-1 py-1 rounded-xl border border-gray-600 bg-gray-100  text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
//                defaultValue={     state?.description || merchandise?.description     }
//             ></textarea>
//             {state?.errors?.description && (
//               <p className="text-red-400 text-sm mt-1">{state.errors.description[0]}</p>
//             )}
//           </div>

//           {/* Price */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900">Price ($)</label>
//             <input
//               type="number"
//               name="price"
//               step="0.01"
//               placeholder="99.99"
//               className="mt-1 w-full  max-w-xl px-3 py-2     rounded-xl border border-gray-600 bg-gray-100  text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
//                defaultValue={  state?.price|| merchandise?.price  }
//             />
//             {state?.errors?.price && (
//               <p className="text-red-400 text-sm mt-1">{state.errors.price[0]}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               disabled={isPending}
//               className="w-full bg-blue-900 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300 disabled:opacity-50"
//             >
//               {isPending ? "Uploading..." : "Add Product"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
//down or
"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { createMerch, merchActionState } from "@/app/admin/addmerch/merch";
import { showError, showSuccess } from "@/app/utils/toast";

export type MerchandiseType = {
  _id?: string;
  image?: string;
  title?: string;
  description?: string;
  price?: number;
};

   export type Props = {
  merchandise?: MerchandiseType | null;
  handler?: (formData: FormData) => Promise<merchActionState>;
};

const initialState: merchActionState = {
  success: false,
  // errors: null,
  image: "",
  title: "",
  description: "",
  price: 0,
};

export default function MerchForm({ merchandise = null, handler }: Props) {
  const router = useRouter();


const [state, formAction, isPending] = useActionState<merchActionState, FormData>(
  async (_prevState, formData) => {
    if (handler) {
      return await handler(formData); // handler expects 1 argument 
    }
    return await createMerch(undefined, formData); // createMerch expects 2 arguments 
  },
  initialState
);

  useEffect(() => {
    if (state.success) {
      showSuccess("Success", "Product saved successfully!");
      router.push("/");
    } else if (state.errors) {
      showError("Error", "Please fix the form errors and try again.");
    }
  }, [state, router]);

  const isEdit = Boolean(merchandise?._id);

  return (
    <div className="min-h-screen bg-white from-neutral-900 via-gray-800 to-neutral-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-gray-50 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-8 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
          {isEdit ? "Edit Product" : "Add New Product"}
        </h1>

        <form action={formAction} className="space-y-6">
          {/* {merchandise?._id && (
            <input type="hidden" name="id" value={merchandise._id} />
          )} */}
          {/* server receives the product ID through this hidden input */}
          <input type="hidden" name="id" value={merchandise?._id} />


          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-900">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-600 bg-gray-100 text-black"
              defaultValue={state.image || merchandise?.image || ""}
            />
            {state.errors?.image && <p className="text-red-500 text-sm">{state.errors.image[0]}</p>}
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-900">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Product name"
              className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-600 bg-gray-100 text-black"
              defaultValue={state.title || merchandise?.title || ""}
            />
            {state.errors?.title && <p className="text-red-500 text-sm">{state.errors.title[0]}</p>}
          </div>

        
          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-900">Price ($)</label>
            <input
              type="number"
              name="price"
              step="0.01"
              className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-600 bg-gray-100 text-black"
              defaultValue={
                typeof state.price === "number"
                  ? state.price
                  : merchandise?.price?.toString() || ""
              }
            />
            {state.errors?.price && (
              <p className="text-red-500 text-sm">{state.errors.price[0]}</p>
            )}
          </div>
  {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-900">Description</label>
            <textarea
              name="description"
              rows={4}
              placeholder="Detailed product description..."
              className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-600 bg-gray-100 text-black"
              defaultValue={state.description || merchandise?.description || ""}
            />
            {state.errors?.description && (
              <p className="text-red-500 text-sm">{state.errors.description[0]}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-900 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl"
            >
              {isPending ? "Saving..." : isEdit ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
