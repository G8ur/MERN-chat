import React from 'react'

import Avatar from '../../assets/avatar.svg'

const Dashboard = () => {
    const contacts = [
        {
            name: 'John',
            status: 'Available',
            img: Avatar


        },
        {
            name: 'Mary',
            status: 'Available',
            img: Avatar


        },
        {
            name: 'Alexander',
            status: 'Available',
            img: Avatar


        },
        {
            name: 'Adam',
            status: 'Available',
            img: Avatar


        },
        {
            name: 'Johny',
            status: 'Available',
            img: Avatar


        },
        {
            name: 'Lana',
            status: 'Available',
            img: Avatar


        }

    ]
  return (
    <div className="w-screen flex">
      <div className='w-[25%]   h-screen bg-secondary'>
      <div className='flex items-center my-8 mx-14'>
        <div className='border border-primary p-2 rounded-full'><img src={Avatar} width={75} height={75}/></div>
        <div className='ml-8'>
            <h3 className='text-2xl'>Tutorials </h3>
            <p className='text-lg font-light'>My account</p>
        </div>
      </div>
      <hr/>
      <div className='mx-14 mt-10'>
        <div className='text-primary text-lg'>Messag</div>
        <div>
            {
                contacts.map(({name, status , img}) =>{
                    return(
                        <div className='flex  items-center py-8 border-b border-b-gray-300'>
                       <div className='cursor-pointer flex items-center'> 
                        <div><img src={img} width={60} height={75}/></div>
                        <div className='ml-6'>
                        <h3 className='text-lg font-semibold'>{name} </h3>
                        <p className='text-sm font-light text-gray-600'>{status}</p>
                        </div></div>
                        </div>
                    )
                })
            }
        </div>
      </div>
      </div>
      <div className='w-[50%]   h-screen'></div>
      <div className='w-[25%]   h-screen'></div>
    </div>
  )
}

export default Dashboard