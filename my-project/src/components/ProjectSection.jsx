import React, { useState } from 'react';

const ProjectSection = () => {
    // Sample data for projects
    const projects = [
        {
            title: "Projet 1",
            description: "Une brève description du projet 1 et de son impact.",
            image: "[Image projet 1]",
        },
        {
            title: "Projet 2",
            description: "Une brève description du projet 2 et de son impact.",
            image: "[Image projet 2]",
        },
        {
            title: "Projet 3",
            description: "Une brève description du projet 3 et de son impact.",
            image: "[Image projet 3]",
        },
    ];

    // State to track the current project index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle next project
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to handle previous project
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Nos Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Project Description Section */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{projects[currentIndex].title}</h3>
                    <p className="text-gray-600">{projects[currentIndex].description}</p>
                    <button className="bg-black text-white px-4 py-2 rounded-md">Voir projet</button>
                </div>
                
                {/* Project Image Section */}
                <div className="relative">
                    <div className="bg-gray-200 h-64 w-full rounded-md flex items-center justify-center">
                        <span className="text-gray-500">{projects[currentIndex].image}</span>
                    </div>
                    
                    {/* Navigation Arrows */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                        <button onClick={handlePrev} className="bg-gray-300 rounded-full p-2 hover:bg-gray-400">
                            &larr;
                        </button>
                        <button onClick={handleNext} className="bg-gray-300 rounded-full p-2 hover:bg-gray-400">
                            &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
