import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  canonicalUrl?: string;
  imageUrl?: string;
};

export function PageMeta({ title, description, canonicalUrl, imageUrl }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    const setName = (name: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };
    const setProperty = (property: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setName("description", description);
    setProperty("og:site_name", "Rise Management & Coaching");
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", "website");
    setName("twitter:card", "summary_large_image");
    setName("twitter:title", title);
    setName("twitter:description", description);

    if (canonicalUrl) {
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
      setProperty("og:url", canonicalUrl);
    } else {
      document.querySelector('link[rel="canonical"]')?.remove();
      document.querySelector('meta[property="og:url"]')?.remove();
    }

    if (imageUrl) {
      setProperty("og:image", imageUrl);
      setName("twitter:image", imageUrl);
    } else {
      document.querySelector('meta[property="og:image"]')?.remove();
      document.querySelector('meta[name="twitter:image"]')?.remove();
    }
  }, [title, description, canonicalUrl, imageUrl]);

  return null;
}
