import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import {doc,getDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase';
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: ""
  });
  useEffect(() => {
    async function getData() {
      const _doc=doc(db,"movies",id);
      const _data=await getDoc(_doc)
      setData(_data.data());
    }
    getData();
  },[] ) 

  return (
    <div className="p-4 mt-4  flex flex-col md:flex-row items-center md:items-start w-full justify-center">
      <img className="h-96 block md:sticky top-24" src={data.image} />
      
      <div className="md:ml-4 ml-0 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-gray-500">
          {data.title} <span className="text-xl">{data.year}</span>
          <ReactStars size={20} half={true} value={5} edit={false} />
        </h1>

        <p className="mt-2">{data.description}</p>
      </div>
     
    </div>
  );
};

export default Detail;
