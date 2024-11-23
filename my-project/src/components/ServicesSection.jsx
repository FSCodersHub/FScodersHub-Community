import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import dev from '../assets/services-dev.png';
import consulting from '../assets/consulting.png';
import design from '../assets/design.png';
import innovation from '../assets/innovation.png';

export default function ServicesSection() {
    const data = [
        {
            title: '1. Services de Création de Sites Web',
            services: [
                'Conception de Sites Web',
                'Développement Web sur Mesure',
                'Optimisation SEO',
                'UX UI DESIGN',
            ],
            src: dev,
        },
        {
            title: '2. Consulting',
            services: [
                'Consultation Stratégique',
                'Évaluation des besoins des entreprises',
                'Recommandations pour optimiser la présence en ligne',
            ],
            src: consulting, // Replace with appropriate image
        },
        {
            title: '3. Forum d\'Innovation',
            services: [
                'Plateforme de Collaboration',
                'Forum pour partager des idées',
                'Outils pour soutenir des projets innovants',
            ],
            src: innovation, // Replace with appropriate image
        },
        {
            title: '4. Graphic Design',
            services: [
                'Consultation Stratégique',
                'Création de supports graphiques',
                'Optimisation visuelle pour la présence en ligne',
            ],
            src: design, // Replace with appropriate image
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold text-center mb-12">Ce que Nous Offrons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.map((item, index) => (
                    <Service
                        key={index}
                        services={item.services}
                        title={item.title}
                        src={item.src}
                    />
                ))}
            </div>
        </div>
    );
}

const Service = ({ services, title, src }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center mb-4">
                <img src={src} alt={title} className="h-12 w-12" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
            <ul className="space-y-2 text-gray-600">
                {services.map((item, index) => (
                    <li key={index}>• {item}</li>
                ))}
            </ul>
            <button className="mt-6 flex items-center bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                <span className="mr-2">En savoir plus</span>
                <FaLongArrowAltRight />
            </button>
        </div>
    );
};
