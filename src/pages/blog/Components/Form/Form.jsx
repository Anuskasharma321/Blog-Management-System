import React from 'react'

const Form = ({ type }) => {
  return (
<div class="flex items-center justify-center p-12">
    
 
  <div class="mx-auto w-full max-w-px-6 lg:w-8/12 xl:w-5/12bg-gray-500">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          required
          class="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email 
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          required
          class="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="subject"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          required
          class="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="attachment"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Add Blog
        </label>
        <input
          type="file"
          name="attachment"
          id="attachment"
          accept=".pdf,.doc,.docx,image/*"
          required
          class="block w-full cursor-pointer rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] file:mr-4 file:rounded file:border-0 file:bg-[#6A64F1] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-[#5851d8] focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Description
        </label>
        <textarea
          rows="4"
          name="description"
          id="description"
          placeholder="Type your description"
          required
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Form
