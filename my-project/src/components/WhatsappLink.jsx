import { FaWhatsapp, FaArrowUp, FaLinkedin } from "react-icons/fa";

function WhatsAppLink() {
  const phoneNumber = "+212618941000";
  const message = encodeURIComponent("Hello, I need more info!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  // Fonction pour faire défiler vers le haut avec un contrôle sur la page
  const scrollToTop = () => {
    // Vérifier si la page peut défiler
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Défilement fluide
      });
    }
  };

  return (
    <div className="flex flex-col fixed bottom-4 right-4 gap-2">
      {/* Bouton de retour en haut */}
      <button
        onClick={scrollToTop}
        className="p-3 bg-[#009B72] text-white rounded-full shadow-lg hover:bg-[#007a5a] transform hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={24} className="m-auto" />
      </button>

      {/* Lien WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-[#009B72] text-white rounded-full shadow-lg hover:bg-[#007a5a] transform hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp className="text-2xl m-auto" />
      </a>

      {/* Lien LinkedIn */}
      <a
        href="https://www.linkedin.com/groups/13096592/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-[#009B72] text-white rounded-full shadow-lg hover:bg-[#007a5a] transform hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Visit LinkedIn Profile"
      >
        <FaLinkedin className="text-2xl m-auto" />
      </a>
    </div>
  );
}

export default WhatsAppLink;
