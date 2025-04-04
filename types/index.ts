export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type Notice = {
  id: number;
  title: { rendered: string };
  date: string;
  acf: {
    slug: string;
    content: string;
    thumbnail: string;
    subtitle: string;
    category: { name: string };
    author: { data: { display_name: string } };
  };
};

export interface ProductWP {
  id: number;
  title: {
    rendered: string;
  };
  date: string;
  slug: string;
  acf: {
    name?: string;
    price?: number;
    description?: string;
    thumbnail?: string;
  };
}

export interface HeroProps {
  acf: {
    title: string;
    description: string;
    thumbnail: string;
  }
}
