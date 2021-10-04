import React from 'react';

const Footer = () => {
    return (
        <>
            <div className=" bg-gray-500 mt-64">
               
         <div className="mx-auto container   flex flex-col items-center justify-center">
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">Learn   Build   Career</h1>
                        
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Features</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Pricing</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Careers</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2021 E-learning. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;