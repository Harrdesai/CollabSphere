// src/components/Modals/removeMemberModal.tsx

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useForm } from "react-hook-form";
import removeMemberSchema from "@/zodSchema/removeMember.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import useMemberStore from "@/store/useMember.store"
import { useEffect } from "react";

interface RemoveMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: any;
  teamId: string;
}
const RemoveMemberModal = ({ isOpen, onClose, member, teamId }: RemoveMemberModalProps) => {

  const { removeMemberFromTeam } = useMemberStore()

  useEffect(() => {
  if (!isOpen) {
    form.reset();
  } else {
    form.reset({ arrayOfUserRoleInTeamIds: [] });
  }
}, [isOpen]);
  const form = useForm({
    resolver: zodResolver(removeMemberSchema),
    defaultValues: {
      arrayOfUserRoleInTeamIds: [],
    },
  });

  const activeRoles = member?.userRoleInTeam?.
                                  filter((role: any) => role.teamId === teamId).
                                  filter((role: any) => role.isActive).
                                  filter((role: any) => role.designation !== "TEAM_LEADER");

  const onSubmit = async (data:any) => {
    await removeMemberFromTeam(data, teamId)
    form.reset()
    onClose()
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="rounded-3xl bg-accent">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            This action can't be undone. so choose role carefully which you want
            remove
          </AlertDialogDescription>
          <Separator className="my-2 border-1" />
          <Label className="text-xl font-normal text-primary mt-2">
            Member Name:{" "}
            <span className="font-light text-primary">
              {member?.firstName} {member?.lastName}{" "}
            </span>
          </Label>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="arrayOfUserRoleInTeamIds"
                render={() => (
                  <FormItem>
                      <FormLabel className="text-base mt-4">Select Roles which you want to remove</FormLabel>
                    {activeRoles.map((role: any) => (
                      <FormField
                        key={role.id}
                        control={form.control}
                        name="arrayOfUserRoleInTeamIds"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={role.id}
                              className="flex flex-row items-center gap-2"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(role.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          role.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== role.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {role.designation}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage className="text-xl font-semibold" />
                  </FormItem>
                )}
              />
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button type="submit">Submit</Button>
              </AlertDialogFooter>
            </form>
          </Form>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveMemberModal;
