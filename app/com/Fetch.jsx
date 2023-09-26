"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineReload } from "react-icons/ai";
const Fetch = ({ load, data }) => {
  return (
    <>
      {load ? (
        <div className="overflow-hidden">
          <div
            className="animate-spin flex h-[100vh] justify-center
		 items-center"
          >
            {" "}
            <AiOutlineReload className="text-xl text-black" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-3 gap-7 w-full px-[3%] py-3">
            {data.map((d, i) => (
              <div
                key={d.id}
                className="border-2 p-[2%] flex-1 basis-full h-auto rounded-xl border-black"
              >
                <div className="flex justify-center rounded-xl items-center">
                  <Image
                    src={d?.image}
                    alt={d.title}
                    width={200}
                    height={200}
                    className="max-h-[250px] max-w-[250px] min-w-[250px] min-h-[250px]"
                  />
                </div>
                <div className="flex flex-col w-full justify-center px-2 items-center">
                  <div className="py-2 font-semibold text-3xl">
                    {d.category.slice(0, 15)}
                  </div>
                  <div className="py-2 font-medium">{`${d.description.slice(
                    0,
                    80
                  )}...`}</div>
                  <div className="flex justify-between items-center pb-2 w-full">
                    <div className="font-medium text-xl text-[#4b80cb]">
                      <span className="text-black font-semibold">Price :</span>{" "}
                      $ {d.price}
                    </div>
                    <div className="p-3 px-4 rounded-md bg-black text-white">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Fetch;
