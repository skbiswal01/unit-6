import React from "react";
import {useEffect, useState} from 'react';
import axios from "axios";
const Data = () => {

    const [car, setCar] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("");
    const [fill, setFill] = useState("");
    const [ttlpages, setTtlPages] = useState();
    
    
    const fetchdata = async (e) => {
      let url = `http://localhost:5000/cars?page=${page}&filter=${fill}`;
      axios.get(url).then((res) => {setCar(res.data.cars); setTtlPages(res.data.totalPages)});
     console.log(url)
     
    }
    useEffect((e) => {
       fetchdata();
       
      
    }, [page, fill]);
    
    const handlePrevClick = () => {
      setPage(page-1);
      
  }

  const handleNextClick = () => {
      setPage(page+1);
  }

  const handleChange = (e) => {
     e.preventDefault();
      setSort(e.target.value);
      console.log(sort);
  }
  return (
      
    <div >
       <div className="container flex justify-center mx-auto">
          <div className="flex flex-row mx-auto border-2">
            <label className="text-center align-middle" htmlFor="">By Company name - </label>
           
            <select name="" id="" onChange={(e)=>{setFill(e.target.value)}}>
              <option value="">All</option>
              <option value="Ford">Ford</option>
              <option value="Pontiac">Pontiac</option>
              <option value="Land Rover">Land Rover</option>
              <option value="Panoz">Panoz</option>
              <option value="Dodge">Dodge</option>
              <option value="Honda">Honda</option>
              <option value="Volkswagen">Volkswagen</option>
            </select>
          </div>
          <div className="flex flex-row mx-auto border-2">
          <label className="text-center align-middle" htmlFor="">By Model name - </label>
          <input className="border border-black" type="text" onChange={handleChange}/>
          </div>
        </div>
                 

                 
             
       <div className="container px-5 py-16 mx-auto">
      <div className="flex flex-wrap -m-4">
      {car.map((e) => { return  <div key={e.car_no} className="xl:w-1/5 md:w-1/2 p-2">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {e.model_name}
                </h2>
                <p className="leading-relaxed text-base">
                  {e.company_name}
                </p>
                <p className="leading-relaxed text-base">
                  {e.year} - Model
                </p>
                <p className="leading-relaxed text-base">
                  {e.price}
                </p>
              </div>
            </div>})}
          </div>
        </div>

        {/*footer*/}
        <div className="container flex justify-center mx-auto">
          
            <div className="flex flex-row mx-auto">
              <button disabled={page <= 1} onClick={handlePrevClick} type="button" className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-blue-700 hover:text-white px-3">
                <div className="flex flex-row align-middle">
                  <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                  </svg>
                  <p className="ml-2">Prev</p>
                </div>
              </button>
              <button disabled={page + 1 > ttlpages} onClick={handleNextClick} type="button" className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-blue-700 hover:text-white px-3">
                <div className="flex flex-row align-middle">
                  <span className="mr-2">Next</span>
                  <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </button>
            </div>
        </div>
       
        
      </div>
    
  );
};

export default Data;
