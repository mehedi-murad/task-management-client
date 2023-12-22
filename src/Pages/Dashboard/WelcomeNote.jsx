import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const WelcomeNote = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex justify-center items-center p-20'>
            <h2 className='text-5xl font-bold text-white text-center'>Welcome <span className='text-yellow-500'>{user?.displayName}</span> <br />To the Task Management Dashboard</h2>
        </div>
    );
};

export default WelcomeNote;