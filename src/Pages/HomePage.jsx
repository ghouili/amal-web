import React from 'react'

import AddPost from '../Components/AddPost';
import Post from '../Components/Post';

import Ajout_Post from '../Components/Ajout_Post';
import FiltreBar from '../Components/FiltreBar';
import { height } from '@mui/system';


const HomePage = () => {
  return (
    <div className='w-full px-10 pt-5 flex flex-row '>
      <div className="w-2/3 h-2/3 ">
        <Ajout_Post />
      </div>

      <div className="w-1/3 pl-10" style={{ maxHeight: '89vh', height: '80vh'}}>
        <FiltreBar />
      </div>
        {/* <AddPost />
        <Post /> */}
    </div>
  )
}

export default HomePage