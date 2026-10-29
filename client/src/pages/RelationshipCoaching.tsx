import { ArrowRight, Check, Heart, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import SiteLayout, { ActionLink } from "../components/SiteLayout";
import { PageMeta } from "../components/PageMeta";

const APPLICATION_URL = "https://www.123formbuilder.com/form-5237360/ask-coralie-application-form";
const CALL_URL = "https://risemanagementandcoaching.com/schedule-a-call/";

export default function RelationshipCoaching() {
  return (
    <SiteLayout>
      <PageMeta title="Relationship Coaching with Coralie | Rise" description="Relationship and intimacy coaching with Coralie Fox for singles and couples seeking confidence, deeper connection, and a more fulfilling intimate life." canonicalUrl="https://risemanagementandcoaching.com/coralie/" imageUrl="https://risemanagementandcoaching.com/wp-content/uploads/2020/01/pic-for-website-scaled.jpeg" />
      <main id="main-content" className="coach-page relationship-page">
        <section className="coach-hero section-wrap">
          <div className="coach-hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />Relationship &amp; intimacy coaching · with Coralie</p>
            <h1>Feel more at home<br /><em>in your relationships.</em></h1>
            <p className="coach-lead">When connection feels distant—or confidence feels out of reach—honest support can help you see a way forward.</p>
            <div className="hero-actions"><ActionLink href={APPLICATION_URL} external>Apply to work with Coralie</ActionLink><ActionLink href={CALL_URL} variant="text" external>Book a conversation</ActionLink></div>
            <p className="coach-hero-note"><Check size={15} /> One-to-one · Six weeks · Online via Zoom</p>
          </div>
          <div className="coach-hero-photo relationship-photo"><img src={`${import.meta.env.BASE_URL}images/coralie.jpeg`} alt="Coralie Fox, relationship and intimacy coach" fetchPriority="high" /><div className="photo-stamp photo-stamp-coralie"><span>RELATIONSHIP</span><span>&amp;</span><span>INTIMACY COACH</span></div></div>
        </section>

        <section className="recognition-strip"><div className="recognition-inner"><HeartHandshake size={20} /><span>Global transformational intimacy coach</span><span className="recognition-separator" /><span>Relationship &amp; sex columnist</span></div></section>

        <section className="coach-content section-wrap"><div className="coach-section-heading"><p className="eyebrow"><span className="eyebrow-line" />A space to be honest</p><h2>More confidence.<br /><em>More connection.</em></h2></div><div className="coach-content-body"><p className="large-copy">The relationship you have with yourself and with others can shape how you feel in every part of life. Coaching gives you room to say what’s really going on and explore what a more fulfilling connection could look like.</p><p>Coralie Fox is a global transformational intimacy coach, relationship and sex columnist, and model. She has supported people around the world through her columns and one-to-one coaching, bringing a frank, no-nonsense and down-to-earth perspective.</p></div></section>

        <section className="audience-section"><div className="audience-inner section-wrap"><div className="audience-heading"><p className="eyebrow"><span className="eyebrow-line" />Is this for you?</p><h2>Whether you’re<br /><em>single or together.</em></h2><p>Coralie works with individuals and couples who want to understand what’s missing and take a thoughtful next step.</p><ActionLink href={APPLICATION_URL} external>Start with an application</ActionLink></div><div className="audience-cards"><article className="audience-card"><span className="audience-icon"><Heart size={20} /></span><h3>If you’re looking for a relationship</h3><p>You may be shy about approaching someone, feel uncertain of your worth, or find it hard to express who you are when meeting someone new.</p><p>You might be missing intimacy or a deeper connection, or want a safe space to talk about your sexual confidence.</p></article><article className="audience-card"><span className="audience-icon"><MessageCircle size={20} /></span><h3>If you’re in a relationship</h3><p>You may feel stuck, distant, or under-appreciated. Perhaps the passion has faded or it’s hard to talk about what you want.</p><p>Coaching can give you space to work through frustrations and explore ways to feel closer and more connected.</p></article></div></div></section>

        <section className="programme-section section-wrap"><div className="programme-number">06<span>WEEKS</span></div><div className="programme-copy"><p className="eyebrow"><span className="eyebrow-line" />What working together looks like</p><h2>Personal support,<br /><em>shaped around you.</em></h2><p>Coralie offers a one-to-one six-week coaching programme, tailored to each person’s needs. Sessions take place online via Zoom.</p><div className="programme-points"><span><Check size={15} /> Individual coaching</span><span><Check size={15} /> Online via Zoom</span><span><Check size={15} /> Tailored to your needs</span></div><ActionLink href={APPLICATION_URL} external>Apply for coaching</ActionLink></div></section>

        <section className="coralie-about"><div className="about-inner section-wrap"><div className="about-copy"><p className="eyebrow"><span className="eyebrow-line" />A little about Coralie</p><h2>Warm, candid,<br /><em>and in your corner.</em></h2><p>Coralie’s years of experience writing about relationships, sex, and intimacy—alongside the life challenges she has navigated herself—inform her open, direct approach.</p><p>She believes people can feel more confident and fulfilled when they have healthier relationships and feel valued. Her coaching offers a confidential space to talk, reflect, and decide what progress means for you.</p></div><div className="about-image coralie-about-image"><img src={`${import.meta.env.BASE_URL}images/coralie.jpeg`} alt="Coralie Fox outdoors in London" loading="lazy" /><div className="image-caption"><ShieldCheck size={15} /> Confidential, no-obligation application</div></div></div></section>

        <section className="single-testimonial"><div className="single-testimonial-inner"><p className="eyebrow"><span className="eyebrow-line" />A client’s perspective</p><blockquote>“Coralie helped give me clarity and to understand my own thoughts. Thank you for the confidence and support throughout.”</blockquote><p className="testimonial-credit">Charlene <span>· Nottingham</span></p></div></section>

        <section className="faq-section section-wrap"><div><p className="eyebrow"><span className="eyebrow-line" />A few helpful details</p><h2>Before you<br /><em>get in touch.</em></h2></div><div className="faq-list"><details><summary>Is this for singles or couples?</summary><p>Coralie works with people seeking a relationship and people who are already in a committed relationship. Her six-week offer is one-to-one coaching, tailored to each individual’s needs.</p></details><details><summary>How are sessions delivered?</summary><p>Sessions take place online via Zoom.</p></details><details><summary>What happens after I apply?</summary><p>Coralie will review your confidential, no-obligation application and be in touch to let you know if she can support you.</p></details></div></section>

        <section className="coach-final-cta"><div className="coach-final-inner section-wrap"><div><p className="eyebrow"><span className="eyebrow-line" />Whenever you’re ready</p><h2>Take one honest<br /><em>step forward.</em></h2></div><div><p>Share a little about what you’re looking for. Coralie will review your application and get back to you.</p><ActionLink href={APPLICATION_URL} external>Apply to work with Coralie</ActionLink><Link className="back-link" href="%BASE_URL%">Back to Rise home <ArrowRight size={15} /></Link></div></div></section>
      </main>
    </SiteLayout>
  );
}
