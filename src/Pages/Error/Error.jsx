import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.jpg'

const Error = () => {
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <div>
            <img src={errorImg} alt="" />
            <Link to="/">
                <h2 className='text-center font-bold text-blue-700 underline'>Back to Home</h2>
            </Link>
            </div>
        </div>
    );
};

export default Error;