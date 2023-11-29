import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from 'firebase/firestore';
import { moviesRef } from '../firebase/firebase';
import Swal from 'sweetalert'; // Use Swal instead of swal for SweetAlert2


const Addmovie = () => {
 const [form ,setform]=useState({

    Title:"",
    Year:"",
    Description:"",
    Image:""
 });

 
 const [loading, setLoading] = useState(false);

 const handleAddMovie = async () => { // Renamed the function
   setLoading(true);
   try {
     await addDoc(moviesRef, form);
     Swal({ // Used Swal.fire instead of swal
       title: 'Successfully Added',
       icon: 'success',
       showConfirmButton: false,
       timer: 3000,
     });
   } catch (err) {
     Swal({
       title: err,
       icon: 'error',
       showConfirmButton: false,
       timer: 3000,
     });
   }
   setLoading(false);
 };

  return (
    <div>
  <section class="text-gray-600  body-font relative">
  <div class="container px-5 py-8 mx-auto">
    <div class="flex flex-col text-center w-full mb-4">
      <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-blue-700 ">Add Movie</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-400">Title</label>
            <input value={form.Title} onChange={(e)=>setform({...form,Title:e.target.value})} type="text" id="name" name="name" class="w-full  bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-400">Year</label>
            <input value={form.Year} onChange={(e)=>setform({...form,Year:e.target.value})} type="email" id="email" name="email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-400">
              Image Link
            </label>
            <input value={form.Image} onChange={(e)=> setform({...form,Image:e.target.value})} id="message" name="message" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>

          
        </div>


        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-400">Description</label>
            <textarea value={form.Description} onChange={(e)=> setform({...form,Description:e.target.value})} id="message" name="message" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>

          
        </div>
        <div class="p-2 w-full">
          <button onClick={handleAddMovie} class="flex mx-auto text-white bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-300 rounded text-lg">{loading?<TailSpin height={25} color='white'/>:"Submit"}</button>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Addmovie
