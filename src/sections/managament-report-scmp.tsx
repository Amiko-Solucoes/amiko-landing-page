export default function ManagementSectionSCMP (){
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="bg-sky-900 flex items-center w-full justify-center h-32 mt-20">
        <span className="text-3xl text-white">Relatório Gerencial - SCMP</span>
      </div> 

      <div className="flex items-center flex-col w-full min-h-screen p-8 text-left bg-about_bg bg-cover bg-center bg-no-repeat text-sky-900">
        <iframe
          width="1350"
          height="1300"
          src="https://lookerstudio.google.com/embed/reporting/859af85a-9be1-400a-8300-ee6469730699/page/d4xWD"
          frameBorder="0"
          style={{ border: "0" }} // Correção aqui: estilo como objeto
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}