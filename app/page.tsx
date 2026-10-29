'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  Coins,
  Crown,
  Gem,
  Headphones,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Trophy,
  X,
  Zap,
} from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/src/config/site';

const games = [
  {
    image: '/images/slot-machine.jpg',
    title: 'স্লট মেশিন',
    text: 'রঙিন রিল, লাকি সিম্বল ও বড় জয়ের উত্তেজনা।',
    tone: 'purple',
    link: '#',
  },
  {
    image: '/images/cards-dice.jpg',
    title: 'কার্ড ও ডাইস',
    text: 'A, K, Q, J এবং চকচকে ডাইসের ক্লাসিক টেবিল।',
    tone: 'green',
    link: '#',
  },
  {
    image: '/images/roulette.jpg',
    title: 'রুলেট টেবিল',
    text: 'সোনালি চাকায় ভাগ্যের প্রতিটি ঘূর্ণন।',
    tone: 'blue',
    link: '#',
  },
];

const ExternalLink = ({
  children,
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <a
    href={siteConfig.casinoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    onClick={onClick}
  >
    {children}
  </a>
);

function Brand() {
  return (
    <a className="brand" href="#home">
      <span className="brand-crown">♛</span>
      <span>
        Betwin67
      </span>
    </a>
  );
}
function SparkleField() {
  return (
    <div className="sparkle-field" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}
function TreasureArt({ type = 'chest' }: { type?: string }) {
  return (
    <div
      className={`treasure-art ${type}`}
      role="img"
      aria-label={
        type === 'chest'
          ? 'সোনার মুদ্রায় ভরা জাদুর গুপ্তধনের বাক্স'
          : 'রঙিন জাদুর ক্রিস্টাল ও সোনার গুপ্তধন'
      }
    >
      <div className="art-moon" />
      <div className="art-spark">✦</div>
      <div className="art-object">{type === 'chest' ? '♛' : '◆'}</div>
      <div className="art-coins">● ● ●</div>
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [seconds, setSeconds] = useState(15);
  const cancelledRef = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem('registration-reminder-dismissed')) return;
    const timer = window.setInterval(
      () =>
        setSeconds((value) => {
          if (value <= 1) {
            window.clearInterval(timer);
            if (!cancelledRef.current) {
              setReminder(true);
              window.location.href = siteConfig.casinoUrl;
            }
            return 0;
          }
          return value - 1;
        }),
      1000,
    );
    return () => window.clearInterval(timer);
  }, []);
  const dismissReminder = () => {
    cancelledRef.current = true;
    sessionStorage.setItem('registration-reminder-dismissed', 'true');
    setReminder(false);
  };

  return (
    <main className="site-shell">
      {/* navbar */}
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="প্রধান নেভিগেশন"
          >
            <a href="#games" onClick={() => setMenuOpen(false)}>
              গেমসমূহ
            </a>
            <a href="#jackpot" onClick={() => setMenuOpen(false)}>
              জ্যাকপট
            </a>
            <a href="#world" onClick={() => setMenuOpen(false)}>
              ফ্যান্টাসি জগৎ
            </a>
            <a href="#rewards" onClick={() => setMenuOpen(false)}>
              পুরস্কার
            </a>
            <a
              className="nav-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle /> WhatsApp
            </a>
            <ExternalLink className="nav-cta">
              খেলা শুরু করুন <ArrowRight />
            </ExternalLink>
          </nav>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {/* hero */}
      <section id="home" className="hero-section">
        <SparkleField />
        <div className="countdown-pill" role="status">
          <span>রেজিস্ট্রেশন রিডাইরেক্ট</span>
          <strong>{seconds} সেকেন্ড</strong>
          <button onClick={dismissReminder}>বাতিল করুন</button>
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">
              <Crown /> বাংলাদেশের প্রিমিয়াম গেমিং জগৎ
            </div>
            <h1>
              আপনার ভাগ্যকে <span>উজ্জ্বল</span> করুন
            </h1>
            <p>
              স্বর্ণের প্রাসাদ, জাদুর আলো আর অসীম উত্তেজনার এক নতুন জগতে প্রবেশ
              করুন। আপনার বড় জয় এখান থেকেই শুরু।
            </p>
            <div className="hero-actions">
              <ExternalLink className="button button-gold">
                এখনই খেলা শুরু করুন <ArrowRight />
              </ExternalLink>
              <a
                className="button button-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> WhatsApp-এ যোগাযোগ করুন
              </a>
              <a className="button button-dark" href="#games">
                জগতটি ঘুরে দেখুন <ChevronDown />
              </a>
            </div>
            <div className="hero-trust">
              <ShieldCheck /> নিরাপদ প্ল্যাটফর্ম <span /> <Gem /> বিশেষ পুরস্কার{' '}
              <span /> <Headphones /> ২৪/৭ সাপোর্ট
            </div>
          </div>
          {/* <div className="hero-art">
            <div className="hero-halo" />
            <div className="hero-palace">
              <div className="palace-roof">♛</div>
              <div className="palace-tower" />
              <div className="palace-door">$</div>
              <div className="palace-lights">◆ ◆ ◆ ◆ ◆</div>
            </div>
            <img
              src="/hero.jpg"
              alt="সোনালি আলোয় আলোকিত কল্পনার ক্যাসিনো প্রাসাদ"
            />
            <div className="coin coin-one">৳</div>
            <div className="coin coin-two">$</div>
            <div className="coin coin-three">◆</div>
            <div className="hero-tag">
              <Sparkles />{' '}
              <span>
                আজকের <b>মেগা জ্যাকপট</b>
                <small>জয়ের অপেক্ষায়</small>
              </span>
            </div>
          </div> */}
        </div>
        <a className="scroll-cue" href="#games">
          আরও আবিষ্কার করুন <ChevronDown />
        </a>
      </section>

      {/* just lekha */}
      <div className="ticker">
        <div>✦ প্রতিদিন নতুন জয় ✦</div>
        <div>১৮+ দায়িত্বশীলভাবে খেলুন</div>
        <div>✦ নিরাপদ ও সুরক্ষিত ✦</div>
        <div>বিশেষ বোনাস এখনই</div>
      </div>

      {/* game card */}
      <section className="games-section" id="games">
        <div className="games-container">
          <div className="games-heading">
            <div className="heading-decoration">
              <span></span>
              <span className="crown">♛</span>
              <span></span>
            </div>

            <p className="section-eyebrow">PREMIUM SELECTION</p>

            <h2>আমাদের জনপ্রিয় গেমগুলো</h2>

            <p className="section-description">
              আপনার পছন্দের গেমটি বেছে নিন এবং উপভোগ করুন আকর্ষণীয় গেমিং
              অভিজ্ঞতা।
            </p>
          </div>

          <div className="game-grid">
            {games.map((game) => (
              <article className={`game-card ${game.tone}`} key={game.title}>
                {/* Image on top */}
                <div className="game-art">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="game-image"
                  />

                  <div className="image-overlay"></div>

                  <span className="image-corner">✦</span>
                </div>

                {/* Description below image */}
                <div className="game-content">
                  <span className="card-label">প্রিমিয়াম সিলেকশন</span>

                  <h3>{game.title}</h3>

                  <div className="title-underline"></div>

                  <p className="game-description">{game.text}</p>

                  <a
                    href={game.link}
                    className="text-link"
                    aria-label={`${game.title} সম্পর্কে আরও দেখুন`}
                  >
                    এখনই দেখুন
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* jackpot */}
      <section id="jackpot" className="jackpot-section">
        <div className="jackpot-overlay" />

        <div className="jackpot-content">
          <div className="jackpot-badge">
            <Coins size={19} />
            <span>আজকের বিশেষ আকর্ষণ</span>
          </div>

          <p className="jackpot-kicker">THE ULTIMATE TREASURE</p>

          <h2>
            আপনার ভাগ্য,
            <br />
            আপনার <em>জ্যাকপট!</em>
          </h2>

          <p className="jackpot-description">
            সোনালি ধনভাণ্ডার, ঝলমলে ক্রিস্টাল আর রাজকীয় ট্রেজারের এক অসাধারণ
            জগৎ। আবিষ্কার করুন আমাদের বিশেষ গেমিং অভিজ্ঞতা।
          </p>

          <div className="jackpot-prize-card">
            <div className="prize-topline">
              <span className="prize-star">✦</span>
              <span>MEGA JACKPOT</span>
              <span className="prize-star">✦</span>
            </div>

            <div className="prize-amount">৳ ৯৯,৯৯,৯৯৯</div>

            <div className="prize-bottomline">
              <span />
              <small>বিশেষ জ্যাকপট</small>
              <span />
            </div>
          </div>

          <a
            href="#"
            className="jackpot-cta"
            aria-label="অফিশিয়াল ওয়েবসাইট দেখুন"
          >
            <span>আমাদের ওয়েবসাইট দেখুন</span>
            <ArrowRight size={21} />
          </a>

          <div className="jackpot-footnote">
            <span className="footnote-star">✧</span>
            গেমের নিয়ম ও প্রযোজ্য শর্তাবলি অনুসরণ করুন
          </div>
        </div>

        <div className="jackpot-bottom-glow" />
      </section>

      {/* jadur jogot */}
      <section id="world" className="world-section">
        <div className="world-container">
          {/* SUBSECTION 1: FOUR IMAGE GALLERY */}
          <div className="world-gallery-section">
            <div className="world-gallery-heading">
              <span className="world-eyebrow">✦ EXPLORE THE FANTASY ✦</span>
              <h2>
                এক জাদুকরী <em>বিশ্বের</em> আবিষ্কার
              </h2>
              <p>রহস্য, রোমাঞ্চ আর কল্পনার এক অসাধারণ জগৎ।</p>
            </div>

            <div className="world-gallery">
              <article className="world-gallery-card">
                <img
                  src="/images/treasure-island.jpg"
                  alt="জলপ্রপাত ও গুপ্তধনে ভরা Treasure Island"
                  loading="lazy"
                />
                <div className="world-image-overlay" />
                <div className="world-image-caption">
                  <span>01 / DISCOVER</span>
                  <h3>ট্রেজার আইল্যান্ড</h3>
                  <p>অজানা দ্বীপের রহস্য</p>
                </div>
                <span className="world-image-symbol">✦</span>
              </article>

              <article className="world-gallery-card">
                <img
                  src="/images/golden-castle.jpg"
                  alt="আলোকিত সোনালি ফ্যান্টাসি দুর্গ"
                  loading="lazy"
                />
                <div className="world-image-overlay" />
                <div className="world-image-caption">
                  <span>02 / KINGDOM</span>
                  <h3>গোল্ডেন ক্যাসেল</h3>
                  <p>রাজকীয় সৌন্দর্যের জগৎ</p>
                </div>
                <span className="world-image-symbol">♛</span>
              </article>

              <article className="world-gallery-card">
                <img
                  src="/images/dragon-kingdom.jpg"
                  alt="সোনালি আলোয় একটি ফ্যান্টাসি ড্রাগন"
                  loading="lazy"
                />
                <div className="world-image-overlay" />
                <div className="world-image-caption">
                  <span>03 / LEGEND</span>
                  <h3>ড্রাগনের রাজ্য</h3>
                  <p>কিংবদন্তির এক জগৎ</p>
                </div>
                <span className="world-image-symbol">♢</span>
              </article>

              <article className="world-gallery-card">
                <img
                  src="/images/mystery-portal.jpg"
                  alt="রহস্যময় আলোয় ঘেরা জাদুর পোর্টাল"
                  loading="lazy"
                />
                <div className="world-image-overlay" />
                <div className="world-image-caption">
                  <span>04 / MYSTERY</span>
                  <h3>মিস্ট্রি পোর্টাল</h3>
                  <p>রহস্যের ওপারে যাত্রা</p>
                </div>
                <span className="world-image-symbol">✧</span>
              </article>
            </div>
          </div>

          {/* SUBSECTION 2: DESCRIPTION */}
          <div className="world-info-section">
            <div className="world-info-decoration">
              <span />
              <span className="world-info-star">✦</span>
              <span />
            </div>

            <span className="world-eyebrow">একটি জাদুর জগৎ</span>

            <h2>
              যেখানে প্রতিটি <em>মুহূর্ত</em>
              <br className="world-desktop-break" />
              নতুন গল্প বলে
            </h2>

            <p className="world-description">
              প্রাচীন মন্দির থেকে স্বর্ণের দুর্গ, রহস্যময় পোর্টাল থেকে
              কিংবদন্তির ড্রাগন—প্রতিটি দৃশ্য তৈরি করে এক অনন্য ফ্যান্টাসি
              অভিজ্ঞতা। আবিষ্কার করুন কল্পনা, সৌন্দর্য আর রোমাঞ্চে ভরা এক নতুন
              জগৎ।
            </p>

            <div className="world-features">
              <div className="world-feature">
                <div className="world-feature-icon">
                  <Zap size={23} />
                </div>
                <div>
                  <h3>আধুনিক অভিজ্ঞতা</h3>
                  <p>আকর্ষণীয় ভিজ্যুয়াল ও মসৃণ ইন্টারফেস</p>
                </div>
              </div>

              <div className="world-feature">
                <div className="world-feature-icon">
                  <Trophy size={23} />
                </div>
                <div>
                  <h3>বিশেষ ফিচার</h3>
                  <p>আবিষ্কার করুন বিভিন্ন গেম ও ফিচার</p>
                </div>
              </div>

              <div className="world-feature">
                <div className="world-feature-icon">
                  <ShieldCheck size={23} />
                </div>
                <div>
                  <h3>সহায়তা ও তথ্য</h3>
                  <p>প্ল্যাটফর্ম সম্পর্কে জানুন ও যোগাযোগ করুন</p>
                </div>
              </div>
            </div>

            <a
              href="https://your-website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="world-cta"
            >
              <span>আমাদের ওয়েবসাইট দেখুন</span>
              <ArrowRight size={20} />
            </a>

            <p className="world-disclaimer">
              প্রযোজ্য নিয়ম ও শর্তাবলি অনুসরণ করুন।
            </p>
          </div>
        </div>
      </section>

      {/* reward */}

      <section id="rewards" className="rewards-section">
        <div className="rewards-container">
          {/* Section Heading */}
          <div className="rewards-heading">
            <span className="rewards-eyebrow">
              ✦ GOLDEN REWARDS COLLECTION ✦
            </span>

            <h2>
              আবিষ্কার করুন <em>বিশেষ রিওয়ার্ডস</em>
            </h2>

            <p>
              প্রিমিয়াম থিম, আকর্ষণীয় অফার এবং বিশেষ সুবিধার এক অনন্য কালেকশন।
            </p>
          </div>

          {/* Six Reward Cards */}
          <div className="rewards-grid">
            <article className="reward-card gold">
              <div className="reward-image">
                <img
                  src="/images/reward-treasure.jpg"
                  alt="সোনালি ট্রেজার চেস্ট"
                  loading="lazy"
                />
                <span className="reward-tag">TREASURE</span>
              </div>

              <div className="reward-content">
                <span className="reward-number">01 / GOLD</span>
                <h3>গোল্ডেন ট্রেজার</h3>
                <p>
                  সোনালি ধনভাণ্ডার থেকে অনুপ্রাণিত একটি রাজকীয় রিওয়ার্ড
                  অভিজ্ঞতা।
                </p>
                <div className="reward-detail">
                  <span>অফারের ধরন</span>
                  <strong>বিশেষ প্রমোশন</strong>
                </div>
              </div>
            </article>

            <article className="reward-card purple">
              <div className="reward-image">
                <img
                  src="/images/reward-crystals.jpg"
                  alt="বেগুনি ও নীল ক্রিস্টাল রত্ন"
                  loading="lazy"
                />
                <span className="reward-tag">CRYSTAL</span>
              </div>

              <div className="reward-content">
                <span className="reward-number">02 / GEMS</span>
                <h3>ক্রিস্টাল কালেকশন</h3>
                <p>
                  ঝলমলে রত্ন ও জাদুকরী ভিজ্যুয়ালের মাধ্যমে উপভোগ করুন বিশেষ
                  থিম।
                </p>
                <div className="reward-detail">
                  <span>অফারের ধরন</span>
                  <strong>কালেকশন ইভেন্ট</strong>
                </div>
              </div>
            </article>

            <article className="reward-card blue">
              <div className="reward-image">
                <img
                  src="/images/reward-crown.jpg"
                  alt="সোনালি রাজকীয় মুকুট"
                  loading="lazy"
                />
                <span className="reward-tag">ROYAL</span>
              </div>

              <div className="reward-content">
                <span className="reward-number">03 / CROWN</span>
                <h3>রয়্যাল এক্সপেরিয়েন্স</h3>
                <p>
                  রাজকীয় ডিজাইন ও প্রিমিয়াম ভিজ্যুয়াল নিয়ে উপভোগ করুন বিশেষ
                  অভিজ্ঞতা।
                </p>
                <div className="reward-detail">
                  <span>অফারের ধরন</span>
                  <strong>VIP ফিচার</strong>
                </div>
              </div>
            </article>

            <article className="reward-card pink">
              <div className="reward-image">
                <img
                  src="/images/reward-mystery.jpg"
                  alt="জাদুকরী আলোয় রহস্যময় গিফট বক্স"
                  loading="lazy"
                />
                <span className="reward-tag">MYSTERY</span>
              </div>

              <div className="reward-content">
                <span className="reward-number">04 / SURPRISE</span>
                <h3>মিস্ট্রি গিফট</h3>
                <p>
                  রহস্যময় গিফট বক্সের থিমে সাজানো একটি চমকপ্রদ প্রমোশনাল
                  ক্যাটাগরি।
                </p>
                <div className="reward-detail">
                  <span>অফারের ধরন</span>
                  <strong>বিশেষ ইভেন্ট</strong>
                </div>
              </div>
            </article>

            <article className="reward-card green">
              <div className="reward-image">
                <img
                  src="/images/reward-coins.jpg"
                  alt="ঝলমলে সোনালি কয়েনের স্তূপ"
                  loading="lazy"
                />
                <span className="reward-tag">GOLD COINS</span>
              </div>

              <div className="reward-content">
                <span className="reward-number">05 / TREASURE</span>
                <h3>গোল্ডেন কালেকশন</h3>
                <p>
                  গোল্ডেন কয়েন ও ট্রেজার-অনুপ্রাণিত আকর্ষণীয় ভিজ্যুয়াল
                  অভিজ্ঞতা।
                </p>
                <div className="reward-detail">
                  <span>অফারের ধরন</span>
                  <strong>প্রমোশনাল ইভেন্ট</strong>
                </div>
              </div>
            </article>

            <article className="reward-card orange">
              <div className="reward-image">
                <img
                  src="/images/reward-vip.jpg"
                  alt="রাজকীয় সোনালি VIP ট্রেজার রুম"
                  loading="lazy"
                />
                <span className="reward-tag">EXCLUSIVE</span>
              </div>

              <div className="reward-content">
                <span className="reward-number">06 / EXCLUSIVE</span>
                <h3>এক্সক্লুসিভ ক্লাব</h3>
                <p>
                  বিশেষ ডিজাইন, প্রিমিয়াম পরিবেশ ও এক্সক্লুসিভ ফিচারের কালেকশন।
                </p>
                <div className="reward-detail">
                  <span>অফারের ধরন</span>
                  <strong>মেম্বারশিপ ফিচার</strong>
                </div>
              </div>
            </article>
          </div>

          <p className="rewards-note">
            অফার, যোগ্যতা, সীমাবদ্ধতা ও প্রযোজ্য শর্তাবলি সম্পর্কে বিস্তারিত
            তথ্য যাচাই করে নিন।
          </p>
        </div>
      </section>

      {/* contact section */}
      {/* <section className="contact-section">
        <div className="container contact-card">
          <div>
            <p className="eyebrow">আজই শুরু করুন</p>
            <h2>
              আপনার জয়ের গল্প <em>লিখুন</em>
            </h2>
            <p>গোল্ডেন উইনের জাদুর জগৎ আপনার জন্য প্রস্তুত।</p>
          </div>
          <div className="contact-actions">
            <ExternalLink className="button button-gold">
              Visit Our Website <ArrowRight />
            </ExternalLink>
            <a
              className="button button-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle /> হোয়াটসঅ্যাপে যোগাযোগ
            </a>
          </div>
        </div>
      </section> */}
      {/* contact section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <div className="contact-glow contact-glow-one"></div>
            <div className="contact-glow contact-glow-two"></div>

            <div className="contact-decoration">
              <span>✦</span>
              <span>◆</span>
              <span>✧</span>
            </div>

            <div className="contact-content">
              <div className="contact-label">
                <span className="contact-label-icon">✦</span>
                আপনার নতুন অভিযাত্রা শুরু হোক আজই
              </div>

              <h2>
                প্রবেশ করুন
                <br />
                <em>সোনালি এক জাদুর জগতে!</em>
              </h2>

              <p>
                উপভোগ করুন বিনোদনের এক অসাধারণ জগৎ, রোমাঞ্চকর অভিজ্ঞতা এবং
                আকর্ষণীয় সব রিওয়ার্ড। আপনার নতুন অভিজ্ঞতার শুরু হোক গোল্ডেন
                উইনের সঙ্গে!
              </p>
            </div>

            <div className="contact-actions">
              <ExternalLink className="button button-gold">
                আমাদের ওয়েবসাইট ভিজিট করুন <ArrowRight />
              </ExternalLink>

              <a
                className="button button-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> হোয়াটসঅ্যাপে যোগাযোগ
              </a>
            </div>

            <div className="contact-bottom-line"></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <Brand />
          <div className="footer-links">
            <a href="#games">গেমসমূহ</a>
            <a href="#jackpot">জ্যাকপট</a>
            <a href="#world">ফ্যান্টাসি জগৎ</a>
            <a href="#rewards">রিওয়ার্ড</a>
            <ExternalLink>অফিশিয়াল ওয়েবসাইট</ExternalLink>
          </div>
          <div className="footer-support">
            <CircleHelp /> ২৪/৭ পাশে আছি
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Betwin67 সর্বস্বত্ব সংরক্ষিত।
          </span>
          <span>১৮+ | দায়িত্বশীলভাবে খেলুন</span>
        </div>
      </footer>

      {reminder && (
        <div className="reminder-backdrop" role="presentation">
          <section
            className="reminder-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reminder-title"
          >
            <button
              className="reminder-close"
              onClick={dismissReminder}
              aria-label="বন্ধ করুন"
            >
              <X />
            </button>
            <div className="reminder-icon">
              <Sparkles />
            </div>
            <p className="eyebrow">আপনার জন্য বিশেষ আমন্ত্রণ</p>
            <h2 id="reminder-title">
              আপনার ভাগ্য <em>অপেক্ষায়</em>
            </h2>
            <p>গোল্ডেন উইনের অফিসিয়াল ওয়েবসাইটে গিয়ে খেলা শুরু করুন।</p>
            <ExternalLink
              className="button button-gold"
              onClick={dismissReminder}
            >
              রেজিস্ট্রেশনে যান <ArrowRight />
            </ExternalLink>
            <button className="stay-button" onClick={dismissReminder}>
              এই ওয়েবসাইটে থাকুন
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
