import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EnquiryForm from "./EnquiryForm";
import { Button } from "./ui/button";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

function EnquiryFormDialog({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? children : <Button variant="outline">Enquire Now</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Plan Your Stay</DialogTitle>
          <DialogDescription>
            We'll come back to you personally with availability and any answers
            you need.
          </DialogDescription>
        </DialogHeader>
        <EnquiryForm className="max-h-[80vh] overflow-y-auto" />
      </DialogContent>
    </Dialog>
  );
}

export default EnquiryFormDialog;
