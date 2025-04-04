"use server";

import { Notice } from "../types";


export async function getNotices(): Promise<Notice[]> {
  const res = await fetch("https://biograo.api-mdwebdeveloper.com/wp-json/wp/v2/notices?acf_format=standard&_fields=id,title,date,acf", {
    next: { revalidate: 60 }, // Cache por 60 segundos
  });

  if (!res.ok) {
    throw new Error("Failed to fetch notices");
  }

  return res.json();
}

export async function getNoticeBySlug(params: { slug: string }): Promise<Notice | null> {
  const res = await fetch(`https://biograo.api-mdwebdeveloper.com/wp-json/wp/v2/notices?acf_format=standard&_fields=id,title,date,acf&slug=${params.slug}`, {
    next: { revalidate: 60 }, // Cache por 60 segundos
  });

  if (!res.ok) {
    throw new Error("Failed to fetch notice by slug");
  }

  const data = await res.json();

  if (!data.length) return null;

  return data[0];
}

export async function getProducts() {
  const res = await fetch("https://biograo.api-mdwebdeveloper.com/wp-json/wp/v2/products?acf_format=standard&_fields=id,title,date,slug,acf", {
    next: { revalidate: 60 }, // Cache por 60 segundos
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProductById(params: { id: string }) {
  const res = await fetch(`https://biograo.api-mdwebdeveloper.com/wp-json/wp/v2/products/${params.id}?acf_format=standard&_fields=id,title,date,slug,acf`, {
    next: { revalidate: 60 }, // Cache por 60 segundos
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product by id");
  }

  return res.json();
}

export async function getHero() {
  const res = await fetch("https://biograo.api-mdwebdeveloper.com/wp-json/wp/v2/heros?acf_format=standard&_fields=acf", {
    next: { revalidate: 60 }, // Cache por 60 segundos
  });

  if (!res.ok) {
    throw new Error("Failed to fetch hero");
  }

  return res.json();
}

export async function getContact() {
  const res = await fetch("https://biograo.api-mdwebdeveloper.com/wp-json/wp/v2/contact?acf_format=standard&_fields=acf", {
    next: { revalidate: 60 }, // Cache por 60 segundos
  });

  if (!res.ok) {
    throw new Error("Failed to fetch contact");
  }

  return res.json();
}

export async function getWelcome() {
  const res = await fetch("https://biograo.api-mdwebdeveloper.com/wp-json/wp/v2/welcome?acf_format=standard&_fields=acf", {
    next: { revalidate: 60 }, // Cache por 60 segundos
  });

  if (!res.ok) {
    throw new Error("Failed to fetch welcome");
  }

  return res.json();
}

export async function getPartners() {
  const res = await fetch("https://biograo.api-mdwebdeveloper.com/wp-json/wp/v2/partner?acf_format=standard&_fields=id,acf", {
    next: { revalidate: 60 }, // Cache por 60 segundos
  });

  if (!res.ok) {
    throw new Error("Failed to fetch partners");
  }

  return res.json().then((data) => {
    return data.sort((a: any, b: any) => a.acf.order - b.acf.order);
  })
}