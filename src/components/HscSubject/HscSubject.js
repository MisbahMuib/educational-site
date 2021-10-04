import React from 'react';
import { NavLink } from 'react-router-dom';

const HscSubject = (props) => {
    const { img, name, tutor, price, group, enroll } = props.subject;
    return (

        <div className="card-regular shadow-lg rounded-2xl p-4 space-y-4 ">
            <div className="bg-gray-200 rounded-2xl py-6">
                <img className="h-96 mx-auto" src={img} alt="" />
            </div>
            <h4 className="text-3xl font-bold text-purple-600">{name}</h4>
            <h5 className="text-xl font-bold">Group : {group}</h5>
            <p>tutor by : <span className="text-blue-800 font-bold"> {tutor}</span></p>

            <p>Already <span className="text-purple-900 font-bold">{enroll}</span> student's Enrolled</p>
            <div className="lg:flex justify-between">
                <h2 className="text-5xl font-black text-yellow-400">${price}</h2>

                <NavLink to="#">
                    <button
                        className="text-white uppercase px-7 py-4 rounded-xl font-medium bg-green-500 to-red-500 hover:bg-red-400">

                        Buy Course</button>
                </NavLink>
            </div>
        </div>


    );
};

export default HscSubject;