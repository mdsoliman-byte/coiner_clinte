import React from 'react';
import "./TopHeader.css";
const TopHeader = () => {
    return (
        <header className="header-top-strip py-2">
            <div className="container ">
                <div className="row">
                    <div className="col-6">
                        <p className='text-white'>Free Shopping Over $100 & Free Returns</p>
                    </div>
                    <div className="col-6 text-end">
                        <p className=' text-white mb-0'>Hotline: <a className='text-white' href="tel:+8801538088262"> +88 01538088262</a></p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;