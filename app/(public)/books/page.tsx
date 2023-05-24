import { redirect } from "next/navigation";

import { getBooks } from "@/lib/content";

export default async function Books() {
  const books = await getBooks();
  redirect(`/books/${books[0].id}`);
}
