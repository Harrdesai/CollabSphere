// src/components/ExpandableText.tsx

import { useState } from "react";
import { CardDescription } from "@/components/ui/card";

const MAX_LENGTH = 200;
const ExpandableText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <CardDescription className="text-muted-foreground font-normal text-sm">
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      {isExpanded ? text : `${text?.slice(0, MAX_LENGTH)}...  `}
      {text.length > MAX_LENGTH && (
        <span
          onClick={toggleExpand}
          className="text-muted-foreground font-semibold cursor-pointer"
        >
          {isExpanded ? " Show less" : "Show more"}
        </span>
      )}
    </CardDescription>
  );
};

export default ExpandableText;