import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header className="header top strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p>Free Shopping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end'>Hotline: <a href="tel:+8801538088262"> +88 01538088262</a></p>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;