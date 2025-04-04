import {
  Calendar,
  ChartLine,
  HandCoins,
  Truck,
  Warehouse,
  WheatIcon,
} from "lucide-react";
import ServiceCard from "../components/services/ServiceCard";

export const metadata = {
  title: "Serviços - BioGrão Comércio Agrícola",
  description:
    "Conheça os serviços oferecidos pela BioGrão para produtores rurais de Jari/RS e região.",
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Compra de Grãos",
      description:
        "Adquirimos sua produção de soja, trigo e milho com os melhores preços do mercado. Nosso processo transparente garante que você receba o valor justo pelo seu trabalho, com pagamento rápido e facilitado.",
      icon: <WheatIcon />,
      features: [
        "Cotação atualizada diariamente",
        "Pagamento à vista ou programado",
        "Análise de qualidade na hora",
        "Bonificação por volume",
      ],
    },
    {
      id: 2,
      title: "Armazenagem",
      description:
        "Contamos com estrutura moderna para armazenamento de grãos, garantindo a conservação da qualidade da sua produção. Nossos silos seguem padrões rigorosos de controle de temperatura e umidade.",
      icon: <Warehouse />,
      features: [
        "Monitoramento constante de temperatura",
        "Controle de pragas e fungos",
        "Opção de armazenagem segregada",
        "Relatórios periódicos de qualidade",
      ],
    },
    {
      id: 3,
      title: "Consultoria Agrícola",
      description:
        "Nossa equipe técnica oferece orientação especializada para otimizar sua produção. Desde o plantio até a colheita, estamos prontos para ajudar a maximizar sua produtividade e rentabilidade.",
      icon: <ChartLine />,
      features: [
        "Análise de solo especializada",
        "Recomendações personalizadas de manejo",
        "Monitoramento de pragas e doenças",
        "Planejamento de safra",
      ],
    },
    {
      id: 4,
      title: "Comercialização Futura",
      description:
        "Planeje sua safra com segurança através de contratos futuros. Fixe preços antecipadamente para garantir rentabilidade e proteger-se contra oscilações do mercado.",
      icon: <Calendar />,
      features: [
        "Contratos flexíveis",
        "Proteção contra baixas de preço",
        "Planejamento financeiro antecipado",
        "Opções de entrega programada",
      ],
    },
    {
      id: 5,
      title: "Logística e Transporte",
      description:
        "Oferecemos soluções logísticas para o transporte da sua produção, do campo até nossos armazéns ou diretamente para as indústrias parceiras, com segurança e eficiência.",
      icon: <Truck />,
      features: [
        "Frota própria e terceirizada",
        "Rastreamento de carga",
        "Seguro de transporte",
        "Flexibilidade de horários",
      ],
    },
    {
      id: 6,
      title: "Financiamento Agrícola",
      description:
        "Facilitamos o acesso a linhas de crédito para custeio e investimento através de parcerias com instituições financeiras. Ajudamos você a encontrar as melhores condições para desenvolver sua produção.",
      icon: <HandCoins />,
      features: [
        "Taxas diferenciadas para parceiros",
        "Assistência na documentação",
        "Opções de pagamento em produto",
        "Consultoria financeira agrícola",
      ],
    },
  ];

  return (
    <>
      {/* Header da página */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 text-white py-12 md:py-16">
        <div className="container-custom w-[90%]">
          <div className="max-w-3xl">
            <h1 className="mb-4">Nossos Serviços</h1>
            <p className="text-lg opacity-90">
              Oferecemos soluções completas para atender às necessidades dos
              produtores rurais.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="section bg-white">
        <div className="container-custom w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="section bg-gray-50">
        <div className="container-custom w-[90%]">
          <h2 className="text-primary mb-12 text-center">
            O que dizem nossos parceiros
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-secondary mr-2 bg-green-500 rounded-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
                <p className="text-gray-600">João da Silva</p>
              </div>
              <p className="text-gray-700">
                "A BioGrão me ajudou a encontrar uma solução de comercialização
                de grãos de alta qualidade. A equipe foi muito profissional e
                atento aos meus requisitos. Recomendo!"
              </p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-secondary mr-2 bg-blue-500 rounded-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
                <p className="text-gray-600">Maria Santos</p>
              </div>
              <p className="text-gray-700">
                "A BioGrão me ajudou a encontrar uma solução de comercialização
                de grãos de alta qualidade. A equipe foi muito profissional e
                atento aos meus requisitos. Recomendo!"
              </p>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-secondary mr-2 bg-red-500 rounded-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
                <p className="text-gray-600">Pedro Oliveira</p>
              </div>
              <p className="text-gray-700">
                "A BioGrão me ajudou a encontrar uma solução de comercialização
                de grãos de alta qualidade. A equipe foi muito profissional e
                atento aos meus requisitos. Recomendo!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
