import { ArrowRight, BookOpen, Check, Feather, PenLine } from "lucide-react";
import { Link } from "wouter";
import SiteLayout, { ActionLink } from "../components/SiteLayout";
import { PageMeta } from "../components/PageMeta";

const APPLICATION_URL = "https://form.jotform.com/201644217717049";
const CALL_URL = "https://risemanagementandcoaching.com/schedule-a-call/";

export default function WritingCoaching() {
  return (
    <SiteLayout>
      <PageMeta title="Writing Coach Ashley Brown | Rise" description="Writing coach Ashley Brown helps aspiring writers find their voice, work through blocks, shape ideas, and explore publishing. One-to-one writing support." canonicalUrl="https://risemanagementandcoaching.com/ashely/" imageUrl="https://risemanagementandcoaching.com/wp-content/uploads/2020/06/Facetune_30-06-2020-21-39-20.jpg" />
      <main id="main-content" className="coach-page writing-page">
        <section className="coach-hero section-wrap">
          <div className="coach-hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />Writing coaching · with Ashley</p>
            <h1>Your story has<br /><em>a place in the world.</em></h1>
            <p className="coach-lead">You have an idea, a story, or a message worth sharing. Let’s help you find the words, the structure, and the momentum to bring it to life.</p>
            <div className="hero-actions"><ActionLink href={APPLICATION_URL} external>Apply for one-to-one coaching</ActionLink><ActionLink href={CALL_URL} variant="text" external>Book a conversation</ActionLink></div>
            <p className="coach-hero-note"><Check size={15} /> One-to-one writing support, shaped around your work</p>
          </div>
          <div className="coach-hero-photo writing-photo"><img src={`${import.meta.env.BASE_URL}images/ashley.jpg`} alt="Ashley-Lou Brown in a bookshop, holding her book" fetchPriority="high" /><div className="photo-stamp"><span>AUTHOR</span><span>&amp;</span><span>WRITING COACH</span></div></div>
        </section>

        <section className="recognition-strip"><div className="recognition-inner"><BookOpen size={20} /><span>Author of <em>Jobslut</em>, first published in 2018</span><span className="recognition-separator" /><span>International writing coach</span></div></section>

        <section className="coach-content section-wrap">
          <div className="coach-section-heading"><p className="eyebrow"><span className="eyebrow-line" />If you’ve been feeling stuck</p><h2>There’s more than<br /><em>one way to begin.</em></h2></div>
          <div className="coach-content-body"><p className="large-copy">Maybe you’re doubting whether your story is good enough. Maybe you know what you want to say, but the blank page keeps getting in the way. You don’t have to figure it all out alone.</p><p>Ashley is an author and international writing coach. She works closely with writers to release blockages, connect with their authentic voice, and move past the internal or external obstacles that can make it hard to get the work out into the world.</p></div>
        </section>

        <section className="writing-process">
          <div className="process-inner section-wrap"><div className="process-intro"><p className="eyebrow"><span className="eyebrow-line" />What we can work on</p><h2>Make progress<br /><em>your way.</em></h2><p>Bring the idea you keep returning to, the draft that isn’t quite moving, or the questions you have about sharing your work.</p><ActionLink href={APPLICATION_URL} external>Tell Ashley what you’re writing</ActionLink></div>
            <div className="process-list">
              <article><span className="process-number">01</span><div><h3>Find your voice</h3><p>Reconnect with how you want to sound and what feels true to your story.</p></div><Feather size={21} /></article>
              <article><span className="process-number">02</span><div><h3>Work through the blocks</h3><p>Make space for uncertainty and move through the obstacles in front of your writing.</p></div><PenLine size={21} /></article>
              <article><span className="process-number">03</span><div><h3>Find structure and focus</h3><p>Talk through ideas, shape a plan, and build goals that help your work move forward.</p></div><BookOpen size={21} /></article>
              <article><span className="process-number">04</span><div><h3>Explore the next step</h3><p>Get support navigating publishing and sharing what you’ve written.</p></div><ArrowRight size={21} /></article>
            </div>
          </div>
        </section>

        <section className="ashley-about section-wrap"><div className="about-image"><img src={`${import.meta.env.BASE_URL}images/ashley.jpg`} alt="Ashley with her published book" loading="lazy" /></div><div className="about-copy"><p className="eyebrow"><span className="eyebrow-line" />A little about Ashley</p><h2>Writer, author,<br /><em>your writing muse.</em></h2><p>Ashley-Lou Brown published her first book, <em>Jobslut</em>, in 2018 and is now a full-time novelist. Her work as a coach comes from knowing both the vulnerability and the possibility of putting your words into the world.</p><p>Clients describe her as encouraging and attentive. She supports each writer in finding their own solutions, setting their own goals, and returning to the page with more confidence.</p><a className="subtle-link" href="https://ashleyloulondon.com/" target="_blank" rel="noreferrer">Read Ashley’s writing blog <ArrowRight size={16} /></a></div></section>

        <section className="single-testimonial"><div className="single-testimonial-inner"><p className="eyebrow"><span className="eyebrow-line" />A client’s perspective</p><blockquote>“Our weekly catch-ups were helpful and she gave comments and helped me stay focused. Never judging, she waited, she encouraged and she listened. And we did it—on time!”</blockquote><p className="testimonial-credit">May Ping Wong <span>· London</span></p></div></section>

        <section className="faq-section section-wrap"><div><p className="eyebrow"><span className="eyebrow-line" />A few helpful details</p><h2>Before you<br /><em>get in touch.</em></h2></div><div className="faq-list"><details><summary>Who is writing coaching for?</summary><p>Ashley works with aspiring writers who may be looking for a writing voice, a sounding board for ideas, more structure, support through writing blocks, or guidance as they navigate publishing.</p></details><details><summary>How do I ask about coaching?</summary><p>Complete Ashley’s coaching application form. She’ll have the information she needs to learn about your writing and next steps.</p></details><details><summary>Can I book a first conversation?</summary><p>Yes. Use the introductory call booking page to find a time to talk and see if it feels like the right fit.</p></details></div></section>

        <section className="coach-final-cta"><div className="coach-final-inner section-wrap"><div><p className="eyebrow"><span className="eyebrow-line" />Whenever you’re ready</p><h2>Let’s get your<br /><em>words moving.</em></h2></div><div><p>Tell Ashley what you’re hoping to write. She’ll be in touch about the next step.</p><ActionLink href={APPLICATION_URL} external>Apply for writing coaching</ActionLink><Link className="back-link" href="/">Back to Rise home <ArrowRight size={15} /></Link></div></div></section>
      </main>
    </SiteLayout>
  );
}
