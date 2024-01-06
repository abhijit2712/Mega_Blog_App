import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-2 '>
            <div className='w-full justify-center mb-8 h-25 '>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl h-20 ' />

            </div>
            <h2 
            className='text-black mt-6'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard