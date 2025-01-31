import Image from "next/image";

export default function AboutUs(){
  return (
    <div id="aboutUs">
      <div className="bg-sky-900 flex items-center justify-center h-32">
        <span className="text-3xl text-white">Quem Somos?</span>
      </div>  
      <div className="bg-about_bg bg-no-repeat bg-cover flex flex-col md:flex-row py-8 px-8 gap-16 justify-center">
        <div className="md:max-w-[60%] flex flex-col justify-between text-lg gap-4">
          <span>
          A inspiração para nossa empresa surgiu durante a estadia do nosso CEO, Roberto, em um hospital, onde ele esteve internado por alguns dias. Durante esse período, ele identificou uma lacuna significativa no processo de chamada de assistência, o que despertou sua determinação em buscar soluções eficazes e inovadoras, visando otimizar os processos hospitalares com tecnologia. Essa experiência foi fundamental para moldar nosso propósito: <strong className="text-sky-900">Auxiliar instituições hospitalares na redução de custos, melhorar a eficiência operacional e proporcionar maior bem-estar e cuidado aos pacientes, equipe e planeta através de tecnologia.</strong>
          </span>
          <span>
          Nossa história e motivação vêm de um lugar genuino de querer melhorar o sistema de saúde, tornando-o mais humano e acessível. E isso se reflete em tudo o que fazemos, desde o design personalizado de nossos produtos até o cuidado em como eles se integram ao dia a dia hospitalar. Acreditamos que a verdadeira inovação na saúde vem de ouvir e entender as necessidades de quem está na linha de frente e de quem depende desses serviços. Por isso, na Amiko, nos dedicamos a criar tecnologias que não só resolvem problemas práticos mas também melhoram a interação humana, o conforto e, no fim das contas, a qualidade da vida nos hospitais.
          </span>
        </div>
        <div className="flex flex-col items-center justify-between bg-blue gap-4">
          <Image src="roberto-photo.svg" alt="" width={200} height={220} className="shadow-2xl"/>
          <Image src="lucca-photo.svg" alt="" width={200} height={220} className="shadow-2xl"/>
        </div>
      </div>
    </div>
  )
}