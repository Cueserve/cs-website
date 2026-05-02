import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamicParams = false;

type Params = Promise<{ slug: string }>;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  await params;
  notFound();
}
