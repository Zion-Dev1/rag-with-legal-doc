import LoadDocumentBtn from "../components/LoadDocumentBtn";
import AskQuerySection from "../components/AskQuerySection";
import useAnswerStore from "../stores/answerStore";

const Home = () => {
  const { answer } = useAnswerStore();

  return (
    <div>
      <LoadDocumentBtn />
      <AskQuerySection />

      <p>{answer}</p>
    </div>
  );
};

export default Home;
