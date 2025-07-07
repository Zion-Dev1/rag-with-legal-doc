import { Button, TextField } from "@mui/material";
import useQueryStore from "../stores/queryStore";
import askQuery from "../services/askQueryApi";
import useAnswerStore from "../stores/answerStore";

const AskQuerySection = () => {
  const { query, setQuery } = useQueryStore();
  const { setAnswer } = useAnswerStore();

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
            .then(({ results }) => {
              setAnswer(results);
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
