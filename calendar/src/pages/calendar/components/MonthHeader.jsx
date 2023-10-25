import { format } from "date-fns";
import { Button } from "../../../components/ui/Button";
import PropTypes from "prop-types";

export const MonthHeader = ({ isoDate, increaseMonth, decreaseMonth, isLoading }) => {
  const month = format(isoDate, "MMMM");
  const year = format(isoDate, "yyyy");
  return (
    <div className="flex justify-between pb-6">
      <h1 className="text-2xl">{`${month} ${year}`}</h1>
      <div className="flex gap-4">
        <Button arrow reverse onClick={increaseMonth} isDisable={isLoading} />
        <Button arrow onClick={decreaseMonth} isDisable={isLoading} />
      </div>
    </div>
  );
};

MonthHeader.propTypes = {
  isoDate: PropTypes.instanceOf(Date).isRequired,
  increaseMonth: PropTypes.func.isRequired,
  decreaseMonth: PropTypes.func.isRequired,
  isLoading: PropTypes.bool, 

};
