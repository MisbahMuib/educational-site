import React, { useEffect, useState } from 'react';
import Subject from '../Subject/Subject';

const Ssc = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('./ssc.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl text-purple-600">Ssc All Subject Course </h1>

            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols mt-8">

                {
                    subjects.map(subject => <Subject key={subject.key} subject={subject}></Subject>)
                }
            </div>

        </div >

    );
};

export default Ssc;