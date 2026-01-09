"use client";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { MailCheck } from "lucide-react";

export default function MailDialog({ subscribed, setSubscribed }) {
  const [open, setOpen] = useState(false);
  
 const handleClose = () => {
    setOpen(false);
    setSubscribed(false); 
  };

  useEffect(() => {
    if (subscribed) {
      setOpen(true);
    }
  }, [subscribed]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="text-center">
        <AlertDialogHeader className="items-center">
          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <MailCheck className="h-[18px] w-[18px] text-primary" />
          </div>

          <AlertDialogTitle className="text-2xl font-bold tracking-tight">
            You’re Subscribed
          </AlertDialogTitle>

          <AlertDialogDescription className="mt-3 text-[15px] text-center">
            Thank you for subscribing to our mailing list. You’ll now receive
            important updates, announcements, and exclusive content directly in
            your inbox.
          </AlertDialogDescription>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              "Product Updates",
              "Feature Announcements",
              "Tips & Resources",
              "Early Access",
              "Important Notifications",
              "No Spam Ever",
            ].map((item) => (
              <Badge key={item} variant="outline" className="py-1">
                {item}
              </Badge>
            ))}
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-6 flex justify-center gap-3 mx-auto">
          <AlertDialogAction onClick={handleClose}>I Understand</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
