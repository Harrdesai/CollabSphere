import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const panelsData = [
  { id: 1, content: "content 1", defaultSize: 25 },
  { id: 2, content: "Content 2", defaultSize: 25 },
  { id: 3, content: "Content 3", defaultSize: 25 },
  { id: 4, content: "Content 4", defaultSize: 25 },

];

const Trial = () => {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[88vh] rounded-lg border w-full"
    >
      {panelsData.map((panel, index) => (
        <div key={panel.id} className="contents">
          <ResizablePanel defaultSize={panel.defaultSize} minSize={10}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">{panel.content}</span>
            </div>
          </ResizablePanel>
          {/* Add handle between panels, but not after the last one */}
        {index !== panelsData.length - 1 && <ResizableHandle />}
        </div>
      ))}
    </ResizablePanelGroup>
  );
};

export default Trial;
  