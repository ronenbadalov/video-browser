import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import classes from "./Input.module.scss";

const Input = () => {
  const dispatch = useDispatch();

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterActions.setSearchQuery(e.target.value));
  };
  return (
    <TextField
      label="Search Video..."
      className={classes["input"]}
      variant="outlined"
      onChange={handleSearchQueryChange}
      sx={{ minWidth: 220, margin: "0.5rem 0" }}
    />
  );
};

export default Input;
