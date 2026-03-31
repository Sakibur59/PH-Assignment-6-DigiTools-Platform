import React from 'react';

const ActiveUsers = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] md: mt-10'>
            <div className='max-w-300 mx-auto flex flex-col md:flex-col lg:flex-row justify-around items-center  p-15 '>
                <div>
                    <h1 className='text-5xl font-extrabold text-white'>50K+</h1>
                    <p className='text-white  text-xl font-medium'>Active Users</p>
                </div>
                <div>
                    <h1 className='text-5xl font-extrabold text-white'>200+</h1>
                    <p className='text-white  text-xl font-medium'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='text-5xl font-extrabold text-white  '>4.9</h1>
                    <p className='text-white text-xl font-medium'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default ActiveUsers;