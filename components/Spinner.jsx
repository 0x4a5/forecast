import React from 'react'
import spinner from '../public/spinner.gif'

const Spinner = () => {
  return (
    <div>
         <Image
            className='m-auto block'
            src="/spinner.gif"
             width={200}
             height={200}
             alt="Loading..."
            />
    </div>
  )
}

export default Spinner