"use client"

import * as React from "react"
import { SliderProps } from "@radix-ui/react-slider"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface TemperatureSelectorProps {
  defaultValue: SliderProps["defaultValue"]
}

export function TemperatureSelector({
  defaultValue,
}: TemperatureSelectorProps) {
  const [value, setValue] = React.useState(defaultValue)

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger className="grid gap-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="temperature">Temperature</Label>
            <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-slate-600 hover:border-slate-100 dark:text-slate-400 dark:hover:border-slate-800">
              {value}
            </span>
          </div>
          <Slider
            id="temperature"
            max={1}
            defaultValue={value}
            step={0.1}
            onValueChange={setValue}
            className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
          />
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          Controls randomness: lowering results in less random completions. As
          the temperature approaches zero, the model will become deterministic
          and repetitive.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}