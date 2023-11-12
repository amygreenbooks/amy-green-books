import Jumbotron from "@/components/header/jumbotron";
import { getContentData } from "@/lib/content";

import ContactForm from "./contactForm";

export type ContactType = {
  title: string;
  date: number;
  description: string;
  bannerImage: string;
  successMessage: string;
};

export default async function ContactPage() {
  const {
    frontmatter: { title, description, bannerImage },
    content,
  } = await getContentData<ContactType>(null, "contact");

  return (
    <>
      <Jumbotron title={title} subtitle={description} image={bannerImage} />

      <ContactForm content={content} />
    </>
  );
}
