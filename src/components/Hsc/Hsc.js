import React, { useEffect, useState } from 'react';
import HscSubject from '../HscSubject/HscSubject';

const Hsc = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('./hsc.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl text-purple-600">Hsc All Subject Course </h1>

            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols mt-8">


                {
                    subjects.map(subject => <HscSubject key={subject.key} subject={subject}></HscSubject>)
                }
            </div>

        </div >

    );
};

export default Hsc;