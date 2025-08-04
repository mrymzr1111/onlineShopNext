
"use client";

import { useState } from "react";
 
export default function DeleteMerchForm({ merchId }: { merchId: string }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("id", merchId);

    await fetch("/api/delete-merch", {
      method: "POST",
      body: formData,
    });

    window.location.reload(); // or revalidate path
  };

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="bg-red-600 hover:bg-red-700 text-sm text-white font-semibold py-1 px-3 rounded transition"
      >
        Delete
      </button>

      {showConfirm && (
        <div className="fixed inset-0 z-50  bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center space-y-4">
            <h2 className="text-lg font-bold text-gray-800">Are you sure?</h2>
            <p className="text-gray-600">You won’t be able to recover this item after deletion.</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleSubmit}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Yes, delete
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
