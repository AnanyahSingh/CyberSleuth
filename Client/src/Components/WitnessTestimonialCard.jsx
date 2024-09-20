import React from 'react'
import { Bar } from '../assets/images'

export function WitnessTestimonialCard(props) {
    

    return (
        <div className="flex flex-col bg-[#EBECF0] px-4 py-3 max-w-[300px]">
        <div className="flex flex-row justify-between my-2">
          <div>
          <h3 className="text-xl">Witnessing Testimony</h3>
          </div>
          <div><i className="fas fa-edit edit-icon"></i></div>
        </div>
        

        <div className="flex flex-col">
            <div className="bg-white  rounded-lg">
            <div className="mt-3 ml-3">
                <p className='font-bold'>Bar owner's testimonial</p>
            </div>
        <div className='p-3'>
        <p className="text-[14px] text-[#172B4D] font-regular">
          "I saw a man arguing with the victim near the park around midnight. They were both
          shouting, and suddenly the man pushed the victim."
        </p>
        </div>
        <div className='text-[#172B4D] ml-3'>
        <i className="fas fa-calendar-alt"></i> <span className="text-[12px] font-semibold">Recorded on: 10th Aug 2024 </span>
        </div>
            </div>
        </div>

        <div className='bg-[#93E396] rounded-lg mt-3'>
        “He was regular to the bar every weekend. Never seen him with the suspect until the day of the murder”  - bar owner
        </div>

        <div className='flex flex-col mt-4 bg-white rounded-lg px-[1px] '>
            <div className='w-full flex items-center justify-center mt-2'>
            <div className='w-[90%] w-[95%]'>
            <img src={Bar} className='w-full h-full'/>
            </div>
            </div>
            <div className='font-semibold text-[18px]'>
                Photo of Neeman's Bar
            </div>

            <div>
                Link here
            </div>
            <div className='text-[#172B4D] ml-3'>
        <i className="fas fa-calendar-alt"></i> <span className="text-[12px] font-semibold">Recorded on: 10th Aug 2024 </span>
        </div>
        </div>

      </div>
    )
}
