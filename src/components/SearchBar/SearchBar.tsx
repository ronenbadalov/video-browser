import { Genre } from "../../models/general.models";
import Input from "../Input/Input";
import MultiChoice from "../MultiChoice/MultiChoice";
import SelectBox from "../SelectBox/SelectBox";
import classes from "./SearchBar.module.scss";
type Props = {
  genresData: Genre[];
  yearOptions: number[];
};

const SearchBar = (props: Props) => {
  return (
    <div className={classes["searchbar"]}>
      <Input />
      <SelectBox options={props.yearOptions} />
      <MultiChoice options={props.genresData} label="Search by Genre..." />
    </div>
  );
};

export default SearchBar;
