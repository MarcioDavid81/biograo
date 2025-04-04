import Image from 'next/image';

const CompanyHistory = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom w-[90%]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-primary mb-8 text-center">Nossa História</h2>
          
          <div className="space-y-16">
            {/* Fundação */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/images/history-1.webp" 
                    alt="Fundação da BioGrão" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <div className="text-xl font-bold text-primary mb-2">2005</div>
                <h3 className="text-xl font-semibold mb-4">Fundação da BioGrão</h3>
                <p className="text-gray-700">
                  A BioGrão nasceu do sonho de um grupo de empresários locais que identificaram 
                  a necessidade de uma empresa focada no comércio de grãos que realmente valorizasse 
                  o trabalho do produtor rural. Com um pequeno armazém e muito entusiasmo, demos início 
                  às nossas operações em Jari, estabelecendo desde o princípio uma relação de 
                  transparência e confiança com os agricultores da região.
                </p>
              </div>
            </div>
            
            {/* Expansão */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="text-xl font-bold text-primary mb-2">2012</div>
                <h3 className="text-xl font-semibold mb-4">Expansão e Modernização</h3>
                <p className="text-gray-700">
                  Com o crescimento constante e a confiança dos produtores, realizamos uma importante 
                  expansão das nossas instalações. Modernizamos nossos sistemas de armazenagem, 
                  implementamos novas tecnologias para análise e classificação de grãos, e ampliamos 
                  nossa capacidade operacional. Este foi um marco importante que nos permitiu atender 
                  um número maior de produtores e expandir nossa atuação para cidades vizinhas.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/images/history-2.png" 
                    alt="Expansão da BioGrão" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Atualidade */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/images/history-3.jpg" 
                    alt="BioGrão hoje" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <div className="text-xl font-bold text-primary mb-2">Hoje</div>
                <h3 className="text-xl font-semibold mb-4">Consolidação e Compromisso</h3>
                <p className="text-gray-700">
                  Atualmente, a BioGrão se consolida como uma das principais empresas de comércio 
                  agrícola da região, trabalhando com soja, trigo e milho. Nossa equipe cresceu, 
                  mas mantemos o mesmo compromisso com o atendimento personalizado e próximo ao 
                  produtor rural. Seguimos investindo em tecnologia e capacitação para oferecer 
                  as melhores soluções e contribuir para o desenvolvimento do agronegócio local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;