import Page from "./components/Page";
import Data from "./components/Data";
import React, {useEffect, useState} from 'react'

export default function App() {
  return (
    <div className="container m-auto">
      <h1 className="text-3xl font-bold text-center underline">Cars Details</h1>
      <div className="container">
          <Data />
      </div>
      <div>
         <Page /> 
      </div>
      
      
    </div>
  );
}
