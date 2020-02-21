import React from "react";
import styled from "styled-components";
import FormControl from "components/FormCtrl";
import { Select, InputLabel } from "@material-ui/core";

import { green, red, blue } from "ui-colors";

const Slt = styled(Select).attrs({})`
  && {
    ::after {
      color: green;
      border-bottom: 2px solid green;
    }
    ::before {
      border-bottom: 2px solid green;
    }
  }
`;

const InputL = styled(InputLabel).attrs({})`
  && {
    ::focus {
      color: green;
    }
  }
`;

export default function(props) {
  return (
    <FormControl>
      <InputL>{props.label}</InputL>
      <Slt value="">{props.children}</Slt>
    </FormControl>
  );
}
