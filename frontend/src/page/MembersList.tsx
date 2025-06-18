// src/page/MembersList.tsx
import { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import useMemberStore from "@/store/useMember.store";

const MembersList = () => {
  const { isLoading, members, fetchSearchedMembersList, setMembers, fetchUsedTags, tags } =
    useMemberStore();

  useEffect(() => {
    fetchUsedTags();
    console.log(`tags`, tags);
  }, [fetchUsedTags]);

  const [searchKeyWord, setSearchKeyWord] = useState("");
  const debounced = useDebounceCallback(setSearchKeyWord, 1000);

  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);

  const handleTagChange = (id: string, checked: boolean) => {
    setSelectedTagIds((prev) =>
      checked ? [...prev, id] : prev.filter((tagId) => tagId !== id)
    );
  };

  useEffect(() => {
    const trimmedKeyword = searchKeyWord.trim();
    setMembers([]);
    if (trimmedKeyword !== "" || selectedTagIds.length > 0) {
      fetchSearchedMembersList(trimmedKeyword, selectedTagIds);
    }
  }, [searchKeyWord, selectedTagIds, fetchSearchedMembersList]);

  return (
    <Card className="w-full gap-2 p-2">
      <CardHeader className="pl-0 gap-4">
      <Input
        placeholder="Search Members name"
        className="mt-0 max-w-2/3 justify-start"
        onChange={(event) => debounced(event.target.value)}
      />
        <div className="flex flex-wrap gap-2 w-full">
          {tags.map((tag: any) => (
            <label
              key={tag.id}
              className="flex items-center gap-2 border-2 rounded-full pl-2 pr-2 pb-0.5 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedTagIds.includes(tag.id)}
                onChange={(event) =>
                  handleTagChange(tag.id, event.target.checked)
                }
                className="hidden peer"
              />

              {selectedTagIds.includes(tag.id) && (
                <div className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
              )}

              <span className="whitespace-nowrap">{tag.name}</span>
            </label>
          ))}
        </div>
      </CardHeader>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        members.map((member: any) => (
          <Card key={member.id}>
            {member.firstName} {member.lastName}
          </Card>
        ))
      )}
    </Card>
  );
};

export default MembersList;

// <Checkbox
//   id={tag.id}
//   checked={selectedTagIds.includes(tag.id)}
//   onCheckedChange={(checked) => {
//   handleTagChange( tag.id, Boolean(checked))
//   }}
// />
