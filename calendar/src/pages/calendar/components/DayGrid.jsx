import PropTypes from "prop-types";
import DayCell from "./DayCell";
import { useEffect, useState } from "react";

export const DayGrid = ({ allDates, data, isoDate }) => {
  const [reversedData, setReversedData] = useState([]);

  useEffect(() => {
    if (data) {
      const reversed = data.slice().reverse();
      setReversedData(reversed);
    }
  }, [data]);
  return (
    <div className="grid grid-cols-7">
      {allDates.map((date, i) => (
        <DayCell
          date={date}
          isoDate={isoDate}
          reversedData={reversedData}
          key={i}
        />
      ))}
    </div>
  );
};

DayGrid.propTypes = {
  allDates: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  isoDate: PropTypes.instanceOf(Date).isRequired,
};
