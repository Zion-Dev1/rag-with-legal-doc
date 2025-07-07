import { Button } from "@mui/material";
import { embedDocument } from "../services/embedDocApi";

const LoadDocumentBtn = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        embedDocument()
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error loading document:", error);
          });
      }}
    >
      Load Legal Document
    </Button>
  );
};

export default LoadDocumentBtn;
