// src/components/Modals/addNewTag.tsx
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import TagSchema from "@/zodSchema/tag,Schema";
import useTagStore from "@/store/useTag.store";

interface AddNewTagProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewTagModal = ({ isOpen, onClose }: AddNewTagProps) => {

  const { isTagLoading, createTag } = useTagStore();

  const addNewTagForm = useForm({
    resolver: zodResolver(TagSchema),
    defaultValues: {
      tagName: '',
    },
  });

  const onSubmit = async (tagDetails: any) => {
    console.log(`Data: ${JSON.stringify(tagDetails)}`);
    const response = await createTag(tagDetails);

    if (response === 200) {
      addNewTagForm.reset();
      onClose();
    } else {
      console.error("Failed to create tag");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Add New Tag</DialogTitle>
          <DialogDescription />
          <Form {...addNewTagForm}>
            <form onSubmit={addNewTagForm.handleSubmit(onSubmit)}>
              <div className="grid gap-4 py-4">
                <FormField
                  control={addNewTagForm.control}
                  name="tagName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tag Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Tag Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isTagLoading}>Add Tag</Button>
              </div>
            </form>
          </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddNewTagModal;