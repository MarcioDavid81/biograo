import { Metadata } from "next";
import ProductView from "../components/products/ProductView";


export const metadata: Metadata = {
  title: "Produtos - BioGrão Comércio Agrícola",
  description:
    "Conheça os Produtos oferecidos pela BioGrão para produtores rurais de Jari/RS e região.",
};

export default function Products() {
    return (
      <ProductView />
    )
}
