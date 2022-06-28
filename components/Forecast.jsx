import React from 'react'
import Image from 'next/image';

const Forecast = ({data}) => {
    
  return (
    <div className='relative flex flex-col justify-between m-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
    {/* Top Bloc */}
        <div className='relative flex justify-between pt-12'>
            <div className='flex flex-col items-center'>
                <Image
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    width='100'
                    height='100'
                    alt="Forecast image"
                />
                <p className='text-2xl'>{data.weather[0].main}</p>
            </div>
            <p className='text-8xl'>{data.main.temp.toFixed(0)}&#176;</p>
        </div>
        {/* Bottom Bloc */}

        <div className='bg-[#0A0A0A]/60 rounded-lg relative p-8'>
            <p className='text-2xl text-center pb-6'>{data.name} daily forecast:</p>
            <div className='flex justify-between text-center'>
                <div>
                    <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                    <p className='text-xl'>Feels Like</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                    <p className='text-xl'>Humidity</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
                    <p className='text-xl'>Wind</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Forecast