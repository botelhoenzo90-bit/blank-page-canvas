import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Página em branco" },
      { name: "description", content: "Uma página inicial em branco, pronta para receber conteúdo." },
      { property: "og:title", content: "Página em branco" },
      {
        property: "og:description",
        content: "Uma página inicial em branco, pronta para receber conteúdo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <main className="min-h-screen bg-background" />;
}
