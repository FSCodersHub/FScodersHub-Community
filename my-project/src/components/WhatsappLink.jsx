import { FaWhatsapp } from "react-icons/fa6";

function WhatsAppLink() {
  const phoneNumber = "+212658729968";
  const message = encodeURIComponent("Hello, I need more info!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 btn bg-green-500 text-white border-none p-3 rounded-full shadow-lg hover:bg-green-600 z-40"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}

export default WhatsAppLink;
