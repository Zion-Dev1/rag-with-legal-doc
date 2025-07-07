import { Button, TextField } from "@mui/material";
import { useState } from "react";

const AskQuerySection = () => {
  const [query, setQuery] = useState("");

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
      
      <Button variant="contained" color="primary" onClick={() => {}}>
        Ask Query
      </Button>
    </div>
  );
};

export default AskQuerySection;
