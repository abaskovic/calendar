import { useParams, useNavigate } from "react-router-dom";
import { Container } from "../../components/layout/Container";
import { useState } from "react";
import { formatDate, formatDateTimeSecond, getValidDate } from "../../utils/dateHelper";
import {
  addMonths,
  eachDayOfInterval,
  lastDayOfMonth,
  lastDayOfWeek,
  parseISO,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { DayOfWeks } from "./components/DayOfWeks";
import { useGitHubRepository } from "../../api/events";
import { Spinner } from "../../components/ui/Spinner";
import { MonthHeader } from "./components/MonthHeader";
import { ErrorMessage } from "./components/ErrorMessage";
import { DayGrid } from "./components/DayGrid";


const Calendar = () => {
  const navigate = useNavigate();


  let { date } = useParams();
  const initialStartDate = getValidDate(date) || formatDate(new Date());
  const [startDate, setStartDate] = useState(initialStartDate);
  const errorMessage =
    date === undefined
      ? ""
      : getValidDate(date) === null
      ? "Invalid date format or date doesn't exist. Please use the format: YYYY-MM-DD (e.g., 2023-10-24)"
      : ""

  const isoDate = parseISO(startDate);
  const startDay = startOfMonth(isoDate);
  const lastDay = lastDayOfMonth(isoDate);
  const firstDate = startOfWeek(startDay, { weekStartsOn: 1 });
  const lastDate = lastDayOfWeek(lastDay, { weekStartsOn: 1 });

  const allDates = eachDayOfInterval({ start: firstDate, end: lastDate });

  const { data, error, isLoading } = useGitHubRepository(formatDateTimeSecond(startDay), formatDateTimeSecond(lastDay));


  const updateDate = (newDate) => {
    setStartDate(formatDate(newDate));
    navigate(`/${formatDate(newDate)}`);
  }

  const increaseMonth = () => updateDate(addMonths(startDay, -1));
  const decreaseMonth = () => updateDate(addMonths(startDay, 1));

  return (  
    <Container>
      <MonthHeader isLoading={isLoading} isoDate={isoDate} increaseMonth={increaseMonth} decreaseMonth={decreaseMonth}/>
      <ErrorMessage message={error ? `Error: ${error.message}` :  errorMessage} />
      <DayOfWeks />
      {isLoading ? <Spinner /> : <DayGrid allDates={allDates} isoDate={isoDate} data={data} />}
    </Container>
  );
};
export default Calendar;

