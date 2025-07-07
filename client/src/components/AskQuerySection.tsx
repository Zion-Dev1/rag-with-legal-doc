import { Box, Button, TextField } from "@mui/material";
import useQueryStore from "../stores/queryStore";
import askQuery from "../services/askQueryApi";
import useAnswerStore from "../stores/answerStore";

const AskQuerySection = () => {
  const { query, setQuery } = useQueryStore();
  const { setAnswer } = useAnswerStore();

  return (
    <Box display="flex" gap={2} mt={2}>
      <TextField
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        label="Enter your question"
        size="small"
      />
      <Button
        variant="contained"
        onClick={() => {
          askQuery(query)
            .then(({ results }) => setAnswer(results))
            .catch((err) => console.error("Error asking query:", err));
        }}
      >
        Ask
      </Button>
    </Box>
  );
};

export default AskQuerySection;
