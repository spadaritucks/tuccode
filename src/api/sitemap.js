
export default function handler(req, res) {
    res.setHeader("Content-Type", "application/xml");
  
    const urls = [
      "https://tuccode.com.br/",
      "https://tuccode.com.br/projetos",
      "https://tuccode.com.br/serviços",
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map((url) => `
          <url>
            <loc>${url}</loc>
            <priority>${url === "https://tuccode.com.br/" ? "1.0" : "0.8"}</priority>
          </url>
        `)
        .join("")}
    </urlset>`;
  
    res.write(sitemap);
    res.end();
  }
  