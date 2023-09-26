"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Fetch from "./com/Fetch";
import Pagination from "./com/Pagination";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(12)
  const lastindex = currentPage * postPerPage
  const firstIndex = lastindex - postPerPage

  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res1 = await axios.get("https://fakestoreapi.com/products");
      const resData1 = await res1.data;
      const res2 = await axios.get("https://fakestoreapi.com/products");
      const resData2 = await res2.data;
      const res3 = await axios.get("https://fakestoreapi.com/products");
      const resData3 = await res2.data;
      const res4 = await axios.get("https://fakestoreapi.com/products");
      const resData4 = await res2.data;
      const res5 = await axios.get("https://fakestoreapi.com/products");
      const resData5 = await res2.data;
      const res6 = await axios.get("https://fakestoreapi.com/products");
      const resData6 = await res2.data;
      const mergedData = [...resData1, ...resData2, ...resData3, ...resData4, ...resData5, ...resData6];
      setData(mergedData);
      setLoad(false);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data.length)

  const postperData = data.slice(firstIndex, lastindex)
  useEffect(() => {
    setLoad(true)
    getData();
  }, []);


  return (
    <>
      <div className="overflow-y-scroll h-screen no-scrollbar">
        {!load && <div className="flex justify-center items-center ">
          <Pagination postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} length={data.length} />
        </div>
        }

        <Fetch load={load} setLoad={setLoad} postPerPage={postPerPage} setCurrentPage={setCurrentPage} data={postperData} setData={setData} />
      </div>
    </>
  )
}
