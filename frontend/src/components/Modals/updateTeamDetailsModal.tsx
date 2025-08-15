// src/components/Modals/updateTeamDetailsModal.tsx

import { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { useFieldArray, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { ScrollArea } from "../ui/scroll-area";

import { z } from "zod"
import useTeamStore from "@/store/useTeam.store";
import { zodResolver } from "@hookform/resolvers/zod"
import teamSchema from "@/zodSchema/teamSchema";
import { Textarea } from "../ui/textarea";
import { BookOpen, Plus, Trash2 } from "lucide-react";
import useTagStore from "@/store/useTag.store";
import AddNewTagModal from "./addNewTag";

export interface UpdateTeamDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamId: string;
}
const UpdateTeamDetailsModal = ({ isOpen, onClose, teamId }: UpdateTeamDetailsModalProps) => {

  const {fetchTeamDetails, updateTeamDetails, teamDetail, isLoading} = useTeamStore();
    const [addNewTagModalOpen, setAddNewTagModalOpen] = useState(false);
  const { isTagLoading, tags, fetchAllTags } = useTagStore();

  useEffect(() => {
    if (!teamId) return;
    fetchTeamDetails(teamId);
    fetchAllTags()
  }, [teamId]);

  useEffect(() => {
      fetchAllTags();
  }, [addNewTagModalOpen]);

  const handleAddNewTag = () => {
    setAddNewTagModalOpen(true);
  };

  {console.log(`teamDetail`, teamDetail)};
  const updateTeamForm = useForm<z.infer<typeof teamSchema>>({
    resolver: zodResolver(teamSchema),
    defaultValues: {
      title: "",
      about: "",
      tags: [{ id: "", name: "" }],
      link: [{ name: "", url: "",}],
    },
  });

  useEffect(() => {
  if (teamDetail) {
    updateTeamForm.reset({
      title: teamDetail.title || "",
      about: teamDetail.about || "",
      tags: teamDetail.tags? teamDetail.tags.map((tag: { id: string; name: string }) => ({ id: tag.id, name: tag.name })) : [{ id: "", name: "" }],
      link: teamDetail.link || [{ name: "", url: "",}],
    });
  }
}, [teamDetail]);

  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control: updateTeamForm.control,
    name: "tags",
  });

  const {
    fields: linkFields,
    append: appendLink,
    remove: removeLink,
  } = useFieldArray({
    control: updateTeamForm.control,
    name: "link",
  });

  const onSubmit = async (data: z.infer<typeof teamSchema>) => {
    await updateTeamDetails(teamId, data);
    updateTeamForm.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {isLoading && <div>Loading...</div>}
      <DialogContent className="flex flex-col gap-4 w-full lg:min-w-1/2 lg:max-2/3 min-w-full h-4/5 rounded-3xl">
        <DialogTitle className="text-xl bg-muted-foreground text-secondary font-bold p-1 px-4 rounded-full w-fit">Update Team Details</DialogTitle>
        <DialogDescription />
        <ScrollArea className="rounded-2xl max-h-9/10 border">
        <CardContent className="flex flex-col w-full p-2 h-auto pr-4">
          <Form {...updateTeamForm}>
            <form onSubmit={updateTeamForm.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={updateTeamForm.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row gap-4">
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={updateTeamForm.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row gap-4">
                      <FormLabel>about</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                    </div>
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
                      control={updateTeamForm.control}
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
                      control={updateTeamForm.control}
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
                <Button type="button" onClick={() => appendTag({ id: "", name: "" })}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Tag
                </Button>
              </FormLabel>
              <div className="flex flex-wrap gap-2 ml-4">
                {tagFields.map((tag, index) => (
                  <div key={tag.id} className="flex items-center gap-2 m-2">
                    <FormField
                      control={updateTeamForm.control}
                      name={`tags.${index}`}
                      render={({ field }) => (
                        <FormItem>
                          <DropdownMenu>
                            <FormControl>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="border-primary">
                                  {field.value && field.value.name ? field.value.name : "Select Tag"}
                                </Button>
                              </DropdownMenuTrigger>
                            </FormControl>
                            <DropdownMenuContent>
                              {isTagLoading ? (
                                <p>Loading...</p>
                              ) : (
                                tags.map((tag: { id: string; name: string }) => (
                                  <DropdownMenuItem key={tag.id} onSelect={() => field.onChange({ id: tag.id, name: tag.name})}>
                                    {tag.name}
                                  </DropdownMenuItem>
                                ))
                              )}
                              <DropdownMenuItem onSelect={() => handleAddNewTag()}
                                className="font-semibold bg-primary text-secondary">
                                <Plus className="w-4 h-4 mr-1 text-secondary" />
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
              <div className="flex flex-row gap-4 w-full justify-end">
              <DialogClose asChild>
                <Button type="button" variant="destructive">
                  Close
                </Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
        </ScrollArea>
        <DialogFooter className="flex flex-col gap-4">
          
        </DialogFooter>
      </DialogContent>
      {addNewTagModalOpen && (
        <AddNewTagModal
          isOpen={addNewTagModalOpen}
          onClose={() => setAddNewTagModalOpen(false)}
        />
      )}
    </Dialog>
  )
}

export default UpdateTeamDetailsModal