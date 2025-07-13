// src/components/Modals/roleAssigningModal.tsx

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import sendInvitationSchema, { type SendInvitationProps } from "@/zodSchema/sendInvitation.Schema";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import useInvitationStore from "@/store/useInvitation.store";
import { RoleLabels, RolesEnum } from "@/zodSchema/roles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  teamId: string;
  memberId: string;
  firstName: string;
  lastName: string;
};

const AssignNewRoleToExistingMemberModal = ({ isOpen, onClose, teamId, memberId, firstName, lastName }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { assigningRole } = useInvitationStore();

  const assigningRoleForm = useForm<SendInvitationProps>({
    resolver: zodResolver(sendInvitationSchema),
    defaultValues: {
      userId: memberId,
      designation: "",
    },
  });

useEffect(() => {
  if (isOpen) {
    assigningRoleForm.reset({
      userId: memberId,
      designation: "",
    });
  }
}, [isOpen, memberId]);

  const onSubmit = async (data: SendInvitationProps) => {
    
    const response = await assigningRole(teamId, data);
    
    if (response === 200 || response.statusCode === 400) {
      assigningRoleForm.reset();
      onClose();
    }

    if (response.statusCode === 500) {
      setErrorMessage(response.errors?.error || "Something went wrong.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}> 
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>
          Assign New Role to <span className="font-bold text-xl"> {firstName} {lastName} </span>
        </DialogTitle>
        <DialogDescription />
        {errorMessage && (
          <p className="text-destructive text-xl">{errorMessage}</p>
        )}
        <Form {...assigningRoleForm}>
          <form
            onSubmit={assigningRoleForm.handleSubmit(onSubmit)}
            className="space-y-8"
          >

            <FormField
              control={assigningRoleForm.control}
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
                      {RolesEnum.options.map((role) => (
                        <SelectItem key={role} value={role}>
                          {RoleLabels[role]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">
              Assign
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AssignNewRoleToExistingMemberModal;