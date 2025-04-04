// src/app/contato/page.tsx
import { Metadata } from "next";
import ContactForm from "../components/contact/ContactForm";
import SocialLinks from "../components/contact/SocialLinks";

export const metadata: Metadata = {
  title: "Contato - BioGrão Comércio Agrícola",
  description: "Formulário para contato com a BioGrão.",
};

export default function ContatoPage() {
  return (
    <>
       {/* Header da página */}
       <section className="bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 text-white py-12 md:py-16">
        <div className="container-custom w-[90%]">
          <div className="max-w-3xl">
            <h1 className="mb-4">Contato</h1>
            <p className="text-lg opacity-90">
              Entre em contato conosco para obter mais informações sobre nossos
              produtos e serviços.
            </p>
          </div>
        </div>
      </section>
      <div className="container-custom w-[90%] mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Formulário de Contato
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Nossas Redes Sociais</h2>
            <SocialLinks />

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-2">
                Informações Adicionais
              </h3>
              <p className="mb-2">Email: contato@biograo.com</p>
              <p className="mb-2">Telefone: (55) 3272-4550</p>
              <p>Horário de atendimento: Segunda a Sexta, das 9h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
