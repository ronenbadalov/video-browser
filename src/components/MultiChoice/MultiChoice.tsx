import { Autocomplete, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { Genre } from "../../models/general.models";
import { filterActions } from "../../store/filter-slice";
type Props = {
  options: Genre[];
  label: string;
};

const MultiChoice = (props: Props) => {
  const dispatch = useDispatch();
  const handleGenreChange = (event: React.ChangeEvent<{}>, value: Genre[]) => {
    const genre_idArr = value.map((genre) => genre.id);
    dispatch(filterActions.setGenreIDArr(genre_idArr));
  };
  return (
    <Autocomplete
      multiple
      options={props.options}
      sx={{ minWidth: 220, margin: "0.5rem" }}
      getOptionLabel={(option) => option.name}
      onChange={handleGenreChange}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};

export default MultiChoice;
