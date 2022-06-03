import React from 'react'

export default function MenuContainer() {
  return (
    <div className='form'>
    <div className='info'>
    <h1>Do more, with fewer tools</h1>
    <h2>
    Save time and customers now. Let's talk about what SuperAcc can do for your practice!
    </h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!
    </p>
    </div>
    <div className='email'>
         <form className='grid'>
             <div className='grid2'>
             <label>Name :</label>
                <input className='inputform' type='text' placeholder='Name'/> 
                </div>
                <div className='grid2'>
                <label>Email :</label>
                <input className='inputform' type='text' placeholder='Email'/>
                </div>
                <div className='grid2'>
                <label>description :</label>
                <textarea className='inputform' type='text' placeholder='Description ...'/>
                </div>
                <div className='grid2'>
                <label>number :</label>
                <input className='inputform' type='text' placeholder='+212'/>
                </div>
                <button type='submit'>Contact Us</button>
              </form>
              </div>
    </div>
  )
}
