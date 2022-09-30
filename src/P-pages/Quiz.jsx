import { useNavigateBack } from "../P-Hooks/useNavigateBack";

const Quiz = () => {
  const { navigateBack } = useNavigateBack();

  return (
    <section className="quizPage pt-[90px]">
      <paragraph
        class="absolute text-left pl-3 pt-2
          font-bold text-gray-400 text-[24px]
          cursor-pointer
          hover:text-[26px] hover:text-gray-300"
        type="click"
        onClick={navigateBack}
      >
        ⟪
      </paragraph>

      <div
        id="quizCommingSoon"
        class="
    "
      >
        <h1 class="text-6xl text-white underline">Comming Soon</h1>
      </div>
    </section>
  );
};

export default Quiz;
