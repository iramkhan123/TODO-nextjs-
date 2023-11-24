 
'use client';

import { Router, useRouter } from 'next/router';
import Link from 'next/link';


function Navbar() {
   
  
  
  return (
    
    
    //<div style={{width:"100%",height:"6rem",backgroundColor:"yellow"}}>
    <div>
    <div style={{display:"flex", height:"5rem",width:"100%",backgroundColor:"#B2C8BA",border:"solid",borderColor:"#4F6F52",borderBlockWidth:"thin"}}>
    <div style={{color:"#4F6F52" ,paddingLeft:"2rem",paddingTop:"1rem",paddingRight:"2rem",fontFamily:"Papyrus",fontSize:"2rem" , fontWeight: 'bold' }}>
    <Link href="/" passHref>
    Home
    </Link>
    </div>
    <div style={{color:"#4F6F52", paddingLeft:"2rem",paddingTop:"1rem",paddingRight:"2rem",fontFamily:"Papyrus",fontSize:"2rem" , fontWeight: 'bold' }}>
   
    <Link href="/view" passHref>
      View
    </Link>

    </div>
    </div>
    </div>
    
     
  );
}



export default Navbar;