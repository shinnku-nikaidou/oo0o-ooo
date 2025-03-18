"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxDemoProps {
  value: string;
}

export function CheckboxDemo({ value }: CheckboxDemoProps) {
  return (
    <div className="flex space-x-2 py-3">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {value}
      </label>
    </div>
  );
}
