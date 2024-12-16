import { useState } from 'react';

function QuestionsSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false); // État pour afficher toutes les questions ou non

  const questions = [
    {
      question: "Comment puis-je rejoindre la communauté ?",
      answer: "Vous pouvez rejoindre Full Stack Coders Hub en créant un compte gratuit sur notre site. Remplissez simplement le formulaire d’inscription et accédez immédiatement à toutes nos ressources et opportunités d’événements."
    },
    {
      question: "Quels sont les avantages d'être membre ?",
      answer: "En tant que membre, vous aurez accès à des ressources de formation, des événements exclusifs, des opportunités de réseautage, un mentorat personnalisé, et un espace pour échanger avec d’autres développeurs et experts du secteur."
    },
    {
      question: "La communauté est-elle gratuite ?",
      answer: "Oui, la majorité des services et ressources de Full Stack Coders Hub sont gratuits pour nos membres. Cependant, certains ateliers spécialisés ou événements peuvent nécessiter une participation financière."
    },
    {
      question: "Quels types d'événements organisez-vous ?",
      answer: "Nous organisons des ateliers techniques, des hackathons, des sessions de mentorat, des webinaires et des meetups en ligne. Ces événements sont conçus pour renforcer les compétences techniques et créer des opportunités de collaboration entre membres."
    },
    {
      question: "Puis-je participer en tant que débutant ?",
      answer: "Absolument ! Nous encourageons les développeurs de tous niveaux à rejoindre notre communauté. Nous proposons des ressources adaptées aux débutants et des mentors pour vous accompagner dans votre parcours."
    },
    {
      question: "Comment se déroule le mentorat au sein de la communauté ?",
      answer: "Nous offrons un programme de mentorat où des développeurs expérimentés vous guident, que ce soit pour acquérir de nouvelles compétences, résoudre des blocages techniques, ou vous orienter dans votre carrière."
    },
    {
      question: "Comment puis-je contribuer à la communauté ?",
      answer: "Vous pouvez contribuer en partageant des articles, en participant aux discussions, en proposant des ateliers, ou même en devenant mentor. Il existe de nombreuses façons de participer activement et d’aider la communauté à grandir."
    },
    {
      question: "Comment puis-je trouver des collaborateurs pour mes projets ?",
      answer: "Utilisez notre forum de projets et nos canaux de communication comme Discord pour partager vos idées de projet et trouver des membres intéressés à collaborer avec vous."
    },
    {
      question: "Comment accéder aux ressources disponibles (tutoriels, articles, outils) ?",
      answer: "Toutes les ressources sont accessibles depuis votre espace membre. Connectez-vous pour explorer les tutoriels, articles, et outils régulièrement mis à jour pour améliorer vos compétences."
    },
    {
      question: "Quels sont les canaux de communication utilisés dans la communauté ?",
      answer: "Nous utilisons principalement Discord pour les discussions en temps réel, ainsi qu'un forum en ligne pour des discussions approfondies. Suivez-nous aussi sur LinkedIn et Twitter pour les dernières nouvelles."
    },
    {
      question: "Est-ce que des entreprises peuvent collaborer avec la communauté ?",
      answer: "Oui, nous accueillons volontiers les partenariats avec les entreprises tech, agences et startups. Contactez-nous pour des possibilités de sponsoring, d'organisation d'événements, ou de recrutements."
    },
    {
      question: "Comment la communauté se distingue-t-elle des autres ?",
      answer: "Full Stack Coders Hub se distingue par son esprit collaboratif, son mentorat bienveillant, et son engagement à offrir des opportunités pratiques aux membres pour se former et se connecter au secteur tech."
    },
    {
      question: "Comment puis-je rester informé des nouveaux événements et annonces ?",
      answer: "Inscrivez-vous à notre newsletter, suivez-nous sur LinkedIn et Twitter, et rejoignez notre Discord pour ne manquer aucune annonce ou événement."
    },
    {
      question: "À qui puis-je m’adresser pour toute question supplémentaire ?",
      answer: "Si vous avez des questions supplémentaires, vous pouvez nous contacter par email à [votre adresse email] ou via le formulaire de contact sur notre site."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const displayedQuestions = showAll ? questions : questions.slice(0, 6); // Affiche 6 questions par défaut

  return (
    <section className=" py-24 px-6 md:px-24 lg:px-48 w-full bg-white dark:bg-[#cad0ca]">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Sidebar title, centered vertically */}
        <div className="md:w-1/3 flex items-center justify-center mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 text-center dark:text-black">
          Vous avez une question ? Consultez la FAQ
          </h2>
        </div>

        {/* Questions list */}
        <div className="md:w-2/3 space-y-4">
          {displayedQuestions.map((item, index) => (
            <div
              key={index}
              className={`  rounded-lg shadow-lg  transition-all duration-300 ${
                activeIndex === index ? 'bg-gray-100 p-6' : 'bg-gray-100 p-4'
              }`}
              style={{
                maxHeight: activeIndex === index ? '200px' : '60px', // Adjust as needed
              }}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none "
              >
                <span className="text-gray-900 font-medium text-sm">{item.question}</span>
                <svg
                  className={`w-6 h-6 text-indigo-500 transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div
                className={`transition-all duration-300  ${
                  activeIndex === index ? 'mt-4 opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}

          {/* Bouton "Afficher plus" */}
          {!showAll && questions.length > 6 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowAll(true)}
                className="text-indigo-500 hover:underline focus:outline-none"
              >
                Afficher plus
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuestionsSection;