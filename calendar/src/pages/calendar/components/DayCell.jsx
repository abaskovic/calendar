import PropTypes from "prop-types";
import { Day } from "./Day";
import { formatDay } from "../../../utils/dateHelper";
import { parseISO } from "date-fns";
import { Event } from "./Event";

const DayCell = ({ date, isoDate, reversedData }) => {
  return (
    <Day date={date} isoDate={isoDate}>
      {reversedData
        .filter(
          (el) => formatDay(parseISO(el.committedDate)) === formatDay(date)
        )
        .filter((el) => el.message && el.committedDate)
        .map((el) => (
          <Event data={el} key={el.oid} />
        ))}
    </Day>
  );
};

DayCell.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  isoDate: PropTypes.instanceOf(Date).isRequired,
  reversedData: PropTypes.array.isRequired,
};

export default DayCell;
