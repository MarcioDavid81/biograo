import Image from 'next/image';
import CompanyHistory from '../components/about/CompanyHistory';
import TeamSection from '../components/about/TeamSection';

export const metadata = {
  title: 'Sobre - BioGrão Comércio Agrícola',
  description: 'Conheça a história e os valores da BioGrão, sua parceira no comércio de grãos em Jari/RS e região.',
};

export default function AboutPage() {
  return (
    <>
      {/* Header da página */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 text-white py-12 md:py-16">
        <div className="container-custom w-[90%]">
          <div className="max-w-3xl">
            <h1 className="mb-4">Sobre a BioGrão</h1>
            <p className="text-lg opacity-90 md:text-nowrap">
              Conheça nossa história, valores e o compromisso com o desenvolvimento agrícola da região.
            </p>
          </div>
        </div>
      </section>
      
      {/* Visão, Missão e Valores */}
      <section className="section bg-white">
        <div className="container-custom w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções de comercialização de grãos que valorizem o trabalho do produtor rural, 
                promovendo o desenvolvimento econômico da região de Jari e arredores.
              </p>
            </div>
            
            {/* Visão */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a principal parceira comercial dos produtores rurais da região, 
                destacando-se pela confiabilidade, transparência e inovação nos serviços prestados.
              </p>
            </div>
            
            {/* Valores */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Valores</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Ética e transparência em todas as relações</li>
                  <li>Valorização do produtor rural</li>
                  <li>Compromisso com a qualidade</li>
                  <li>Desenvolvimento regional sustentável</li>
                  <li>Inovação constante</li>
                </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* História da Empresa */}
      <CompanyHistory />
      
      {/* Nossa Equipe */}
      <TeamSection />
      
      {/* Compromisso com a Sustentabilidade */}
      <section className="section bg-gray-50">
        <div className="container-custom w-[90%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-primary mb-6">Compromisso com a Sustentabilidade</h2>
              <p className="mb-4 text-gray-700">
                Na BioGrão, acreditamos que o sucesso do agronegócio está diretamente relacionado ao 
                respeito ao meio ambiente e às práticas sustentáveis. Por isso, incentivamos:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>O uso consciente de recursos naturais na produção agrícola</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>A adoção de técnicas de plantio direto e rotação de culturas</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>O desenvolvimento de práticas que minimizem o impacto ambiental</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>A preservação de áreas de conservação e recursos hídricos</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Estamos comprometidos em construir um futuro sustentável para a agricultura em nossa região, 
                garantindo prosperidade para as gerações atuais e futuras.
              </p>
            </div>
            <div className="relative h-96 rounded-lg rounded-tr-[100px] overflow-hidden shadow-md">
              <Image 
                src="/images/sustainability.webp" 
                alt="Práticas sustentáveis na agricultura" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}