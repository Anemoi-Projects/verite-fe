"use client";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Bird,
  Github,
  Slack,
  Twitter,
  Youtube,
} from "lucide-react";
import { useTheme } from "next-themes";
import axios from "axios";
import { useEffect, useState } from "react";

const findFooterData = (sectionID, pageData) => {
  const data = pageData?.find((footer) => footer?._id === sectionID);
  return data;
};
const findFooterSectionData = (sectionID, sectionData) => {
  const footerSection = sectionData?.sections?.find(
    (sub) => sub?._id === sectionID
  );
  return footerSection;
};
const SECTION_1_ID = "69205709ce91ccf889990261";
const SECTION_2_ID = "6923cc020feecf49a84284b3";
const SECTION_3_ID = "6923cd3e0feecf49a84284ba";
const SECTION_4_ID = "6925410a399388b2d08a2786";
const formSchema = z.object({
  emailID: z.email({
    error: "Please enter a valid emailID",
  }),
});

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  const { theme } = useTheme();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailID: "",
    },
  });

  const getHeaderData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.apiURL}/api/v1/contents/getFooter`,
    };

    axios
      .request(config)
      .then((response) => {
        setFooterData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getHeaderData();
  }, []);

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <footer className="px-10 py-20 flex flex-wrap md:flex-nowrap gap-10 justify-between items-start">
      <div className="w-full md:w-1/4 text-black/60 dark:text-[#B4BCD0]/60 flex flex-col order-3 md:order-1">
        <h1 className="text-black dark:text-[#B4BCD0] text-base lg:text-lg mb-3 lg:mb-5">
          {findFooterData(SECTION_1_ID, footerData)?.title}
        </h1>
        {findFooterSectionData(
          "6922ba293e0ef90cc830a6d6",
          findFooterData(SECTION_1_ID, footerData)
        )?.title !== "NA" && (
          <p className="text-sm lg:text-base mb-3 lg:mb-5">
            {
              findFooterSectionData(
                "6922ba293e0ef90cc830a6d6",
                findFooterData(SECTION_1_ID, footerData)
              )?.title
            }
          </p>
        )}
        {findFooterSectionData(
          "6922ba293e0ef90cc830a6d7",
          findFooterData(SECTION_1_ID, footerData)
        )?.title !== "NA" && (
          <Link
            href={
              findFooterSectionData(
                "6922ba293e0ef90cc830a6d7",
                findFooterData(SECTION_1_ID, footerData)
              )?.url ?? "#"
            }
            className="underline cursor-pointer mb-1 text-sm lg:text-base"
          >
            {
              findFooterSectionData(
                "6922ba293e0ef90cc830a6d7",
                findFooterData(SECTION_1_ID, footerData)
              )?.title
            }
          </Link>
        )}
        {findFooterSectionData(
          "6922ba293e0ef90cc830a6d8",
          findFooterData(SECTION_1_ID, footerData)
        )?.title !== "NA" && (
          <Link
            href={
              findFooterSectionData(
                "6922ba293e0ef90cc830a6d8",
                findFooterData(SECTION_1_ID, footerData)
              )?.url ?? "#"
            }
            className="underline cursor-pointer mb-1 text-sm lg:text-base"
          >
            {
              findFooterSectionData(
                "6922ba293e0ef90cc830a6d8",
                findFooterData(SECTION_1_ID, footerData)
              )?.title
            }
          </Link>
        )}
        {findFooterSectionData(
          "6922ba293e0ef90cc830a6d9",
          findFooterData(SECTION_1_ID, footerData)
        )?.title !== "NA" && (
          <p className="text-sm lg:text-base ">
            {
              findFooterSectionData(
                "6922ba293e0ef90cc830a6d9",
                findFooterData(SECTION_1_ID, footerData)
              )?.title
            }
          </p>
        )}
        {/* Socials */}
        <div className="flex items-center gap-x-5 mt-5">
          {findFooterSectionData(
            "69254195399388b2d08a2789",
            findFooterData(SECTION_4_ID, footerData)
          )?.url !== "#" && (
            <Link
              href={
                findFooterSectionData(
                  "69254195399388b2d08a2789",
                  findFooterData(SECTION_4_ID, footerData)
                )?.url ?? "#"
              }
            >
              <Twitter color={theme == "dark" ? "white" : "black"} size={25} />
            </Link>
          )}
          {findFooterSectionData(
            "69254195399388b2d08a278a",
            findFooterData(SECTION_4_ID, footerData)
          )?.url !== "#" && (
            <Link
              href={
                findFooterSectionData(
                  "69254195399388b2d08a278a",
                  findFooterData(SECTION_4_ID, footerData)
                )?.url ?? "#"
              }
            >
              <Github color={theme == "dark" ? "white" : "black"} size={25} />
            </Link>
          )}
          {findFooterSectionData(
            "69254195399388b2d08a278b",
            findFooterData(SECTION_4_ID, footerData)
          )?.url !== "#" && (
            <Link
              href={
                findFooterSectionData(
                  "69254195399388b2d08a278b",
                  findFooterData(SECTION_4_ID, footerData)
                )?.url ?? "#"
              }
            >
              <Slack color={theme == "dark" ? "white" : "black"} size={25} />
            </Link>
          )}
          {findFooterSectionData(
            "69254195399388b2d08a278c",
            findFooterData(SECTION_4_ID, footerData)
          )?.url !== "#" && (
            <Link
              href={
                findFooterSectionData(
                  "69254195399388b2d08a278c",
                  findFooterData(SECTION_4_ID, footerData)
                )?.url ?? "#"
              }
            >
              <Youtube color={theme == "dark" ? "white" : "black"} size={25} />
            </Link>
          )}
        </div>
      </div>
      <div className="w-full md:w-2/4 flex flex-col lg:justify-center lg:items-center h-full lg:py-10 order-1 md:order-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full lg:w-3/4 "
          >
            <FormField
              control={form.control}
              name="emailID"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter Email Here !!"
                      {...field}
                      type={"email"}
                      className={"px-5 py-3 h-auto"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex  justify-start lg:justify-center">
              <Button
                type="submit"
                className={"theme-button lg:mx-auto inline-flex items-center"}
              >
                <span>
                  {findFooterSectionData(
                    "6923ccc60feecf49a84284b7",
                    findFooterData(SECTION_2_ID, footerData)
                  )?.title ?? "#"}
                </span>
                <ArrowRight size={20} />
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-full md:w-1/4 text-black/60 dark:text-[#B4BCD0]/60 flex flex-col order-2 md:order-3">
        <h1 className="text-black dark:text-[#B4BCD0] text-base lg:text-lg mb-3 lg:mb-5">
          {findFooterData(SECTION_3_ID, footerData)?.title}
        </h1>
        {findFooterData(SECTION_3_ID, footerData)?.sections?.map((links) => (
          <Link
            key={links?._id}
            href={links?.url ?? "#"}
            className="cursor-pointer mb-2 text-sm lg:text-base"
          >
            {links.title}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
