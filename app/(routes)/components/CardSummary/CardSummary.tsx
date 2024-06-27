import { CustomIcon } from "@/components/CustomIcon";
import { CardSummaryProps } from "./CardSummary.types";
import { CustomTooltip } from "@/components/CustomTooltip";

export function CardSummary(props: CardSummaryProps) {
  const { icon: Icon, total, average, title, tooltipText } = props;

  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
        <div className="flex justify-between">
            <CustomIcon icon={Icon} />
            {title}
        </div>
        <CustomTooltip
          content={tooltipText}
        />
    </div>
  )
}
