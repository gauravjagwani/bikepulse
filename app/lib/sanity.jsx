import { createClient } from "next-sanity";
import ImageUrlBuild from "@sanity/image-url";

export const client = createClient({
  projectId: "9c7sug72",
  dataset: "production",
  apiVersion: "2024-01-08",
  useCdn: true,
});

const imgBuilder = ImageUrlBuild(client);

export function urlFor(source) {
  return imgBuilder.image(source);
}
