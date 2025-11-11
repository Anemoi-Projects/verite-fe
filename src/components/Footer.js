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

const formSchema = z.object({
  emailID: z.email({
    error: "Please enter a valid emailID",
  }),
});

const Footer = () => {
  const { theme } = useTheme();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailID: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <footer className="px-10 py-20 flex gap-10 justify-between items-start">
      <div className="w-1/4 text-black/60 dark:text-[#B4BCD0]/60 flex flex-col">
        <h1 className="text-black dark:text-[#B4BCD0] text-lg mb-5">
          Reach US:
        </h1>
        <p className="mb-5">
          Lorem Ipsum Text for address will come here. Lorem Ipsum Text for
          address will come here.
        </p>
        <Link
          href={"mailTo:email@email.com"}
          className="underline cursor-pointer mb-1"
        >
          email@email.com
        </Link>
        <Link
          href={"mailTo:email@email.com"}
          className="underline cursor-pointer mb-1"
        >
          email@email.com
        </Link>
        <p>Phone No.</p>
        <div className="flex items-center gap-x-5 mt-5">
          <Link href={"#"}>
            <Twitter color={theme == "dark" ? "white" : "black"} size={25} />
          </Link>
          <Link href={"#"}>
            <Github color={theme == "dark" ? "white" : "black"} size={25} />
          </Link>
          <Link href={"#"}>
            <Slack color={theme == "dark" ? "white" : "black"} size={25} />
          </Link>
          <Link href={"#"}>
            <Youtube color={theme == "dark" ? "white" : "black"} size={25} />
          </Link>
        </div>
      </div>
      <div className="w-2/4 flex flex-col justify-center items-center h-full py-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-3/4 "
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
            <div className="flex  justify-center">
              <Button
                type="submit"
                className={"theme-button mx-auto inline-flex items-center"}
              >
                <span>Join Our Mailing List</span>
                <ArrowRight size={20} />
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-1/4 text-black/60 dark:text-[#B4BCD0]/60 flex flex-col">
        <h1 className="text-black dark:text-[#B4BCD0] text-lg mb-5">
          Developers
        </h1>

        <Link href={"#project-philosophy"} className="cursor-pointer mb-2">
          Project Philosophy
        </Link>
        <Link href={"#team"} className="cursor-pointer mb-2">
          Team
        </Link>
        <Link href={"#solution"} className="cursor-pointer mb-2">
          Solution
        </Link>
        <Link href={"#contact"} className="cursor-pointer mb-2">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
