import PageLayout from "@/components/pageLayout";

export default async function MdxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout>
      <div className="cms">{children}</div>
    </PageLayout>
  );
}
