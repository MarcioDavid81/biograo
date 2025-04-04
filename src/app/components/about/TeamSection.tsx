import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Carlos Eduardo Silva',
      position: 'Diretor Executivo',
      bio: 'Formado em Agronomia com 20 anos de experiência no setor de commodities agrícolas. Lidera a empresa com foco na inovação e relacionamento com o produtor.',
      image: '/images/team/director.jpg'
    },
    {
      name: 'Ana Paula Martins',
      position: 'Gerente Comercial',
      bio: 'Especialista em negociação e mercado de grãos, responsável pelo desenvolvimento de estratégias comerciais e relacionamento com produtores.',
      image: '/images/team/comercial.jpg'
    },
    {
      name: 'Roberto Oliveira',
      position: 'Engenheiro Agrônomo',
      bio: 'Atua na consultoria técnica aos produtores, auxiliando na maximização da produtividade e qualidade dos grãos comercializados.',
      image: '/images/team/agronomist.jpeg'
    },
    {
      name: 'Fernanda Costa',
      position: 'Analista Financeiro',
      bio: 'Responsável pela gestão financeira e desenvolvimento de condições comerciais que atendam às necessidades dos produtores parceiros.',
      image: '/images/team/financial.png'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom w-[90%]">
        <h2 className="text-primary mb-2 text-center">Nossa Equipe</h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Conheça os profissionais dedicados que fazem parte da BioGrão e trabalham diariamente para oferecer as melhores soluções para nossos parceiros.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image 
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-primary">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;