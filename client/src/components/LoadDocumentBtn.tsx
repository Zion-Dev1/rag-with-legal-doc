import { Button, Box } from "@mui/material";
import embedDocument from "../services/embedDocApi";
import useLoadStore from "../stores/loadStore";

const LoadDocumentBtn = () => {
  const { isDocLoaded, switchState } = useLoadStore();

  return (
    <Box mb={2}>
      <Button
        variant="outlined"
        fullWidth
        disabled={isDocLoaded}
        onClick={() => {
          embedDocument()
            .then(() => switchState())
            .catch((err) => console.error("Error loading document:", err));
        }}
        sx={{
          borderColor: isDocLoaded ? "green" : "primary.main",
          color: isDocLoaded ? "green" : "primary.main",

          "&.Mui-disabled": {
            borderColor: "green",
            color: "green",
            opacity: 1, // prevent default greyed-out style
          },
        }}
      >
        {isDocLoaded ? "Document Loaded" : "Load Legal Document"}
      </Button>
    </Box>
  );
};

export default LoadDocumentBtn;
