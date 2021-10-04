import React, { useEffect, useState } from 'react';
import BcsSubject from '../BcsSubject/BcsSubject';

const Bcs = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('./bcs.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl text-purple-600">BCS Full Course </h1>

            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols mt-8">

                {
                    subjects.map(subject => <BcsSubject key={subject.key} subject={subject}></BcsSubject>)
                }
            </div>

        </div >

    );
};

export default Bcs;