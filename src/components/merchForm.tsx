






"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { createMerch, merchActionState } from "@/app/admin/addmerch/merch";
import { showError, showSuccess } from "@/app/utils/toast";
import BackButton from "./backbutton";

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
        return await handler(formData);
      }
      return await createMerch(undefined, formData);
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
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 bg-black">
      
     
      {/* Blurred Background Image */}
      <div
  aria-hidden="true"
  className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-50"
  style={{
    backgroundImage: `url('/pictures/imagespupel.jpg')`,
    zIndex: 0,
  }}
/>

 {/* <BackButton/> */}
      {/* Frosted Glass Form Container */}
      <div className="relative z-10 w-full max-w-xl bg-white/30 border border-white/40 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-8 space-y-8 rounded-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
          {isEdit ? "Edit Product" : "Add New Product"}
        </h1>

        <form action={formAction} className="space-y-6">
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
              className="w-full bg-blue-900 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl
             bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700  hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700
              "
            >
              {isPending ? "Saving..." : isEdit ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
