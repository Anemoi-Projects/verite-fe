"use client";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Partners } from "@/components/Partners";
import { Teams } from "@/components/Team";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

const PHILOSOPHY = [
  {
    title: "Trust by Design",
    text: "Every product is verifiable from origin to end use, ensuring confidence at every step",
  },
  {
    title: "Transparency for All",
    text: "We make every product’s journey visible and accessible empowering brands and consumers with instant  traceability",
  },
  {
    title: "Security Without Compromise",
    text: "Advanced blockchain and AI technology delivers tamper-proof records, making verification reliable, fast, and  secure",
  },
  {
    title: "Sustainability in Action",
    text: "Our solution supports compliance and ethical sourcing, building smarter and greener  commerce for tomorrow",
  },
];

const INDUSTRIES = [
  {
    title: "Textiles",
    image: "/Industry/1.jpg",
  },
  {
    title: "Electronics",
    image: "/Industry/2.jpg",
  },
  {
    title: "Constructions",
    image: "/Industry/3.jpg",
  },
  {
    title: "Adhesives",
    image: "/Industry/4.jpg",
  },
  {
    title: "FMCG",
    image: "/Industry/5.jpg",
  },
  {
    title: "Jewellery",
    image: "/Industry/6.jpg",
  },
];
export default function Home() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <ScaleLoader />
      </div>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const heroImage =
    currentTheme === "light" ? "/hero-light.png" : "/hero-dark.png";
  const contactBGImage =
    currentTheme === "light" ? "/contact-bg-light.jpg" : "/contact-bg-dark.png";
  const industryBGImage =
    currentTheme === "light"
      ? "/industries-bg-light.jpg"
      : "/industries-bg-dark.jpg";

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
      <Header />

      {/* Hero Section START */}
      <section
        className="px-10 py-32 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-7xl text-center">Trust, Verified</h1>
        <h1 className="text-7xl text-center mb-5 leading-none pb-2 bg-clip-text text-transparent bg-[linear-gradient(to_right,#714DFF_0%,#9C83FF_31%,#E151FF_78%,#FFF759_96%)]">
          From Origin to Ownership
        </h1>
        <p className="text-2xl text-center mb-5 font-barlow">
          True ownership, verified by technology
        </p>
        <Button className="flex flex-row gap-x-3 items-center theme-button">
          <span>View App</span>
          <ArrowRight size={20} />
        </Button>
      </section>
      {/* Hero Section END */}

      {/* DPP START */}
      <section className="px-10 py-12">
        <h1 className="text-5xl text-center mb-5">DPP At Your Fingertips</h1>
        <p className="text-lg text-center  mb-10">
          Verite is transforming trust for the digital age. Our secure,
          blockchain-powered product passports  guarantee authenticity,
          compliance, and sustainability — eliminating counterfeiting and
          bringing  seamless transparency to global supply chains. Every product
          tells its true story, empowering brands and  consumers to verify
          origin, ownership, and ethics with a single scan.
        </p>
        <Button
          className={"flex flex-row items-center gap-3 mx-auto theme-button"}
        >
          <span>Talk to a DPP Expert</span>
          <ArrowRight size={20} />
        </Button>
      </section>
      {/* DPP END */}

      {/* Our Story START */}
      <section
        className="px-10 py-20 pb-40"
        style={{
          backgroundImage: `url('/story-dark.jpg')`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-1/2 text-center text-white">
          <h1 className="text-5xl mb-8">Our Story</h1>

          <p className="text-lg mb-3">
            At Verite, our founders united decades of expertise in
            counterfeiting prevention and product  authentication after
            witnessing the escalating risks and sophistication of fraud
            worldwide.
          </p>
          <p className="text-lg mb-3">
            From  sportswear to jewellery, brands have trusted us to protect
            identities and verify the truth behind global goods.
          </p>
          <p className="text-lg mb-3">
            Our mission is to raise the standard for transparency and empower
            brands and consumers alike to  demand authenticity at every step.
          </p>
          <p className="text-lg mb-3">
            In partnership with industry leaders, we set new benchmarks for
            trust,  ethics, and innovation across the supply chain.
          </p>
        </div>
      </section>
      {/* Our Story END */}

      {/* Project Philosophy START */}
      <section id="project-philosophy" className="px-10 py-12">
        <h1 className="text-5xl text-center ">Our Philosophy</h1>

        <div className="flex items-center justify-between gap-10 mt-8">
          <div className="w-2/5 space-y-5">
            {PHILOSOPHY.map((item, i) => (
              <div
                key={`philosophy-${i}`}
                className={cn(
                  `pb-5 ${i < PHILOSOPHY.length - 1 && "border-b"}`
                )}
              >
                <h5 className="text-2xl mb-2">{item?.title}</h5>
                <p className="text-base">{item?.text}</p>
              </div>
            ))}
          </div>
          <div className="w-1/2 relative h-[600px]">
            <Image src={"/lock.jpg"} fill alt="xrp-gold" />
          </div>
        </div>
      </section>
      {/* Project Philosophy END */}

      {/* Partners START */}
      <section className="px-10 py-12">
        <p className="text-3xl text-center uppercase">
          Powered by leading partners
        </p>
        <p className="text-base text-center">
          world-class AI and blockchain for next-generation product verification
        </p>
        <Partners />
      </section>
      {/* Partners END */}

      {/* Solution START */}
      <section className="px-10 py-12" id="solution">
        <div className="flex justify-center">
          <span className="text-[#D1AAD7] uppercase rounded-full bg-white/5 tracking-widest px-8 py-2 border">
            Solution
          </span>
        </div>
        <h1 className="mt-5 text-5xl text-center">
          Creating a Digital Product Passport
        </h1>
        <p className="text-xl text-center mt-3 text-slate-400 dark:text-[#D1D5DB]">
          Nullam euismod, nisl non dignissim fringilla, erat felis dictum
          ligula, vel luctus massa odio ac dolor
        </p>
        <div className="bg-gray-50 dark:bg-white/5 py-10 rounded-md border mt-10 flex items-center justify-between">
          <div className="relative w-3/5 aspect-auto">
            <img src="/unique.jpg" alt="XRP" className="object-contain" />
          </div>
          <div className="px-10 w-2/5">
            <h1 className="text-4xl mb-2">Unique</h1>
            <p className="text-base text-gray-400 mb-8">
              Nullam euismod, nisl non dignissim fringilla
            </p>
            <p className="text-base mb-8">
              Every product receives a unique digital passport, securely
              recorded and tracked with blockchain.
            </p>
            <Button className={"flex gap-x-3 items-center theme-button"}>
              <span>Authenticate Your Products</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-white/5 py-10 rounded-md border flex items-center justify-between">
          <div className="px-10 w-2/5">
            <h1 className="text-4xl mb-2">Verified</h1>
            <p className="text-base text-gray-400 mb-8">
              Nullam euismod, nisl non dignissim fringilla
            </p>
            <p className="text-base mb-8">
              Instant verification for any item, anywhere, by brands and
              consumers.
            </p>
            <Button className={"flex gap-x-3 items-center theme-button"}>
              <span>Authenticate Your Products</span>
              <ArrowRight size={20} />
            </Button>
          </div>
          <div className="relative w-3/5 aspect-auto">
            <img
              src="/verify.jpg"
              alt="XRP"
              className="object-contain ml-auto"
            />
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-white/5 py-10 rounded-md border flex items-center justify-between">
          <div className="relative w-3/5 aspect-auto">
            <img src="/laptop.jpg" alt="XRP" className="object-contain" />
          </div>
          <div className="px-10 w-2/5">
            <h1 className="text-4xl mb-2">Supply Chain</h1>
            <p className="text-base text-gray-400 mb-8">
              Nullam euismod, nisl non dignissim fringilla
            </p>
            <p className="text-base mb-8">
              Sustainable, compliant, and transparent supply chains across
              industries
            </p>
            <Button className={"flex gap-x-3 items-center theme-button"}>
              <span>Authenticate Your Products</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>
      {/* Solution END */}

      {/* Industries START */}
      <section
        className="px-10 py-20 pt-28 dark:pt-12 xl:pt-48"
        style={{
          backgroundImage: `url(${industryBGImage})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" flex  justify-center">
          <span className="font-barlow  text-5xl text-center">
            Industries We Serve
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5 gap-y-10 w-full xl:max-w-4/5 mx-auto mt-12">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="box-item col-span-3 lg:col-span-1 aspect-square cursor-pointer"
            >
              <div className="flip-box h-full">
                <div
                  className="flip-box-front p-8 h-full text-center bg-amber-100"
                  style={{ backgroundImage: `url(${ind.image})` }}
                >
                  <div className="inner color-white">
                    <h3 className="flip-box-header text-white text-5xl">
                      {ind.title}
                    </h3>
                  </div>
                </div>
                <div
                  className="flip-box-back p-8 h-full text-center bg-amber-100"
                  style={{ backgroundImage: `url(${ind.image})` }}
                >
                  <div className="inner color-white text-white text">
                    <p>A short sentence describing this callout is.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Industries END */}

      {/* Teams START */}
      <section className="px-10 py-12" id="team">
        <div className="flex justify-center">
          <span className="text-[#D1AAD7] uppercase rounded-full bg-white/5 tracking-widest px-8 py-2 border">
            TEAM
          </span>
        </div>
        <h1 className="mt-5 text-5xl text-center">The Architects</h1>
        <p className="text-xl text-center mt-3 text-slate-400 dark:text-[#D1D5DB]">
          Meet the innovators redefining trust and transparency in global
          commerce
        </p>
        <Teams />
      </section>
      {/* Teams END */}

      {/* Faq START */}
      <section className="px-10 py-12" id="faq">
        <h1 className="text-5xl text-center">Got Questions?</h1>
        <FAQSection />
      </section>
      {/* Faq END */}

      {/* Contact Us START */}
      <section
        id="contact"
        className="px-10 py-20 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${contactBGImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-3/5">
          <h1 className="text-7xl text-center">
            The Authenticity of your products{" "}
            <span className="text-7xl mb-5 leading-none pb-2 bg-clip-text text-transparent bg-[linear-gradient(to_right,#714DFF_0%,#9C83FF_31%,#E151FF_78%,#FFF759_96%)]">
              starts here.
            </span>
          </h1>
          <div className="flex justify-center">
            <Button
              className={
                "flex flex-row gap-x-3 items-center mt-16 theme-button"
              }
              onClick={() => setOpenContactForm(true)}
            >
              <span>Connect With Us</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
        <ContactForm open={openContactForm} setOpen={setOpenContactForm} />
      </section>
      {/* Contact Us END */}

      {/* Footer START */}
      <Footer />
      {/* Footer END */}
    </div>
  );
}
