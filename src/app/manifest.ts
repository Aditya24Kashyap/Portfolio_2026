import { type MetadataRoute } from "next";
import { appInfo } from "~/constants/app-info";

export default function Manifest(): MetadataRoute.Manifest {
  return {
    name: appInfo.title || "Aditya Kashyap — Software Engineer",
    short_name: appInfo.title || "Aditya Kashyap",
    description:
      appInfo.description || "Software Engineer · C++ · Full Stack · MSIT Delhi '26",
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
