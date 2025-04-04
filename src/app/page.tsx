import Link from "next/link";
import Hero from "./components/home/Hero";
import ProductsSection from "./components/home/ProductsSection";
import ContactCTA from "./components/home/ContactCTA";
import { getContact, getHero, getNotices, getWelcome, getUniqueCategories } from "../../actions";
import { phoneFormat } from "../../utils";
import { ChartLine, Warehouse, WheatIcon } from "lucide-react";
import Welcome from "./components/home/Welcome";
import { ProductCarousel } from "./components/products/ProductCarousel";
import ProductCarouselContent from "./components/products/ProductCarouselContent";
import MarqueeBanner from "./components/home/Marquee";
import { ClientFilteredNotices } from "./components/notices/ClientFilteredNotices";
import ServiceCard from "./components/services/ServiceCard";


export const metadata = {
  title: "Home - BioGrão Comércio Agrícola",
  description:
    "Página inical da BioGrão Comércio Agrícola.",
};

const services = [
  {
    title: "Compra de Grãos",
    description: "Oferecemos condições diferenciadas para a compra de grãos, garantindo o melhor valor para sua safra.",
    icon: <WheatIcon />,
    features: [
      "Melhores preços do mercado",
      "Pagamento facilitado",
      "Transporte seguro e rápido",
      "Acompanhamento da safra",
      "Suporte técnico especializado",
    ]
  },
  {
    title: "Armazenagem",
    description: "Contamos com estrutura moderna para armazenamento de grãos, garantindo a conservação da qualidade da sua produção.",
    icon: <Warehouse />,
    features: [
      "Segurança e controle de temperatura",
      "Monitoramento constante de pragas e fungos",
      "Opção de armazenagem segregada",
      "Relatórios periódicos de qualidade",
    ]
  },
  {
    title: "Consultoria Agrícola",
    description: "Nossos especialistas oferecem consultoria personalizada para maximizar a produtividade e rentabilidade da sua propriedade.",
    icon: <ChartLine />,
    features: [
      "Análise de solo e clima",
      "Recomendações de cultivos",
      "Planejamento estratégico",
      "Acompanhamento técnico contínuo",
    ]
  }
]

export default async function Home() {
  const notices = await getNotices(); /* Notícias */
  const data = await getHero(); /* Hero List */
  const hero = data[0].acf; /* Hero Position */
  const contacts = await getContact(); /* Contatos */
  const contact = contacts[0].acf; /* Contato Position */
  const welcomes = await getWelcome(); /* Boas-vindas */
  const welcome = welcomes[0].acf; /* Boas-vindas Position */
  const categories = await getUniqueCategories(); /* Categorias */

  return (
    <>
      <Hero
        title={hero.title}
        description={hero.description}
        thumbnail={hero.thumbnail}
      />

      {/* Seção de Boas-vindas */}
      <Welcome
        title={welcome.title}
        description={welcome.description}
        txt_btn={welcome.txt_btn}
      />

      {/* Seção de Produtos */}
      <ProductsSection />

      {/* Seção de Serviços */}
      <section className="section bg-gray-50">
        <div className="container-custom w-[90%]">
          <h2 className="text-primary mb-2 text-center">Nossos Serviços</h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços para atender às necessidades
            dos produtores rurais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn bg-lime-500 text-white">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Notícias Recentes */}
      <section className="section bg-white">
        <div className="container-custom w-[90%] mx-auto flex flex-col mt-6">
          <h2 className="text-primary mb-2 text-center">Últimas Notícias</h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Acompanhe as notícias mais recentes sobre o setor agrícola.
          </p>
          <ClientFilteredNotices notices={notices} categories={categories} />
          <div className="text-center mt-10">
            <Link href="/notices" className="btn bg-lime-500 text-white">
              Ver todas as notícias
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Produtos em oferta */}
      <section className="section bg-white">
        <div className="container-custom w-[90%] mx-auto flex flex-col mt-6">
          <h2 className="text-primary mb-2 text-center">Produtos em oferta</h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Confira as principais ofertas da loja.
          </p>
          
          <div className="flex items-center justify-center group-[&>*]:">
            <ProductCarousel>
              <ProductCarouselContent />
            </ProductCarousel>
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn bg-lime-500 text-white">
              Ver todos os produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Parceiros */}
      <section className="section bg-white">
        <div className="container-custom w-[90%] mx-auto flex flex-col mt-6">
          <h2 className="text-primary mb-2 text-center">Parceiros</h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Conheça as empresas que confiam em nossos serviços.
          </p>
          <div className="flex items-center justify-center group-[&>*]:">
            <MarqueeBanner />
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <ContactCTA
        title={contact.title}
        description={contact.description}
        thumbnail={contact.thumbnail}
        phone={phoneFormat(contact.phone)}
      />
    </>
  );
}
