import { Box, Container, Paper, Typography } from "@mui/material";
import LoadDocumentBtn from "../components/LoadDocumentBtn";
import AskQuerySection from "../components/AskQuerySection";
import useAnswerStore from "../stores/answerStore";

const Home = () => {
  const { answer } = useAnswerStore();

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom>
          Legal Query Assistant
        </Typography>

        <LoadDocumentBtn />
        <AskQuerySection />

        {answer && (
          <Box mt={4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Answer:
            </Typography>
            <Typography variant="body1">{answer}</Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Home;
