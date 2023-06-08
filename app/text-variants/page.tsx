"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
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
import {
  FADE_DOWN_CODE,
  FADE_UP_CODE,
  MULTIDIRECTION_SLIDE_CODE,
  STAGGERED_FADE_IN_CODE,
  STAGGERED_PULL_UP_CODE,
} from "@/components/code-previews/code";
import FadeDown from "@/components/variant-previews/fade-down";
import FadeUp from "@/components/variant-previews/fade-up";
import MultiDirection from "@/components/variant-previews/multi-direction";
import TextVariantsHeader from "@/components/headers/text-variants-header";
import StaggeredFade from "@/components/variant-previews/staggered-fade";
import FadeIn from "@/components/variant-previews/fade-in";

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
      name: "Fade Down with Stagger",
      preview: <FadeDown key={keys[0]} />,
      code: FADE_DOWN_CODE,
    },
    {
      name: "Fade Up with Stagger",
      preview: <FadeUp key={keys[1]} />,
      code: FADE_UP_CODE,
    },
    {
      name: "Multi Direction Slide",
      preview: <MultiDirection key={keys[2]} />,
      code: MULTIDIRECTION_SLIDE_CODE,
    },
    {
      name: "Staggered Fade In",
      preview: <StaggeredFade key={keys[3]} />,
      code: STAGGERED_FADE_IN_CODE,
    },
    {
      name: "Staggered Letter Pull Up",
      preview: <FadeIn key={keys[4]} />,
      code: STAGGERED_PULL_UP_CODE,
    },
  ];

  const [query, setQuery] = React.useState("");

  const filteredVariants =
    query === ""
      ? variants
      : variants.filter((variant) => {
          return variant.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div>
      <TextVariantsHeader
        query={query}
        setQuery={setQuery}
        filteredVariants={filteredVariants}
      />

      <div className="flex flex-col items-center min-h-screen py-2 space-y-6">
        {/* {variants.map((variant, index) => ( */}
        {filteredVariants.map((variant, index) => (
          <Tabs defaultValue="preview" className="w-11/12" key={index}>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div className="flex justify-between w-full mb-2 lg:mb-0">
                <h1 className="text-xl">{variant.name}</h1>

                <Button
                  onClick={() => restartAnimation(index)}
                  variant="ghost"
                  className="lg:hidden"
                >
                  <RefreshCcw size={24} />
                </Button>
              </div>
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-6">
                <TabsList className="grid w-[355px] lg:w-[400px] grid-cols-2">
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
                          variant="ghost"
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
              <Card className="bg-background">
                <CardContent className="bg-background text-primary space-y-2 mt-4">
                  {variant.preview}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="code">
              <Card className="bg-background">
                <CardContent className="space-y-2">
                  <ScrollArea className="h-96">
                    <pre className="text-sm font-mono">
                      <code className="language-jsx text-primary">
                        {variant.code}
                      </code>
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
