import Image from 'next/image';

const ProductsSection = () => {
  const products = [
    {
      name: 'Soja',
      description: 'Compramos sua produção de soja com preços competitivos, proporcionando rentabilidade e segurança para o produtor.',
      image: '/images/products/soja.jpg'
    },
    {
      name: 'Trigo',
      description: 'Oferecemos condições diferenciadas para a compra de trigo, garantindo o melhor valor para sua safra.',
      image: '/images/products/trigo.jpg'
    },
    {
      name: 'Milho',
      description: 'Comercializamos milho com agilidade e transparência, buscando sempre valorizar a produção local.',
      image: '/images/products/milho.jpeg'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom w-[90%]">
        <h2 className="text-primary mb-2 text-center">Nossos Produtos</h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Comercializamos os principais grãos produzidos na região, com compromisso de qualidade e valorização do produtor rural.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src={product.image}
                  alt={`Imagem de ${product.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;