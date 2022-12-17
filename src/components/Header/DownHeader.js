import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./DownHeader.css";
import menuIcon from "../../images/menu.svg"
const DownHeader = () => {
    return (
        <header className="header_bottom py-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="menu_bottom d-flex align-item-center gap-30">
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-20" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={menuIcon} alt="" />
                                      <span className='me-5 d-inline-block'> Shop Categories</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link to="/" className="dropdown-item">Action</Link></li>
                                        <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                        <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                    </ul >
                                </div>
                            </div>
                            <div className="menu_links">
                                <div className=" d-flex align-item-center">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                    <NavLink to="/ourStore" className="nav-link">Our Store </NavLink>
                                    <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
                                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DownHeader;