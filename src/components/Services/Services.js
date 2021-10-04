import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (
        <section className=" px-8 mx-auto my-12">
            <h2 className="text-3xl uppercase text-gray-800 font-bold mb-4">Our Service's</h2>

            <div className="grid lg:grid-cols-4   gap-7">

                <div className="shadow-lg card-regular  rounded-2xl p-4 space-y-4">
                    <div className="bg-gray-200 rounded-2xl py-6">
                        <img className="h-64  mx-auto" src="https://10minuteschool.com/assets/landing-page/ssc.jpg" alt=""></img>
                    </div>
                    <h4 className="text-3xl font-bold">S.S.C 2021</h4>
                    <p>Who searching for SSC Short Syllabus 2021 thous post for you. As for the SSC exam, students would have started their preparation for the exam. However, without proper guidance, it will be difficult for the candidates to write the exam and get top scores. Here comes the use of the SSC Short Syllabus 2021.</p>

                    <NavLink to="/ssc">
                        <button
                            className="text-white uppercase px-7 py-4 rounded-xl font-medium bg-green-500 to-red-500 hover:bg-red-400 m-6">

                            Enroll Now</button>
                    </NavLink>

                </div>

                <div className="shadow-lg card-regular rounded-2xl p-4 space-y-4">
                    <div className="bg-gray-200 rounded-2xl py-6">
                        <img className="h-64 mx-auto" src="https://i.ytimg.com/vi/VwYUI97uqaA/maxresdefault.jpg" alt=""></img>
                    </div>
                    <h4 className="text-3xl font-bold">H.S.C 2021</h4>
                    <p>Who searching for HSC Short Syllabus 2021 thous post for you. As for the HSC exam, students would have started their preparation for the exam. However, without proper guidance, it will be difficult for the candidates to write the exam and get top scores. Here comes the use of the HSC Short Syllabus 2021.</p>

                    <NavLink to="/hsc">
                        <button
                            className="text-white uppercase px-7 py-4 rounded-xl font-medium bg-green-500 to-red-500 hover:bg-red-400 m-6">

                            Enroll Now</button>
                    </NavLink>

                </div>

                <div className="shadow-lg card-regular rounded-2xl p-4 space-y-4">
                    <div className="bg-gray-200 rounded-2xl py-6">
                        <img className="h-64 mx-auto" src="https://d1yreyj8btzg0t.cloudfront.net/images/skills/thumb/BCS-Preli---Title-Thumbnail.jpg" alt=""></img>
                    </div>
                    <h4 className="text-3xl font-bold">BSC Preparation</h4>
                    <p>Who searching for SSC Short Syllabus 2021 thous post for you. As for the SSC exam, students would have started their preparation for the exam. However, without proper guidance, it will be difficult for the candidates to write the exam and get top scores. Here comes the use of the SSC Short Syllabus 2021.</p>

                    <NavLink to="/bcs">
                        <button
                            className="text-white uppercase px-7 py-4 rounded-xl font-medium bg-green-500 to-red-500 hover:bg-red-400 m-6">

                            Enroll Now</button>
                    </NavLink>

                </div>
                <div className="shadow-lg card-regular rounded-2xl p-4 space-y-4">
                    <div className="bg-gray-200 rounded-2xl py-6">
                        <img className="h-64 mx-auto" src="https://asmed.com/wp-content/uploads/2014/12/502642663.jpg" alt=""></img>
                    </div>
                    <h4 className="text-3xl font-bold ">English Spoken Course's</h4>
                    <p >Who searching for SSC Short Syllabus 2021 thous post for you. As for the SSC exam, students would have started their preparation for the exam. However, without proper guidance, it will be difficult for the candidates to write the exam and get top scores. Here comes the use of the SSC Short Syllabus 2021.</p>

                    <NavLink to="/english-spoken-courses">
                        <button
                            className="text-white uppercase px-7 py-4 rounded-xl font-medium bg-green-500 to-red-500 hover:bg-red-400 m-6">

                            Enroll Now</button>
                    </NavLink>

                </div>

            </div>
        </section>

    );
};

export default Services;