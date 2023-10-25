import { dayNames } from "../../../utils/dateHelper";
export const DayOfWeks = () => {
  return (
    <div className="grid grid-cols-7 bg-mint text-darkMint font-bold py-2 text-center rounded-t-lg">
      {dayNames.map((name, i) => (
        <span key={i}>
          <span className="hidden md:block">{name.long}</span>
          <span className="md:hidden">{name.short}</span>
        </span>
      ))}
    </div>
  );
};
