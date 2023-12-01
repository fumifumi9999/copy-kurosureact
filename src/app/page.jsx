"use client"
import { useState } from 'react';
import Search from './Search';
import DisplayImages from './DisplayImages';

export default function Home() {
  const [fetchData, setFetchData] = useState([]);

  const handleSearch = async (keyword) => {
    const endpointURL = `https://pixabay.com/api/?key=40951011-80d0638d707057db738a74242&q=${keyword}&image_type=photo`;

    const res = await fetch(endpointURL);
    const data = await res.json();
    const fetchData_raw = data.hits;

    setFetchData(fetchData_raw);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 w-1/2 mx-auto">My pix</h2>
      <Search onSearch={handleSearch} />
      <DisplayImages images={fetchData} />
    </div>
  );
}