// src/components/Modals/sendInvitationModal.tsx

import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import sendInvitationSchema from "@/zodSchema/sendInvitation.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { RoleLabels } from "@/zodSchema/roles";
import { Button } from "../ui/button";
import useInvitationStore from "@/store/useInvitation.store";
import type { z } from "zod";

export interface SendInvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  memberName: string;
}

type InvitationFormData = z.infer<typeof sendInvitationSchema>;

const SendInvitationModal = ({
  isOpen,
  onClose,
  userId,
  memberName,
}: SendInvitationModalProps) => {
  const { authUser, checkAuth } = useAuthStore();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { sendInvitation } = useInvitationStore();
  const navigate = useNavigate();

  const invitationForm = useForm<InvitationFormData>({
    resolver: zodResolver(sendInvitationSchema),
    defaultValues: {
      userId: userId,
      designation: "",
    },
  });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const teamId = authUser.teams[0]?.id;

  const onSubmit = async (data: any) => {

    const response = await sendInvitation(teamId, data);

    console.log(`response --------------> ${JSON.stringify(response)}`);
    if (response === 200) {
      onClose();

      invitationForm.reset();

      navigate(`/search-members`);
    }

    if (response.statusCode === 400) {
      setErrorMessage(response.errors?.error || "Something went wrong.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-4 w-full lg:min-w-1/2 lg:max-1/2 min-w-full rounded-3xl">
        <DialogTitle className="text-neutral-800 dark:text-neutral-50 dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 p-1 px-4 w-fit rounded-full">
          Invitation
        </DialogTitle>
        <DialogDescription />
        {errorMessage && <p className="text-destructive text-xl">{errorMessage}</p>}

        <Form {...invitationForm}>
          <form
            onSubmit={invitationForm.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <Input value={authUser.teams[0]?.title} disabled />

            <Input value={memberName} disabled />

            <FormField
              control={invitationForm.control}
              name="designation"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select designation" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(RoleLabels).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Send</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SendInvitationModal;