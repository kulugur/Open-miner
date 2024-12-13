import "./profile.css"
import Link from "next/link"
import Heder from "../component/heder/heder"
import Futer from "../component/futer/futer"
import ProfileNav from "../component/profile_nav/profile_nav"
import MinerContent from "../component/miner/miner"




export default function Profile(){
  

    return(
        <><Heder/>
          <ProfileNav/>
          
          <Futer/>
        </>
    )
}