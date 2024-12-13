"use client"
import MinerContent from "../miner/miner"
import "./profile_nav.css"
import { useState } from 'react';

export default function ProfileNav(){
    const [btn, setBtn] = useState(null);
    function BtnClik(e){
        setBtn(e.target.value)}
    
        
    return(<><div className="profile_nav">
     
       <p>0.0 usdt</p>
       <button  className='lf--navButton' onClick={BtnClik} value = "My_miners" type="submit">My miners</button>
       <button  className='lf--navButton' onClick={BtnClik} value = "Miner" type="submit">Miner</button>
       <button  className='lf--navButton' onClick={BtnClik} value = "Wallet" type="submit">Wallet</button>
       <button  className='lf--navButton' onClick={BtnClik} value = "Settings" type="submit">Settings</button>
       <button  className='lf--navButton' onClick={BtnClik} value = "log out" type="submit">log out</button>
       <p>My miners 0</p>
  
        </div>
        {btn == "Miner"&&(<MinerContent/>)} 
        
        </> 
    )
}