'use client'

import "./heder.css"
import Link from "next/link"
import { useState, useEffect } from 'react';

export default function Heder(){
    const [user, setUser] = useState(null);
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    async function fetchUser() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user_my`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.status == 200) {
        const json = await res.json();
        setUser(json);
      } else {
        
      }
    }
    fetchUser();
  }, []);
return( <div className="nav_bar">
    <span className="logo">
        <h1>o</h1>
        <h1>m</h1>
    </span>
    
    <span className="pos_horizont">
        <h1>Open miner</h1>
    </span>
    <span className="pos_horizont">
        {user && (<Link  href="/profile">{user.email}</Link>  )}
        {!user && (<Link  href="/registration">registration</Link>  )}
        {!user && (<Link  href="/login">login</Link>    )}


        
 
    </span>  
    </div>
        
    );
}