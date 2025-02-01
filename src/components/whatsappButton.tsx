"use client"

export function WhatsAppButton () {
  const phoneNumber = '5535999968808'; // Substitua pelo seu número de WhatsApp
  const message = 'Gostaria de conhecer as soluções de otimização da Amiko'; // Mensagem padrão

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all duration-300 z-50"
      onClick={handleClick}
    >
      <img
        src="/whatsapp-icon.png" // Coloque o ícone do WhatsApp na pasta public
        alt="WhatsApp"
        width={40}
        height={40}
      />
    </div>
  );
};