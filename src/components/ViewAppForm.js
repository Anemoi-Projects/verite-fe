"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";

const ContactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  emailId: z.string().email("Invalid emailId"),
});

export default function ViewAppForm({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "",
      emailId: "",
    },
  });

  const onSubmit = (data) => {
    // console.log(data);
    setOpen(false);
    // setLoading(true);

    // let config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: `${process.env.apiURL}/api/v1/enquiry/createEnquiry`,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // axios
    //   .request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //     if (response.data.success) {
    //       toast.success("Message sent");
    //     }
    //     setLoading(false);
    //     setOpen(false);
    //     form.reset();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error("Something went wrong, Try again.");
    //     setLoading(false);
    //   });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className={"font-barlow text-5xl font-medium"}>
            Enter your details
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emailId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your emailId" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="submit"
                className={"theme-button"}
                disabled={loading}
              >
                {loading ? <ClipLoader size={25} color="white" /> : "Continue"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
