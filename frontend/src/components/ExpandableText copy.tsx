// src/components/ExpandableText.tsx

import { useState } from "react";
import { CardDescription } from "@/components/ui/card";
import { Button } from "./ui/button";

const ExpandableText = ({ input }: { input: any }, {maxLength} : {maxLength: number}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <CardDescription className="text-muted-foreground font-normal text-sm">
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      {isExpanded ? input : `${input?.slice(0, maxLength)}...  `}
      {input.length > maxLength && (
        <Button
          onClick={toggleExpand}
          className="text-muted-foreground font-semibold cursor-pointer"
        >
          {isExpanded ? " Expand" : "Collapse"}
        </Button>
      )}
    </CardDescription>
  );
};

export default ExpandableText;