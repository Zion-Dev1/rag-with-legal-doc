import { Button, TextField } from "@mui/material";
import { useState } from "react";
import useQueryStore from "../stores/queryStore";
import askQuery from "../services/askQueryApi";

const AskQuerySection = () => {
  const { query, setQuery } = useQueryStore();

  return (
    <div>
      <TextField
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        variant="outlined"
        label="Enter Query"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          askQuery(query)
            .then(({results}) => {
              console.log(results);
            })
            .catch((error) => {
              console.error("Error asking query:", error);
            });
        }}
      >
        Ask Query
      </Button>
    </div>
  );
};

export default AskQuerySection;
