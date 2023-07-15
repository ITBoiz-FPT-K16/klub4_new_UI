import { useMediaQuery } from "react-responsive";

const DateOfBirth = ({
  bDay,
  bMonth,
  bYear,
  dateError,
  dates,
  months,
  years,
  handleRegisterChange,
}) => {
  const view1 = useMediaQuery({
    query: `(min-width: 539px)`,
  });
  const view2 = useMediaQuery({
    query: `(min-width: 850px)`,
  });
  const view3 = useMediaQuery({
    query: `(min-width: 1170px)`,
  });
  return (
    <div
      className="reg_grid"
      style={{ marginBottom: `${dateError && !view3 ? "70px" : '0'}` }}
    >
      <select name="bDay" value={bDay} onChange={handleRegisterChange}>
        {dates.map((date, i) => {
          return (
            <option key={i} value={date}>
              {date}
            </option>
          );
        })}
      </select>
      <select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
        {months.map((month, i) => {
          return (
            <option key={i} value={month}>
              {month}
            </option>
          );
        })}
      </select>
      <select name="bYear" value={bYear} onChange={handleRegisterChange}>
        {years.map((year, i) => {
          return (
            <option key={i} value={year}>
              {year}
            </option>
          );
        })}
      </select>
      {dateError && (
        <div className={!view3 ? 'input_error' : 'input_error input_error_select_large'}>
          <div className={!view3 ? 'error_arrow_bottom' : 'error_arrow_left'}></div>
          {dateError}
        </div>
      )}
    </div>
  );
};
export default DateOfBirth;
