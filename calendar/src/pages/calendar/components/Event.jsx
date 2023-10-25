import { parseISO } from "date-fns";
import { Info } from "lucide-react";
import { useState } from "react";
import { ShowMoreDialog } from "../../../components/ui/ShowMoreDialog";
import { formatTime } from "../../../utils/dateHelper";

export const Event = (data) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div
      className="md:h-16 md:min-h-[4rem] rounded-lg bg-gray-200 font-bold text-darkMint cursor-pointer"
      onClick={toggleDialog}
    >
      <div className="flex flex-col gap-2 h-full justify-center relative p-1 md:justify-start">
        <div className="truncate text-xs">{data.data.message}</div>
        <div className="hidden lg:block">
          {formatTime(parseISO(data.data.committedDate))}
        </div>
        <div className="flex-center md:block md:absolute hidden right-1 bottom-1 ">
          <Info />
        </div>
      </div>
      <ShowMoreDialog
        data={data}
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
      />
    </div>
  );
};
