import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegCommentAlt } from 'react-icons/fa';


const Ajout_Post = () => {
  return (
    <div className="w-full">
        <div className='w-full p-3 flex flex-rox bg-white shadow justify-between rounded'>

            <div className="flex flex-row w-1/3 items-center">
                <input 
                    placeholder='Search..'
                    className='w-full appearance-none block px-2 py-1 bg-gray-200 text-gray-700 border rounded focus:outline-none focus:bg-white focus:border-gray-500'
                />

                <BiSearchAlt2 className='text-slate-500 cursor-pointer ' style={{marginLeft: '-20px'}} />
            </div>

            <div className="flex flex-row w-2/3 items-center justify-end">
                <p className='text-slate-600 font-medium'>Order By:</p>
                <select className='w-1/4 text-slate-600 border-0 focus:border-0 active:border-0 ml-3 font-medium '>
                    <option> default</option>
                    <option> option 01</option>
                </select>
                
            </div>
        </div>
        
        <div className='w-full p-5 mt-5 flex flex-col bg-white shadow justify-between rounded '>
           <div className="w-full flex flex-row items-center mb-2">

                <img className='rounded-full w-14 h-auto ' src='https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/19/60af144800120-bpfull.jpg' alt='profile_img' />

                <div className="flex flex-col w-full ml-2 ">
                    <div className="flex flex-row w-full items-center">
                        <p className='font-medium text-base mr-2'>Mohammed Ali manai</p>
                        <BsFillCheckCircleFill className='text-blue-300' />
                    </div>
                    <p className='text-xs text-neutral-400 '>10:25 AM</p>

                </div>
           </div>

            <div className="w-full">
                <p className='line-clamp-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="border border-b-0 mt-4" />

                <div className="flex flex-row ">
                    <div className="w-1/2 flex flex-row justify-center items-center py-2 rounded hover:bg-gray-300 cursor-pointer">
                        <FaRegThumbsUp className='mr-1' size={18} />
                        <p>Like </p>
                    </div>
                    <div className="w-1/2 flex flex-row justify-center py-2 items-center rounded hover:bg-gray-300 cursor-pointer">
                        <FaRegCommentAlt className='mr-1' size={18} />
                        <p>Comment </p>
                    </div>
                </div>
                <div className="border border-b-0" />
            </div>
        </div>
    </div>
    
  )
}

export default Ajout_Post