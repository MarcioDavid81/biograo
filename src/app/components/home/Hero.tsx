import Image from 'next/image';
import Link from 'next/link';


const Hero = ({ title, description, thumbnail }: any) => {

  return (
    <section className="relative bg-blue-600 overflow-hidden">
      {/* Overlay de background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 z-10"></div>
      
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Conteúdo */}
      <div className="container-custom w-[90%] relative z-20 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-white mb-4">
            {title}
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 opacity-90">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="btn bg-secondary border-2 border-lime-500 hover:bg-lime-500 text-white transition-all duration-300 ease-in-out">
              Nossos Serviços
            </Link>
            <Link href="/about" className="btn bg-white hover:bg-gray-100 text-primary">
              Conheça-nos
            </Link>
          </div>
        </div>
      </div>
      
      {/* Ondulação decorativa na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,143.53,111.94,221.49,87.21Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;