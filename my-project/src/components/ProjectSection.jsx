import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { RxArrowTopRight } from "react-icons/rx";
<<<<<<< HEAD
import project_1 from '../assets/project-1.jpg'
import project_2 from '../assets/project-2.jpg'
import project_3 from '../assets/project-3.png'
const ProjectSection = () => {
    // Sample data for projects
   const projects = [
    {
        title: "Optimisation Web pour une Performance Maximale",
        description: "Développement et mise en œuvre d'une solution web offrant des performances accrues, une expérience utilisateur fluide et un impact direct sur l'engagement des visiteurs.",
        image: project_1,
    },
    {
        title: "Application Mobile de Gestion de Tâches Intelligente",
        description: "Conception d'une application mobile intuitive permettant une organisation efficace des tâches avec des fonctionnalités basées sur l'IA pour des recommandations personnalisées.",
        image: project_2,
    },
    {
        title: "Plateforme E-commerce Innovante",
        description: "Création d'une plateforme e-commerce moderne intégrant des outils de personnalisation, des fonctionnalités avancées de recherche et une navigation simplifiée.",
        image: project_3,
    },
];

=======
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
>>>>>>> d0cf644ce0540aaf7f1b000b906340c6f77a3850

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
<<<<<<< HEAD
        <div className="w-full my-24 ">
=======
        <div className="w-full my-24">
>>>>>>> d0cf644ce0540aaf7f1b000b906340c6f77a3850
            <h2 className="text-3xl font-bold text-center mb-16">Nos Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  ">
                
                {/* Project Description Section */}
<<<<<<< HEAD
                <div className="px-10 space-y-8 mx-auto">
                    <h3 className="md:text-3xl text-2xl font-semibold">{projects[currentIndex].title}</h3>
                    <p className= " w-10/12 text-gray-600 md:text-md">{projects[currentIndex].description}</p>
                    <button className="bg-black text-white text-sm md:text-xl px-3 gap-1 py-1 rounded-lg flex items-center">Voir projet<RxArrowTopRight /></button>
=======
                <div className="space-y-4 mx-auto">
                    <h3 className="text-2xl font-semibold">{projects[currentIndex].title}</h3>
                    <p className="text-gray-600">{projects[currentIndex].description}</p>
                    <button className="bg-black text-white text-sm px-3 gap-1 py-1 rounded-lg flex items-center">Voir projet<RxArrowTopRight /></button>
>>>>>>> d0cf644ce0540aaf7f1b000b906340c6f77a3850
                </div>
                
                {/* Project Image Section */}
                <div className="relative ">
<<<<<<< HEAD
                    <div className="bg-gray-200 h-96 w-full  rounded-md flex items-center justify-center">
                        
                            <img src={
                        projects[currentIndex].image} className='w-full object-cover h-full' alt="" />
                    </div>
                    
                    {/* Navigation Arrows */}
                    <div className="absolute bottom-4 md:right-[8%] right-4 flex space-x-2">
=======
                    <div className="bg-gray-200 h-96 w-full md:w-10/12 rounded-md flex items-center justify-center">
                        <span className="text-gray-500">{projects[currentIndex].image}</span>
                    </div>
                    
                    {/* Navigation Arrows */}
                    <div className="absolute bottom-4 md:right-[22%] right-4 flex space-x-2">
>>>>>>> d0cf644ce0540aaf7f1b000b906340c6f77a3850
                        <button onClick={handlePrev} className="bg-gray-300 rounded-full p-2 hover:bg-gray-400">
                        <FaArrowLeft />
                        </button>
                        <button onClick={handleNext} className="bg-gray-300 rounded-full p-2 hover:bg-gray-400">
                        <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;