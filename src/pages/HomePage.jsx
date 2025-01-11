import Footer from "../layouts/Footer";
import Headers from "../layouts/Headers";
import MainLayout from "../layouts/MainLayout";
import SideLayout from "../layouts/SideLayout";
import React, { useEffect, useState } from "react";

function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&category=layer-1&per_page=10&page=1&sparkline=false&price_change_percentage=24h&precision=2';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-xNtyHFnqTM68rYZ2P841Aud3'
      }
    };
    
    fetch(url, options)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='bg-gray-200'>
      <Headers />
      <div className='text-black md:mx-10 mx-1 p-4'>Cryptocurrency &gt;&gt; Bitcoin</div>
      <div className='md:flex'>
        <MainLayout data={data} />
        <SideLayout data={data}/>
      </div>
      <Footer data={data}/>
    </div>
  );
}

export default HomePage;