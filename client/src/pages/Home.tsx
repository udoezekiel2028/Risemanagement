import { ArrowDown, ArrowRight, BookOpen, HeartHandshake, PenLine, Quote, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SiteLayout, { ActionLink } from "../components/SiteLayout";
import { PageMeta } from "../components/PageMeta";

const CALL_URL = "https://risemanagementandcoaching.com/schedule-a-call/";

function HomePage() {
  return (
    <SiteLayout>
      <PageMeta title="Rise Management & Coaching | Your next chapter" description="One-to-one writing coaching with Ashley plus relationship and intimacy coaching with Coralie. Explore two paths to find your voice and feel more connected." canonicalUrl="https://risemanagementandcoaching.com/" imageUrl="https://risemanagementandcoaching.com/wp-content/uploads/2019/11/img_8993-scaled.jpg" />
      <main id="main-content">
        <section className="home-hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />A coaching studio from London</p>
            <h1>Find your voice.<br /><em>Move closer</em> to what matters.</h1>
            <p className="hero-intro">One-to-one coaching for the story you want to tell and the relationships you want to build. Start with the path that feels like yours.</p>
            <div className="hero-actions">
              <a className="action-link action-primary" href="#your-path"><span>Find your path</span><ArrowDown size={17} /></a>
              <ActionLink href={CALL_URL} variant="text" external>Book an introductory call</ActionLink>
            </div>
            <div className="hero-notes"><span>Individual coaching</span><i /> <span>Based in London · Online</span></div>
          </div>
          <div className="hero-visual" aria-label="Portraits of Rise coaches Ashley and Coralie">
            <div className="hero-portrait hero-portrait-coralie">
              <img src={`${import.meta.env.BASE_URL}images/coralie.jpeg`} alt="Coralie Fox, relationship and intimacy coach" fetchPriority="high" />
              <span className="portrait-caption"><b>Coralie Fox</b><span>Relationships &amp; intimacy</span></span>
            </div>
            <div className="hero-portrait hero-portrait-ashley">
              <img src={`${import.meta.env.BASE_URL}images/ashley.jpg`} alt="Ashley-Lou Brown, author and writing coach" fetchPriority="high" />
              <span className="portrait-caption"><b>Ashley Brown</b><span>Author &amp; writing coach</span></span>
            </div>
            <div className="visual-note"><span className="visual-note-mark">R</span><span>Two paths.<br />One place to begin.</span></div>
          </div>
        </section>

        <section className="trust-strip" aria-label="About Rise">
          <div className="trust-inner"><span><Sparkles size={16} /> Honest, personal support</span><span><BookOpen size={16} /> Published writers</span><span><HeartHandshake size={16} /> A partnership built on care</span></div>
        </section>

        <section className="pathways section-wrap" id="your-path">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" />Start where you are</p>
            <div className="section-heading-row"><h2>What would you<br /><em>like to change?</em></h2><p>Choose the support that speaks to you. Each journey is personal, practical, and led by a coach who knows the work from the inside.</p></div>
          </div>
          <div className="pathway-grid">
            <article className="pathway-card writing-card">
              <div className="pathway-topline"><span className="path-icon"><PenLine size={19} /></span><span>01 / Writing</span></div>
              <h3>Your story is<br /><em>worth telling.</em></h3>
              <p>For the writer with an idea, a draft, or a voice waiting to be heard. Ashley helps you get past the blocks, find your words, and make a plan for the work ahead.</p>
              <ul className="path-points"><li>Find your authentic writing voice</li><li>Shape your ideas and create structure</li><li>Get support navigating publishing</li></ul>
              <div className="pathway-card-bottom"><div className="mini-coach"><img src={`${import.meta.env.BASE_URL}images/ashley.jpg`} alt="" /><span>With Ashley Brown</span></div><Link href="/ashely/" className="circle-arrow" aria-label="Explore writing coaching"><ArrowRight size={19} /></Link></div>
              <Link href="/ashely/" className="card-full-link" aria-label="Explore writing coaching with Ashley" />
            </article>
            <article className="pathway-card relationship-card">
              <div className="pathway-topline"><span className="path-icon"><HeartHandshake size={19} /></span><span>02 / Relationships</span></div>
              <h3>Feel closer to<br /><em>the life you want.</em></h3>
              <p>For singles and couples looking for more confidence, connection, or intimacy. Coralie offers frank, compassionate one-to-one coaching tailored to you.</p>
              <ul className="path-points"><li>Build confidence in dating and connection</li><li>Navigate challenges in a committed relationship</li><li>Reconnect with intimacy and desire</li></ul>
              <div className="pathway-card-bottom"><div className="mini-coach"><img src={`${import.meta.env.BASE_URL}images/coralie.jpeg`} alt="" /><span>With Coralie Fox</span></div><Link href="/coralie/" className="circle-arrow" aria-label="Explore relationship coaching"><ArrowRight size={19} /></Link></div>
              <Link href="/coralie/" className="card-full-link" aria-label="Explore relationship coaching with Coralie" />
            </article>
          </div>
        </section>

        <section className="founders-section">
          <div className="founders-inner section-wrap">
            <div className="founders-photo"><img src={`${import.meta.env.BASE_URL}images/ashley.jpg`} alt="Ashley in a bookshop, holding her first book" loading="lazy" /><span className="photo-note">Stories begin with a first page.</span></div>
            <div className="founders-copy">
              <p className="eyebrow"><span className="eyebrow-line" />The people behind Rise</p>
              <h2>Different journeys.<br /><em>A shared belief in you.</em></h2>
              <p>Ashley Brown and Coralie Fox are best friends, published writers, and coaches based in London. Rise grew from their own experience of being supported—and their commitment to helping others move forward in a way that feels true to them.</p>
              <p>Ashley works with writers to find freedom, structure, and their authentic voice. Coralie supports people who want to create more fulfilling intimate relationships. Two distinct kinds of coaching, held together by a down-to-earth, personal approach.</p>
              <div className="founder-links"><Link href="/ashely/">Meet Ashley <ArrowRight size={16} /></Link><Link href="/coralie/">Meet Coralie <ArrowRight size={16} /></Link></div>
            </div>
          </div>
        </section>

        <section className="testimonial-section section-wrap">
          <div className="testimonial-heading"><p className="eyebrow"><span className="eyebrow-line" />Words from clients</p><h2>Real progress.<br /><em>In their own words.</em></h2></div>
          <div className="testimonial-grid">
            <figure className="quote-card quote-blush"><Quote size={25} className="quote-mark" aria-hidden="true" /><blockquote>“She made me feel anything was possible and I’m forever grateful for the time she gave me during our sessions.”</blockquote><figcaption><span className="quote-avatar">MH</span><span><b>Mathilde Herbert</b><small>Writing coaching with Ashley</small></span></figcaption></figure>
            <figure className="quote-card quote-sage"><Quote size={25} className="quote-mark" aria-hidden="true" /><blockquote>“It has been great to have someone non-biased and fair to bounce frustrations and give us solutions that provided positive outcomes.”</blockquote><figcaption><span className="quote-avatar">CS</span><span><b>Caren &amp; Stuey</b><small>Relationship coaching with Coralie · South Africa</small></span></figcaption></figure>
          </div>
        </section>

        <section className="closing-cta">
          <div className="closing-inner section-wrap"><div><p className="eyebrow"><span className="eyebrow-line" />Your next step</p><h2>Start with a<br /><em>conversation.</em></h2></div><div className="closing-copy"><p>Not sure which path fits? A first conversation is a simple way to share what you’re looking for and see whether coaching feels right for you.</p><ActionLink href={CALL_URL} external>Schedule a call</ActionLink><a className="email-link" href="mailto:info@risemanagementandcoaching.com">Or write to info@risemanagementandcoaching.com</a></div></div>
        </section>
      </main>
    </SiteLayout>
  );
}

export default function Home() {
  return <HomePage />;
}
