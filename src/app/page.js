"use client";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Partners } from "@/components/Partners";
import { Teams } from "@/components/Team";
import { Button } from "@/components/ui/button";
import { cn, findSectionData, findSubSectionData } from "@/lib/utils";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

const SECTION_1_ID = "6916b3a20060bc3acd9af523";
const SECTION_2_ID = "6916b7934e743c109d187ec5";
const SECTION_3_ID = "6916b8d54e743c109d187ec7";
const SECTION_4_ID = "6916cf6c9afb323bcd890702";
const SECTION_5_ID = "6916f3859afb323bcd89070f";
const SECTION_6_ID = "6916f3c89afb323bcd890711";
const SECTION_7_ID = "69195a2c80a03e86002f7f10";
const SECTION_8_ID = "69195e8280a03e86002f7f20";
const SECTION_9_ID = "69195e9d80a03e86002f7f22";
const SECTION_10_ID = "69195f3180a03e86002f7f24";
export default function Home() {
  const { theme } = useTheme();
  const [openContactForm, setOpenContactForm] = useState(false);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPageData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.apiURL}/api/v1/contents/getPages?pageID=69157bf48e24bff6c6e9342f&theme=${theme}`,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        if (response.data.success) {
          setPageData(response.data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPageData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <ScaleLoader color={theme === "light" ? "Black" : "white"} width={10} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
      <Header />

      {/* Hero Section START */}
      <section
        className="px-10 py-32 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${
            findSectionData(SECTION_1_ID, pageData)?.sectionBackground?.[theme]
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl lg:text-7xl text-center">
          {findSectionData(SECTION_1_ID, pageData)?.headline}
        </h1>
        <h1 className="text-3xl lg:text-7xl text-center mb-5 leading-none lg:pb-2 bg-clip-text text-transparent bg-[linear-gradient(to_right,#714DFF_0%,#9C83FF_31%,#E151FF_78%,#FFF759_96%)]">
          {findSectionData(SECTION_1_ID, pageData)?.subHeadline}
        </h1>
        <p className="text-xl lg:text-2xl text-center mb-5 font-barlow">
          {findSectionData(SECTION_1_ID, pageData)?.description}
        </p>
        <Link href={findSectionData(SECTION_1_ID, pageData)?.ctaLink}>
          <Button className="flex flex-row gap-x-3 items-center theme-button">
            <span>{findSectionData(SECTION_1_ID, pageData)?.ctaButton}</span>
            <ArrowRight size={20} />
          </Button>
        </Link>
      </section>
      {/* Hero Section END */}

      {/* DPP START */}
      <section className="px-10 py-12">
        <h1 className="text-3xl lg:text-5xl text-center mb-5">
          {findSectionData(SECTION_2_ID, pageData)?.headline}
        </h1>
        <p className="text-sm lg:text-lg text-center  mb-10">
          {findSectionData(SECTION_2_ID, pageData)?.description}
        </p>
        <Link href={findSectionData(SECTION_2_ID, pageData)?.ctaLink}>
          <Button
            className={"flex flex-row items-center gap-3 mx-auto theme-button"}
          >
            <span>{findSectionData(SECTION_2_ID, pageData)?.ctaButton}</span>
            <ArrowRight size={20} />
          </Button>
        </Link>
      </section>
      {/* DPP END */}

      {/* Our Story START */}
      <section
        className="px-10 py-10 lg:py-20 pb-40"
        style={{
          backgroundImage: `url(${
            findSectionData(SECTION_3_ID, pageData)?.sectionBackground?.[theme]
          }
          )`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full md:3/4 lg:w-1/2 text-center text-white">
          <h1 className="text-3xl lg:text-5xl mb-8">
            {findSectionData(SECTION_3_ID, pageData)?.headline}
          </h1>
          {findSectionData(SECTION_3_ID, pageData)?.subsections?.map(
            (item, index) => (
              <p className="text-base md:text-lg mb-3" key={`story-${index}`}>
                {item?.heading}
              </p>
            )
          )}
        </div>
      </section>
      {/* Our Story END */}

      {/* Project Philosophy START */}
      <section id="project-philosophy" className="px-10 py-12">
        <h1 className="text-3xl lg:text-5xl text-center ">
          {findSectionData(SECTION_4_ID, pageData)?.headline}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-10 mt-8">
          <div className="w-full md:w-2/5 space-y-5">
            {findSectionData(SECTION_4_ID, pageData)?.subsections?.map(
              (item, i) => (
                <div
                  key={`philosophy-${i}`}
                  className={cn(
                    `pb-5 ${
                      i <
                        findSectionData(SECTION_4_ID, pageData)?.subsections
                          .length -
                          1 && "border-b"
                    }`
                  )}
                >
                  <h5 className="text-xl md:text-2xl mb-2">{item?.heading}</h5>
                  <p className="text-sm md:text-base">{item?.subHeading}</p>
                </div>
              )
            )}
          </div>
          <div className="w-full md:w-[55%] relative aspect-square lg:aspect-auto lg:h-[600px]">
            <Image
              src={
                findSectionData(SECTION_4_ID, pageData)?.sectionBackground?.[
                  theme
                ]
              }
              fill
              alt="xrp-gold"
            />
          </div>
        </div>
      </section>
      {/* Project Philosophy END */}

      {/* Partners START */}
      <section className="px-10 py-12">
        <p className="text-xl md:text-3xl text-center uppercase">
          {findSectionData(SECTION_5_ID, pageData)?.headline}
        </p>
        <p className="text-sm lg:text-base text-center">
          {findSectionData(SECTION_5_ID, pageData)?.subHeadline}
        </p>
        <Partners />
      </section>
      {/* Partners END */}

      {/* Solution START */}
      <section className="px-10 py-12" id="solution">
        <div className="flex justify-center">
          <span className="text-[#D1AAD7] uppercase rounded-full bg-white/5 tracking-widest px-8 py-2 border">
            {findSectionData(SECTION_6_ID, pageData)?.headline}
          </span>
        </div>
        <h1 className="mt-5 text-xl md:text-3xl lg:text-5xl text-center">
          {findSectionData(SECTION_6_ID, pageData)?.subHeadline}
        </h1>
        <p className="text-sm md:text-xl text-center mt-3 text-slate-400 dark:text-[#D1D5DB]">
          {findSectionData(SECTION_6_ID, pageData)?.description}
        </p>
        <div className="bg-gray-50 dark:bg-white/5 py-10 rounded-md border mt-10 flex flex-wrap items-center justify-between">
          <div className="relative w-full lg:w-3/5 aspect-auto order-1">
            <img
              src={
                findSubSectionData(
                  "6916f5479afb323bcd890713",
                  findSectionData(SECTION_6_ID, pageData)
                )?.subSectionMedia
              }
              alt="XRP"
              className="object-contain"
            />
          </div>
          <div className="px-5 lg:px-10 w-full lg:w-2/5 order-2">
            <h1 className="mt-3 md:mt-0 text-2xl md:text-4xl mb-2">
              {
                findSubSectionData(
                  "6916f5479afb323bcd890713",
                  findSectionData(SECTION_6_ID, pageData)
                )?.heading
              }
            </h1>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-8">
              {
                findSubSectionData(
                  "6916f5479afb323bcd890713",
                  findSectionData(SECTION_6_ID, pageData)
                )?.subHeading
              }
            </p>
            <p className="text-sm md:text-base mb-4 md:mb-8">
              {
                findSubSectionData(
                  "6916f5479afb323bcd890713",
                  findSectionData(SECTION_6_ID, pageData)
                )?.description
              }
            </p>
            <Link
              href={
                findSubSectionData(
                  "6916f5479afb323bcd890713",
                  findSectionData(SECTION_6_ID, pageData)
                )?.ctaButton ?? "#"
              }
            >
              <Button className={"flex gap-x-3 items-center theme-button"}>
                <span>
                  {
                    findSubSectionData(
                      "6916f5479afb323bcd890713",
                      findSectionData(SECTION_6_ID, pageData)
                    )?.ctaButton
                  }
                </span>
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-white/5 py-10 rounded-md border flex flex-wrap items-center justify-between">
          <div className="px-5 lg:px-10 w-full lg:w-2/5 order-2 lg:order-1">
            <h1 className="mt-3 md:mt-0 text-2xl md:text-4xl mb-2">
              {
                findSubSectionData(
                  "6916f5679afb323bcd890715",
                  findSectionData(SECTION_6_ID, pageData)
                )?.heading
              }
            </h1>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-8">
              {
                findSubSectionData(
                  "6916f5679afb323bcd890715",
                  findSectionData(SECTION_6_ID, pageData)
                )?.subHeading
              }
            </p>
            <p className="text-sm md:text-base mb-4 md:mb-8">
              {
                findSubSectionData(
                  "6916f5679afb323bcd890715",
                  findSectionData(SECTION_6_ID, pageData)
                )?.description
              }
            </p>
            <Link
              href={
                findSubSectionData(
                  "6916f5679afb323bcd890715",
                  findSectionData(SECTION_6_ID, pageData)
                )?.ctaLink
              }
            >
              <Button className={"flex gap-x-3 items-center theme-button"}>
                <span>
                  {
                    findSubSectionData(
                      "6916f5679afb323bcd890715",
                      findSectionData(SECTION_6_ID, pageData)
                    )?.ctaButton
                  }
                </span>
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
          <div className="relative w-full lg:w-3/5 aspect-auto order-1 lgorder-2">
            <img
              src={
                findSubSectionData(
                  "6916f5679afb323bcd890715",
                  findSectionData(SECTION_6_ID, pageData)
                )?.subSectionMedia
              }
              alt="XRP"
              className="object-contain ml-auto"
            />
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-white/5 py-10 rounded-md border flex flex-wrap items-center justify-between">
          <div className="relative w-full lg:w-3/5 aspect-auto order-1">
            <img
              src={
                findSubSectionData(
                  "6916f98580a03e86002f7f0e",
                  findSectionData(SECTION_6_ID, pageData)
                )?.subSectionMedia
              }
              alt="XRP"
              className="object-contain"
            />
          </div>
          <div className="px-5 lg:px-10 w-full lg:w-2/5 order-2">
            <h1 className="mt-3 md:mt-0 text-2xl md:text-4xl mb-2">
              {
                findSubSectionData(
                  "6916f98580a03e86002f7f0e",
                  findSectionData(SECTION_6_ID, pageData)
                )?.heading
              }
            </h1>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-8">
              {
                findSubSectionData(
                  "6916f98580a03e86002f7f0e",
                  findSectionData(SECTION_6_ID, pageData)
                )?.subHeading
              }
            </p>
            <p className="text-sm md:text-base mb-4 md:mb-8">
              {
                findSubSectionData(
                  "6916f98580a03e86002f7f0e",
                  findSectionData(SECTION_6_ID, pageData)
                )?.description
              }
            </p>
            <Link
              href={
                findSubSectionData(
                  "6916f98580a03e86002f7f0e",
                  findSectionData(SECTION_6_ID, pageData)
                )?.ctaLink ?? "#"
              }
            >
              <Button className={"flex gap-x-3 items-center theme-button"}>
                <span>
                  {
                    findSubSectionData(
                      "6916f98580a03e86002f7f0e",
                      findSectionData(SECTION_6_ID, pageData)
                    )?.ctaButton
                  }
                </span>
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Solution END */}

      {/* Industries START */}
      <section
        className="px-10 py-10 lg:py-20 pt-28 dark:pt-12 xl:pt-48"
        style={{
          backgroundImage: `url(${
            findSectionData(SECTION_7_ID, pageData)?.sectionBackground?.[theme]
          })`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" flex  justify-center">
          <span className="font-barlow text-3xl lg:text-5xl text-center">
            {findSectionData(SECTION_7_ID, pageData)?.headline}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 w-full xl:max-w-4/5 mx-auto mt-12">
          {findSectionData(SECTION_7_ID, pageData)?.subsections?.map(
            (ind, i) => (
              <div
                key={i}
                className="box-item col-span-1 aspect-square cursor-pointer"
              >
                <div className="flip-box h-full">
                  <div
                    className="flip-box-front p-8 h-full text-center bg-amber-100"
                    style={{ backgroundImage: `url(${ind.subSectionMedia})` }}
                  >
                    <div className="inner color-white">
                      <h3 className="flip-box-header text-white text-3xl lg:text-5xl">
                        {ind.heading}
                      </h3>
                    </div>
                  </div>
                  <div
                    className="flip-box-back p-8 h-full text-center bg-amber-100"
                    style={{ backgroundImage: `url(${ind.subSectionMedia})` }}
                  >
                    <div className="inner color-white text-white text">
                      <p className="text-sm lg:text-base">{ind?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      {/* Industries END */}

      {/* Teams START */}
      <section className="px-10 py-12" id="team">
        <div className="flex justify-center">
          <span className="text-[#D1AAD7] uppercase rounded-full bg-white/5 tracking-widest px-8 py-2 border">
            {findSectionData(SECTION_8_ID, pageData)?.headline}
          </span>
        </div>
        <h1 className="mt-5 text-3xl lg:text-5xl text-center">
          {findSectionData(SECTION_8_ID, pageData)?.subHeadline}
        </h1>
        <p className="text-base lg:text-xl text-center mt-3 text-slate-400 dark:text-[#D1D5DB]">
          {findSectionData(SECTION_8_ID, pageData)?.description}
        </p>
        <Teams />
      </section>
      {/* Teams END */}

      {/* Faq START */}
      <section className="px-10 py-12" id="faq">
        <h1 className="text-3xl lg:text-5xl text-center">
          {findSectionData(SECTION_9_ID, pageData)?.headline}
        </h1>
        <FAQSection />
      </section>
      {/* Faq END */}

      {/* Contact Us START */}
      <section
        id="contact"
        className="px-10 py-10 lg:py-20 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${
            findSectionData(SECTION_10_ID, pageData)?.sectionBackground?.[theme]
          }
)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full lg:w-3/5">
          <h1 className="text-3xl lg:text-7xl text-center">
            {findSectionData(SECTION_10_ID, pageData)?.headline}{" "}
            <span className="text-3xl lg:text-7xl mb-5 leading-none pb-2 bg-clip-text text-transparent bg-[linear-gradient(to_right,#714DFF_0%,#9C83FF_31%,#E151FF_78%,#FFF759_96%)]">
              {findSectionData(SECTION_10_ID, pageData)?.subHeadline}
            </span>
          </h1>
          <div className="flex justify-center">
            <Button
              className={
                "flex flex-row gap-x-3 items-center mt-16 theme-button"
              }
              onClick={() => setOpenContactForm(true)}
            >
              <span>{findSectionData(SECTION_10_ID, pageData)?.ctaButton}</span>
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
