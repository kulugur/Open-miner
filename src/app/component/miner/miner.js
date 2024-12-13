"use client"
import "./miner.css"
import { useState, useEffect } from 'react';

export default function MinerContent(){
    const [miner, setMiner] = useState(null);
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    async function fetchMiner() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/miner`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.status == 200) {
        const json = await res.json();
        setMiner(json);
      } else {
        
      }
    }
    fetchMiner();
  }, []);
    


    return(
    <div className="flex">
        <div className="profile_content">
            {miner &&(miner.map(res =>(
                <div key={res.key + "div"} className="miner">
                <h4 key={res.model}>{res.model}</h4> 
                <img  key={res.img} src={res.img} height="120px"/>
                <p>In stock  {res.in_stock} pcs.</p>
                <p>Quantity  {res.Quantity} pcs.</p>
                <p>Hashrate {res.Hashrate}</p>
                <p>Consumption {res.Consumption}</p>
               </div > )))}
               
               
       
  
        </div>
    </div>    
    )
}