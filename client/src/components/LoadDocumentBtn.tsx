import { Button } from "@mui/material";
import { embedDocument } from "../services/embedDocApi";
import useLoadStore from "../stores/loadStore";

const LoadDocumentBtn = () => {
  const { isDocLoaded, switchState } = useLoadStore();

  return (
    <Button
      sx={{ my: "20px" }}
      variant="contained"
      color="primary"
      disabled={isDocLoaded}
      onClick={() => {
        embedDocument()
          .then((_) => switchState())
          .catch((error) => console.error("Error loading document:", error));
      }}
    >
      Load Legal Document
    </Button>
  );
};

export default LoadDocumentBtn;
