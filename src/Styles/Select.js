import React from "react";
import styled from "styled-components";
import FormControl from "components/FormCtrl";
import { Select, InputLabel } from "@material-ui/core";

import { green, red, blue } from "ui-colors";

const Slt = styled(Select).attrs({})`
  && {
    border-color: green;
  }
`;

export default function(props) {
  return (
    <FormControl>
      <InputLabel>{props.label}</InputLabel>
      <Slt value="">{props.children}</Slt>
    </FormControl>
  );
}
