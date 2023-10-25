import { format, isSameMonth } from "date-fns";
import PropTypes from "prop-types";

export const Day = ({ date, isoDate, children }) => {
  return (
    <div className="w-full h-full border border-px border-gray-200 p-2 overflow-hidden">
      {isSameMonth(date, isoDate) && (
        <div className="flex flex-col gap-2 ">
          <div className="rounded-full text-right bg-gray-200 h-6 w-6 self-end flex-center">
            {format(date, "d")}
          </div>
          <div className="overflow-scroll h-44 md:h-20 flex flex-col gap-2  ">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

Day.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  isoDate: PropTypes.instanceOf(Date).isRequired,
  children: PropTypes.node,
};
