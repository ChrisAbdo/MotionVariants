"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FADE_DOWN_CODE } from "@/components/code-previews/code";

import PageVariantsHeader from "@/components/headers/page-variants-header";
import SlideUp from "@/components/page-variants-preview/slide-up";

export default function Home() {
  const generateZeros = (n: number) => Array(n).fill(0);
  const [keys, setKeys] = React.useState(generateZeros(5));

  function restartAnimation(index: number) {
    setKeys((prevKeys) => {
      const newKeys = [...prevKeys]; // copy the previous keys
      newKeys[index] += 1; // increment the key at the given index
      return newKeys;
    });
  }

  let variants = [
    {
      name: "Slide Up",
      preview: <SlideUp key={keys[0]} />,
      code: FADE_DOWN_CODE,
    },
  ];

  return (
    <div className="z-50">
      <PageVariantsHeader />

      <div className="flex flex-col items-center min-h-screen py-2 space-y-6 z-50">
        {variants.map((variant, index) => (
          <Tabs defaultValue="preview" className="w-11/12 z-50" key={index}>
            <div className="flex justify-between">
              <h1 className="hidden lg:flex items-center text-xl">
                {variant.name}
              </h1>

              <div className="flex space-x-6">
                <TabsList
                  className="grid w-[400px] 
            grid-cols-2"
                >
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>

                <div className="hidden lg:flex space-x-6">
                  <Separator orientation="vertical" />

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => restartAnimation(index)}
                          variant="outline"
                        >
                          <RefreshCcw size={24} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="mr-8">
                        <p>Restart animation</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            <TabsContent value="preview">
              <Card>
                <CardContent className="space-y-2 mt-4 z-50">
                  {variant.preview}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="code">
              <Card>
                <CardContent className="space-y-2">
                  <ScrollArea className="h-96">
                    <pre className="text-sm font-mono">
                      <code className="language-jsx">{variant.code}</code>
                    </pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        ))}
      </div>
    </div>
  );
}
