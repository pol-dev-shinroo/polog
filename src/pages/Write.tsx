import React, { useState, useEffect } from "react";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import { Flex, FramerBtn } from "src/elements";
import { useRouter } from "src/hooks";

const Write = () => {
  const { handleNavigate } = useRouter();
  const [markdownValue, setMarkdownValue] = useState<string | undefined>("");
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const handleChange = (
    value: string | undefined,
    event: React.ChangeEvent<HTMLTextAreaElement> | undefined,
    state: ContextStore | undefined
  ) => {
    setMarkdownValue(value);
    console.log(event);
  };
  return (
    <Flex direction="col" className="min-h-screen">
      <Flex
        align="center"
        justify="between"
        lightClasses={["bg-neutral-50"]}
        darkClasses={["dark:bg-zinc-700"]}
        className="h-16 w-full flex-wrap bg-gray-800 shadow shadow-gray-500"
      >
        <Flex className="px-10">
          <FramerBtn
            onClick={() => handleNavigate("/")}
            className="text-lg rounded-lg hover:font-bold text-slate-50"
          >
            👈 Back
          </FramerBtn>
        </Flex>
      </Flex>
      <div data-color-mode="dark" className="w-full">
        <Flex direction="row" className="w-full h-full">
          <Flex
            justify="between"
            direction="col"
            className="w-1/2 h-full border-8 border-green-600"
          >
            <Flex className="h-full overflow-y-scroll">
              <MDEditor
                preview="edit"
                visibleDragbar={false}
                extraCommands={[]}
                value={markdownValue}
                onChange={handleChange}
                className="w-full"
                style={{ marginTop: "0.5px" }}
              />
            </Flex>
            {/* Button Box */}
            <Flex
              justify="end"
              className="w-full h-20 bg-gray-800 border-8 border-zinc-700"
            >
              <Flex
                justify="between"
                className="px-10 w-1/3 border border-red-600"
              >
                <FramerBtn
                  onClick={() => handleNavigate("/")}
                  className="w-full text-lg rounded-lg hover:font-bold text-slate-50"
                >
                  Save
                </FramerBtn>
                <FramerBtn
                  onClick={() => handleNavigate("/")}
                  className="w-full text-lg rounded-lg hover:font-bold text-slate-50"
                >
                  Post
                </FramerBtn>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="w-1/2 h-full border-8 border-yellow-400">
            <MDEditor.Markdown
              source={markdownValue}
              className="w-full h-full p-20 overflow-y-scroll"
            />
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default Write;
