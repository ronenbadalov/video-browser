import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import { RootState } from "../../store";
type Props = {
  options: number[];
};
const SelectBox = (props: Props) => {
  const dispatch = useDispatch();
  const selectedYear = useSelector(
    (state: RootState) => state.filterState.year
  );
  const handleYearChange = (event: SelectChangeEvent) => {
    dispatch(filterActions.setYear(`${event.target.value}`));
  };
  return (
    <FormControl sx={{ margin: "0.5rem", minWidth: 220 }}>
      <InputLabel id="year-label">Search by Year...</InputLabel>
      <Select
        value={selectedYear}
        label="Search by Year..."
        onChange={handleYearChange}
        labelId="year-label"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.options.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
