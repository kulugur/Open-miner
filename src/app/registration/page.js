"use client"
import Heder from "../component/heder/heder"
import "./registration.css"
import Futer from "../component/futer/futer"
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from "next/link"

export default function Registration(){
    const router = useRouter()
	async function registration(event) {
		event.preventDefault()
	 
			const formData = new FormData(event.currentTarget)
			const email = formData.get('email')
			const password = formData.get('password')
			const user = formData.get('user')
			formData.set("is_active" , true)
			formData.set("is_superuser", false)
			formData.set("is_verified", false)
			const config = {
				"email": email,
				"password": password,
				"is_active": true,
				"is_superuser": false,
				"is_verified": false,
				"user_name": user
			  }
			try {  
				
				const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`,config,
				  {
				  headers:  { 'Content-Type': 'application/json' }
				  },
				  )
	
				
				  if (response.status == 201) {
				//   router.push('/auth')
				} else {
				  
				}
			} catch (error) {
				console.log(error)
					
				
			  }	
		  }
	return(
        <><Heder/>
        <form className="login_form" onSubmit={registration} >
			<div className="row_logo">
				<h2 >Registration</h2>
			  </div>
			  < div className="flex-row">
                <p>User Name</p>
				<input id="user" name="user" className='lf--name' placeholder='Enter User Name' type='text'/>
			  </div>
			  <div className="flex-row">
                <p>Email</p>
				<input id="email" name="email" className='lf--email' placeholder='Enter E-mail' type='text'/>
			  </div>
			  <div className="flex-row">
              <p>Password</p>
				<input id="password" name="password" className='lf--password' placeholder='Enter password' type='password'/>
			  </div>
			  <div className="flex-row">
				
				
				<button  className='lf--button' type="submit">Register</button>
			  </div>
		  </form>
          <Futer/>
        </>
    )
}