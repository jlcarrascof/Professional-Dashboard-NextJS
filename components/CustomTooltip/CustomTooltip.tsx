import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import { CustomTooltipProps } from "./CustomTooltip.types";
import { Info } from "lucide-react";

export function CustomTooltip(props: CustomTooltipProps) {

  const { content } = props;

  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <Info strokeWidth={1} className="w-5 h-5" />
            </TooltipTrigger>
            <TooltipContent>
                <p>Add to library</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}
