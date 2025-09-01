import { imageSearch } from "@/utils/ddg/api";

export async function GET() {
  console.log("Searching DDG for images...");

  const images = await imageSearch({
    query: "pikachu",
  });

  console.log("Got", images.length, "results");

  return new Response(JSON.stringify(images), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
