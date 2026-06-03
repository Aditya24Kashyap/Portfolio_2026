import { type MetadataRoute } from "next";
import { appInfo } from "~/constants/app-info";

export default function Manifest(): MetadataRoute.Manifest {
  return {
    name: appInfo.title || "Aditya Kashyap - Software Engineering Student",
    short_name: appInfo.title || "Aditya Kashyap - Software Engineering Student",
    description:
      appInfo.description || "Portfolio | Aditya Kashyap - Software Engineering Student",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfff4",
    theme_color: "#fdfff4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
