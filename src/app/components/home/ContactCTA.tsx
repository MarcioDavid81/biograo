import Link from 'next/link';

const ContactCTA = ({title, description, thumbnail, phone}: any) => {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-fixed text-white relative z-[2] py-16 md:py-20" style={{ backgroundImage: `url(${thumbnail})`}}>
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-lime-300 opacity-90 z-10"></div>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center relative z-20">
          <h2 className="text-white mb-6">{title}</h2>
          <p className="text-white text-lg mb-8 opacity-90">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`tel:${phone}`} 
              className="btn bg-blue-700 hover:bg-blue-700/80 text-secondary"
            >
              {phone}
            </a>
            <Link 
              href="/contact" 
              className="btn border-2 border-white hover:bg-blue-700 text-white hover:border-blue-700 transition-all duration-300 ease-in-out"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;