import React from 'react';
import { NavLink } from 'react-router-dom';

const Headers = () => {
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-gray-500 mb-1">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <NavLink to="/"><p className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                        E-Learning
                    </p></NavLink>
                </div>
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/home" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75">
                                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Home</span>

                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/our-services" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75">
                                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Our Services</span>

                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/about" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75">
                                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2">About Us</span>

                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }} className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75">
                                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Contact Us</span>

                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Headers;