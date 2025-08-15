// src/components/Modals/Teams/createTeam.tsx

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import teamSchema from "@/zodSchema/teamSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookOpen, Plus, Trash2 } from "lucide-react";
import { Loader2 } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useTagStore from "@/store/useTag.store";
import useTeamStore from "@/store/useTeam.store";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import type { z } from "zod";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import AddNewTagModal from "../addNewTag";

export interface createTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TeamFormType = z.infer<typeof teamSchema>;

const CreateTeamModal = ({ isOpen, onClose }: createTeamModalProps) => {
  const { isTagLoading, tags, fetchAllTags } = useTagStore();
  const [addNewTagModalOpen, setAddNewTagModalOpen] = useState(false);
  const { isLoading, createTeam } = useTeamStore();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const team = useForm<TeamFormType>({
    resolver: zodResolver(teamSchema),
    defaultValues: {
      title: "",
      about: "",
      link: [{ name: "", url: "" }],
      tags: [""],
    },
  });

  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control: team.control,
    name: "tags",
  });

  
  const {
    fields: linkFields,
    append: appendLink,
    remove: removeLink,
  } = useFieldArray({
    control: team.control,
    name: "link",
  });

  useEffect(() => {
    fetchAllTags();
    team.reset();
    setErrorMessage(null);
  }, [isOpen, addNewTagModalOpen]);

  const handleAddNewTag = () => {
    setAddNewTagModalOpen(true);
  };
  
  const onSubmit = async (data: any) => {
    console.log(`Data: ${JSON.stringify(data)}`);

    const response = await createTeam(data);

    console.log(`response from create team`, response);
    if (response === 200) {
      navigate(`/search-members`)
    team.reset();
    onClose();
    }

    if (response.statusCode === 400) {
      setErrorMessage(response.errors?.error || "Something went wrong.");
    }

  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-4 w-full lg:min-w-1/2 lg:max-1/2 min-w-full rounded-3xl">
        <DialogTitle className="text-neutral-800 dark:text-neutral-50 dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 p-1 px-4 w-fit rounded-full">
          Create Team
        </DialogTitle>
        {errorMessage && <p className="text-destructive text-xl">{errorMessage}</p>}
        <DialogDescription />
        <Form {...team}>
          <form onSubmit={team.handleSubmit(onSubmit)} className="space-y-4">
            <pre>{JSON.stringify(team.formState.errors, null, 2)}</pre>
            <FormField
              control={team.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter team name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={team.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Describe about team" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-wrap gap-4 ml-4">
              <FormLabel>Links</FormLabel>
              <Button
                onClick={() => appendLink({ name: "", url: "" })}
              >
                <Plus className="w-4 h-4 mr-1" />
                Add link
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {linkFields.map((link, index) => (
                <Card
                  key={link.id}
                  className="flex flex-wrap flex-row gap-2 m-2 p-2"
                >
                  <FormField
                    control={team.control}
                    name={`link.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pl-2">Link Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter link name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={team.control}
                    name={`link.${index}.url`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pl-2">Link URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter link url"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant="ghost"
                    className="gap-2"
                    onClick={() => removeLink(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </Card>
              ))}
            </div>
            <FormLabel>
              <BookOpen className="w-5 h-5" />
              Tags
              <Button type="button" onClick={() => appendTag("")}>
                <Plus className="w-4 h-4 mr-1" />
                Add Tag
              </Button>
            </FormLabel>
            <div className="flex flex-wrap gap-2 ml-4">
              {tagFields.map((tag, index) => (
                <div key={tag.id} className="flex gap-2 m-2">
                  <FormField
                    control={team.control}
                    name={`tags.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <DropdownMenu>
                          <FormControl>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" className="border-primary">
                                {field.value ? tags.find((tag: { id: string }) => tag.id === field.value)?.name : "Select a tag"}
                              </Button>
                            </DropdownMenuTrigger>
                          </FormControl>
                          <DropdownMenuContent>
                            {isTagLoading ? (
                              <p>Loading...</p>
                            ) : (
                              tags.map((tag: { id: string; name: string }) => (
                                <DropdownMenuItem key={tag.id} onSelect={() => field.onChange(tag.id)}>
                                  {tag.name}
                                </DropdownMenuItem>
                              ))
                            )}
                            <DropdownMenuItem onSelect={() => handleAddNewTag()}
                              className="font-semibold bg-primary text-secondary">
                              <Plus className="w-4 h-4 mr-1 text-secondary " />
                              Add New Tag
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant="ghost"
                    className="gap-2"
                    onClick={() => removeTag(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            <Button type="submit" className="w-full h-9">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Register"
              )}
              submit
            </Button>
          </form>
        </Form>
      </DialogContent>
      {addNewTagModalOpen && (
        <AddNewTagModal
          isOpen={addNewTagModalOpen}
          onClose={() => setAddNewTagModalOpen(false)}
        />
      )}
    </Dialog>
  );
};

export default CreateTeamModal;