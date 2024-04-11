"use client";

import { useState } from "react";
import { getFormattedDate } from "@/util";
import { createBatches } from "@/server/actions";
import { Bounce, toast } from "react-toastify";

export default function Home() {
  const [curDate, setCurdate] = useState<string>(getFormattedDate(new Date()))

  async function clientAction(formData: FormData) {
    const result = await createBatches(formData);
    if (result?.error) {
      toast.error(result?.error, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    else {
      toast.success('Success', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
      <>
        <div className="container m-0 bg-[#222222] mx-auto p-2 max-w-[500px]">
          <div className="grid grid-cols gap-0.5 sm:mx-auto sm:w-full border-2 border-[#55462f] rounded-md p-10">
            <p className="text-xl text-white font-[500] mb-2">
              Batch Form
            </p>
            <form className="space-y-4" action={clientAction} method="POST">
              <div>
                {/* Model */}
                <div className="mt-2">
                  <select
                    id="model"
                    name="model"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    defaultValue=""
                    >
                    <option disabled={true} value="">Model</option>
                    <option value="1">Model 1</option>
                    <option value="2">Model 2</option>
                    <option value="3">Model 3</option>
                  </select>
                </div>
              </div>
              {/* Date @client question: is this date editable? */}
              <div>
                <div className="mt-2">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    defaultValue={curDate}
                  />
                </div>
              </div>
              {/* Quantity */}
              <div>
                <div className="mt-2">
                  <input
                    placeholder="Quantity"
                    id="quantity"
                    name="quantity"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* License Level */}
              <div>
                <div className="mt-2">
                  <select
                    id="licenseLevel"
                    name="licenseLevel"
                    required
                    className="cursor-pointer block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    defaultValue=""
                  >
                    <option disabled={true} value="">License Level</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </div>
              </div>
              {/* Comment */}
              <div>
                <div className="mt-2">
                  <input
                    placeholder="Comment (Not required)"
                    id="comment"
                    name="comment"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#796038] px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-[#796038] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644f2c]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
      
  );
}