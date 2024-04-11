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

  const handleSubmit = () => {

  }

  // to handle the errors.
  const handleChange = (e) => {

  }

  // to handle the surprise me button.
  const handleSurpriseMe = () => {

  }
  
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
{/* form component to handle the data of the users!*/}
<form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
  <div className='flex flex-col gap-5'>
    <FormField
    lableName = "User Name"
    type = "text"
    name = "name"
    value = {form.name}
    placeholder = "Kristina Barooah"
    handleChange = {handleChange}
    />

<FormField
    lableName = "Your Prompt"
    type = "text"
    name = "prompt"
    value = {form.prompt}
    placeholder = "Girl dancing in the rain."
    handleChange = {handleChange}
    isSurpriseMe
    handleSurpriseMe = {handleSurpriseMe}
    />

  </div>
</form>

    </section>
  )
}

export default CreatePost