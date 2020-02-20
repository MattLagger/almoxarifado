import React from "react";
import Select from "styles/Select";
import { MenuItem, InputLabel, FormControl } from "@material-ui/core";

export default {
  title: "Select",
  component: Select
};

export const Primary = () => (
  <Select label="Titulo">
    <MenuItem value={10}>Item 1</MenuItem>
    <MenuItem>Item 2</MenuItem>
    <MenuItem>Item 3</MenuItem>
  </Select>
);
