import React from 'react';
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import cardSvg from "../../images/cart.svg";
import compare from "../../images/compare.svg";
import userSvg from "../../images/user.svg";
import wishlist from "../../images/wishlist.svg";
import "./UpperHeader.css";
const UpperHeader = () => {
    return (
        <header className="header-upper py-3">
            <div className="container">
                <div className="row  align-items-center">
                    <div className="col-2">
                        <h2>
                            <Link className='text-white'>Coiner..</Link>
                        </h2>
                    </div>
                    <div className="col-5">
                        <div className="input-group ">
                            <input type="text" className="form-control " placeholder="Search Your Product.." aria-label="Search Your Product.." aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2"><BsSearch /></span>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="upper_header_link d-flex align-items-center justify-content-between">
                            <div  >
                                <Link className='d-flex align-items-center text-white ig_icon'>
                                    <img src={compare} alt="" />
                                    <p className='mb-0'>Compare <br /> Product</p>
                                </Link>
                            </div>
                            <div>
                                <Link className='d-flex align-items-center text-white ig_icon'>
                                    <img src={wishlist} alt="" />
                                    <p className='mb-0'>Favourite<br />Wishlist</p>
                                </Link>
                            </div>
                            <div>
                                <Link className='d-flex align-items-center text-white ig_icon'>
                                <img src={userSvg} alt="" />
                                    <p className='mb-0'>Login <br /> My Account</p>
                                </Link>
                            </div>
                            <div>
                                <Link className='d-flex align-items-center text-white ig_icon'>
                                    <img src={cardSvg} alt="" />
                                    <div className='d-flex flex-column gap-10'>
                                        <span className='badge bg-white text-dark'>0</span>
                                        <p className='mb-0'>$500</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default UpperHeader;