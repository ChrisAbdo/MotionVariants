"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  CodeIcon,
  ReloadIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import {
  BlurIn,
  FadeDownStagger,
  FadeUpStagger,
  GradualSpacing,
  LetterPullUp,
  MultiDirectionSlide,
  RotateText,
  SeparateAway,
  SlightFlip,
  StaggeredFadeIn,
  TypingEffect,
  VelocityScroll,
  WavyText,
  WordPullUp,
} from "@/variants/variant-previews";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VariantCarousel() {
  let generateZeros = (n: number) => Array(n).fill(0);
  let [keys, setKeys] = React.useState(generateZeros(20));
  let [index, setIndex] = React.useState(0);
  let [key, setKey] = React.useState(0); // new state for component key

  const nextVariant = () => {
    setIndex((prevIndex) => (prevIndex + 1) % variants.length);
  };

  const prevVariant = () => {
    setIndex(
      (prevIndex) => (prevIndex + variants.length - 1) % variants.length
    );
  };

  const resetVariant = () => {
    // resetting the animation by providing a new key to the component
    setKey((prevKey) => prevKey + 1);
  };

  let variants = [
    {
      name: "Fade Down with Stagger",
      // @ts-ignore
      preview: <FadeDownStagger />,
      id: 1,
    },
    {
      name: "Fade Up with Stagger",
      // @ts-ignore
      preview: <FadeUpStagger />,
      id: 2,
    },
    {
      name: "Multi Direction Slide",
      // @ts-ignore
      preview: <MultiDirectionSlide />,
      id: 3,
    },
    {
      name: "Staggered Fade In",
      preview: <StaggeredFadeIn />,
      id: 4,
    },
    {
      name: "Staggered Letter Pull Up",
      preview: <LetterPullUp />,
      id: 5,
    },
    {
      name: "Word Pull Up",
      preview: <WordPullUp />,
      id: 6,
    },
    {
      name: "Scroll Based Velocity",
      preview: <VelocityScroll />,
      id: 7,
    },
    {
      name: "Rotate Between Words",
      preview: <RotateText />,
      id: 8,
    },
    {
      name: "Typing Effect",
      preview: <TypingEffect />,
      id: 9,
    },
    {
      name: "Separate Away",
      preview: <SeparateAway />,
      id: 10,
    },
    {
      name: "Gradual Spacing",
      preview: <GradualSpacing />,
      id: 11,
    },
    {
      name: "Blur In",
      preview: <BlurIn />,
      id: 12,
    },
    {
      name: "Slight Flip",
      preview: <SlightFlip />,
      id: 13,
    },
    {
      name: "Wavy Text",
      preview: <WavyText />,
      id: 14,
    },
  ];

  let buttons = [
    {
      function: prevVariant,
      tooltipText: "Previous Variant",
      icon: TriangleLeftIcon,
    },
    {
      function: nextVariant,
      tooltipText: "Next Variant",
      icon: TriangleRightIcon,
    },
    {
      function: resetVariant,
      tooltipText: "Reset Variant",
      icon: ReloadIcon,
    },
  ];

  return (
    <div>
      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between space-x-1">
              <Select onValueChange={(value: any) => setIndex(value - 1)}>
                <SelectTrigger className="w-[250px] bg-background">
                  <SelectValue placeholder="Search variants" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Variants</SelectLabel>
                    {variants.map((variant, i) => (
                      // @ts-ignore
                      <SelectItem key={i} value={variant.id}>
                        {variant.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="flex space-x-1 justify-end">
                {buttons.map((button, i) => (
                  <TooltipProvider key={i}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={button.function}
                        >
                          <button.icon />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{button.tooltipText}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <div>
          <CardContent>
            {React.cloneElement(variants[index].preview, { key: key })}
          </CardContent>
        </div>

        <CardFooter className="flex justify-between items-center">
          <CardDescription>
            <span>{variants[index].name}</span>
          </CardDescription>
          <Link
            href={`/text-variants#${variants[index].name
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            <Button variant="secondary">
              <CodeIcon className="w-5 h-5 mr-2" />
              View
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
