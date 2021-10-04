import React, { useEffect, useState } from 'react';
import EnglishSpoken from '../EnglishSpoken/EnglishSpoken';

const English = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('./englishCourse.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl text-purple-600">English All Sector Course </h1>

            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols mt-8">

                {
                    subjects.map(subject => <EnglishSpoken key={subject.key} subject={subject}></EnglishSpoken>)
                }
            </div>

        </div >

    );
};

export default English;