"use client"
import React from 'react'
import Navbar from './Navbar';
import Feed from './feed';
import { useRouter } from 'next/router'
import View from '../pages/view';
import { usePathname } from 'next/navigation';


function Home({children,href}) {
    const router=useRouter();
    let currPath=router.asPath;
    
    console.log(currPath);
    let curr=usePathname()
    console.log(curr);
   
   
    
  return (
    
    <div>
    <Navbar/>
    {
        currPath==='/view' ? <View data={children}/>:<Feed data={children} />
    }
   
    </div>
   
  )
}

export default Home