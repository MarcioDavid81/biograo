import Link from "next/link";
import Hero from "./components/home/Hero";
import ProductsSection from "./components/home/ProductsSection";
import ContactCTA from "./components/home/ContactCTA";
import { getContact, getHero, getNotices, getWelcome } from "../../actions";
import NoticeCard from "./components/notices/NoticeCard";
import { format } from "date-fns";
import { phoneFormat } from "../../utils";
import { ChartLine, Warehouse, WheatIcon } from "lucide-react";
import Welcome from "./components/home/Welcome";
import { ProductCarousel } from "./components/products/ProductCarousel";
import ProductCarouselContent from "./components/products/ProductCarouselContent";
import MarqueeBanner from "./components/home/Marquee";


export const metadata = {
  title: "Home - BioGrão Comércio Agrícola",
  description:
    "Página inical da BioGrão Comércio Agrícola.",
};

export default async function Home() {
  const notices = await getNotices(); /* Notícias */
  const data = await getHero(); /* Hero List */
  const hero = data[0].acf; /* Hero Position */
  const contacts = await getContact(); /* Contatos */
  const contact = contacts[0].acf; /* Contato Position */
  const welcomes = await getWelcome(); /* Boas-vindas */
  const welcome = welcomes[0].acf; /* Boas-vindas Position */

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
            {/* Serviço 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <WheatIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compra de Grãos</h3>
              <p className="text-gray-600">
                Adquirimos sua produção de soja, trigo e milho com os melhores
                preços do mercado e pagamento facilitado.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <Warehouse className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Armazenagem</h3>
              <p className="text-gray-600">
                Oferecemos estrutura de armazenagem com tecnologia de ponta para
                preservar a qualidade dos seus grãos.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <ChartLine className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Consultoria Agrícola
              </h3>
              <p className="text-gray-600">
                Orientação técnica para melhorar sua produtividade e
                rentabilidade, com profissionais especializados.
              </p>
            </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center group-[&>*]:">
            {notices.slice(0, 3).map((notice: any) => (
              <NoticeCard
                key={notice.id}
                thumbnail={notice.acf.thumbnail}
                title={notice.title.rendered}
                subtitle={notice.acf.subtitle}
                date={`Data: ${format(new Date(notice.date), "dd/MM/yyyy")}`}
                category={`Categoria: ${notice.acf.category.name}`}
                author={`Autor: ${notice.acf.author.data.display_name}`}
                btnLabel="Leia Mais"
                href={`/notices/${notice.acf.slug}`}
              />
            ))}
          </div>
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
