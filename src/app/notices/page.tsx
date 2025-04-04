import { Metadata } from "next";
import NoticeView from "../components/notices/NoticeView";

export const metadata: Metadata = {
  title: 'Notícias - BioGrão Comércio Agrícola',
  description: 'Conheça os serviços oferecidos pela BioGrão para produtores rurais de Jari/RS e região.',
};

export default function Notices() {

  return (
    <NoticeView />
  );
}
