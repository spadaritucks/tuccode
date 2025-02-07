
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tuccode.com.br/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://tuccode.com.br/projetos",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.tuccode.com.br/catalogo",
      lastModified: new Date().toISOString(),
    },
  ];
}
