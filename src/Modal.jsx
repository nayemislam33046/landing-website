import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
const Modal = ({isVisible,onClose,children}) => {
if (!isVisible) return null

  const handleClose = (e)=>{
    if (e.target.id==="wrapper") onClose()
  }
  
  return (
    <div className='z-10 px-5 sm:px-0 fixed inset-0 bg-[#00000075] flex items-center justify-center' id='wrapper' onClick={handleClose}>
        <div className='w-[450px] flex flex-col bg-white rounded-lg p-5' >
         
         <div className='flex items-center justify-between py-5'>
        <div>
        <p className='text-xl font-bold'>Choose your Delivery Location</p>
        <p className='text-sm text-gray-500'>Enter your address and we will specify the offer you area.</p>
        </div>
        <button className='text-2xl text-gray-500' onClick={()=>onClose()}><AiOutlineClose/></button>
         </div>
        
        <div className=''>
        {children} 
        </div>
        </div>
        
     </div>
  )
}

export default Modal