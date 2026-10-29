import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { PageMeta } from "../components/PageMeta";

export default function NotFound() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    if (window.location.pathname.replace(/\/$/, "") !== "/404") {
      window.location.replace("/404");
    }
    return () => robots.remove();
  }, []);

  return (
    <SiteLayout>
      <PageMeta title="Page not found | Rise Management & Coaching" description="The page you were looking for could not be found." />
      <main id="main-content" className="not-found-page">
        <p className="eyebrow"><span className="eyebrow-line" />A little detour</p>
        <h1>This page took<br /><em>another path.</em></h1>
        <p>Let’s get you back to the Rise home page and the coaching path you’re looking for.</p>
        <button className="action-link action-primary" onClick={() => setLocation("/")}>Back to the home page</button>
      </main>
    </SiteLayout>
  );
}
