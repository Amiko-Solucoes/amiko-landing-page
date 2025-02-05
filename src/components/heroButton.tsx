"use client"

export function HeroButton (){
  const phoneNumber = '5535999968808'; // Substitua pelo seu número de WhatsApp
  const message = 'Gostaria de saber mais sobre a Amiko Soluções!'; // Mensagem padrão

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} className="bg-sky-700 text-white font-poppins text-xl px-8 py-3 rounded-[8px] hover:bg-sky-500 w-fit">
      Saiba mais
    </button>
  )
}