import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { Loader, FormField } from '../components'

const CreatePost = () => {
  // hooks to return/naviagte back to my home page.
  const naviagte = useNavigate();
  // state to hold the form data.
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });
  const [generateImg, setGenerateImg] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    // <div><b>Create Post</b></div>
    <section>
      <div> 
        {/* I added the header content */}
      <h1 className='font-extrabold text-[#020617] text-[34px]'>The Gallery Images</h1>
      <p className='mt-2 text-[#475569] text-[16px] max-w [500px]'>
        <i>Create visually stunning images using DALL-E AI API.</i>
        Generate your own images and add to the gallery by clicking the button below.
      </p>
      </div>
    </section>
  )
}

export default CreatePost