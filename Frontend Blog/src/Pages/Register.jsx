import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  // console.log(watch("profileImage"))

  const [preview, setPreview] = useState(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append('firstName', data.firstName)
      formData.append('lastName', data.lastName)
      formData.append('email', data.email)
      formData.append('password', data.password)
      formData.append('profileImage', data.profileImage[0])

      // for (
      //   const [key, value] of formData.entries()
      // ) {
      //   console.log(`${key}: ${value}`);
      // }

      // using address from backend. using axios to send the requests easily
      const response = await axios.post("http://localhost:3000/auth/register", formData, {
        headers:{
          'Content-Type':'multipart/form-data'
        }
      });
      console.log(response.data);
      console.log("Done")


      reset();
      setPreview(null);

      
    } catch (error) {
      console.error("Error", error);

    }
  }

  function handlePreview(e){ // e for event!
      const file = e.target.files[0];
      if(file){
        setPreview(URL.createObjectURL(file))
        console.log(preview)
      }
      
  }

  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      Register
    </h2>
    <form
      onSubmit={handleSubmit(onSubmit)}
      action="#"
      method="POST"
      className="space-y-6"
      encType="multipart/form-data"
    >
      {/* First Name Field */}
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName" //file handling
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="John"
          required=""
          {...register('firstName')} //hook form handling
        />
      </div>
      {/* Last Name Field */}
      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Doe"
          required=""
          {...register('lastName')}
        />
      </div>
      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="you@example.com"
          required=""
          {...register('email')}
        />
      </div>
      {/* Password Field */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your password"
          required=""
          {...register('password')}
        />
      </div>

      {/* Match Confirm Password */}


      {/* Profile Picture Field */}
      <div>
        <label
          htmlFor="profilePicture"
          className="block text-sm font-medium text-gray-700"
        >
          Profile Picture
        </label>
        <input
          
          type="file"
          id="profilePicture"
          name="profileImage"
          className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
          accept="image/*"
          required=""
          {...register('profileImage')}
          onChange={handlePreview}

        />
      </div>
      {/* Image Preview */}
      {
        preview && <div className='mt-4'>
        <img src={preview} className='w-32 h-32 rounded-full object-cover mx-auto' />
    </div>
      }
      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Register
        </button>
      </div>
    </form>
    {/* Already Have an Account Link */}
    <div className="mt-4 text-center">
      <a href="#" className="text-sm text-indigo-600 hover:underline">
        Already have an account? Login
      </a>
    </div>
  </div>
</div>

    
    </>
  )
}
