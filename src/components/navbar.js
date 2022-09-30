import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-dark d-flex justify-content-center  w-100'>
            <button className='btn btn-dark'>
                <i className="fa-solid fa-backward"></i>
            </button>
            <button className='btn btn-dark'>
                <i className="fa-solid fa-play"></i>
            </button>
            <button className='btn btn-dark'>
                <i className="fa-solid fa-forward"></i>
            </button>
        </div>
    )
}

export default Navbar;