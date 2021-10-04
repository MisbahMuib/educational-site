import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="bg-gray-100">

                <section className="container animation gap-8 mx-auto md:flex items-center justify-around py-12 px-4">
                    
                    <div className="space-y-4">
                        <h1 className="text-7xl font-bold uppercase">
                            <span className="text-yellow-400">Welcome</span>
                            <br></br>
                            <span className="text-gray-800">E-Learning</span>
                        </h1>

                        <div className=" card-regular max-w-md  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div className="md:flex ">
                                <div className="md:flex-shrink-0">
                                    <img className="h-38  w-full object-cover md:w-48" src="https://dcassetcdn.com/design_img/746982/151768/151768_4523181_746982_image.jpg" alt="Man looking at item at a store"></img>
                                </div>
                                <div className="p-8 ">
                                    <div className="uppercase tracking-wide text-lg text-indigo-500 font-bold">SSC Study</div>
                                    
                                    <NavLink to="/ssc">
                                        <button
                                            className="text-white uppercase px-7 py-4 rounded-xl font-medium bg-green-500 to-red-500 hover:bg-red-400 m-6">

                                            Enroll Now</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className=" card-regular max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img className="h-38 w-full object-cover md:w-48" src="https://cdn.dribbble.com/users/181929/screenshots/1944376/hsc_logo_paper_3.jpg" alt="Man looking at item at a store"></img>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-lg text-indigo-500 font-bold">HSC Study</div>
                                    
                                    <NavLink to="/hsc">
                                        <button
                                            className="text-white uppercase px-7 py-4 rounded-xl font-medium bg-green-500 to-red-500 hover:bg-red-400 m-6">

                                            Enroll Now</button>
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                        <div className="card-regular max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img className="h-38 w-full object-cover md:w-48" src="https://cdn2.f-cdn.com/contestentries/1473262/25409042/5c66e02ec6fcd_thumb900.jpg" alt="Man looking at item at a store"></img>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-lg text-indigo-500 font-bold">BCS Study</div>
                                    
                                    <NavLink to="/bcs">
                                        <button
                                            className="text-white uppercase px-7 py-4 rounded-xl font-medium bg-green-500 to-red-500 hover:bg-red-400 m-6">

                                            Enroll Now</button>
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                        <div className=" card-regular max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img className="h-38 w-full object-cover md:w-48" src="https://whataftercollege.com/wp-content/uploads/2019/08/eng.png" />
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-lg text-indigo-500 font-bold">English Spoken Course</div>
                                    
                                    <NavLink to="/english-spoken-courses">
                                        <button
                                            className="text-white uppercase px-7 py-4 rounded-xl font-medium bg-green-500 to-red-500 hover:bg-red-400 m-6">

                                            Enroll Now</button>
                                    </NavLink>

                                </div>
                            </div>
                        </div>

                    </div>

                </section >

            </div >

        </div>
    );
};

export default Home;