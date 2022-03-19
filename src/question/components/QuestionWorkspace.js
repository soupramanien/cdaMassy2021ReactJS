import QuestionList from "./QuestionList";
import { QuestionsProvider, useQuestions } from "../contexts/questions.context";

const QuestionWorkspace = () => {//props = {todos: [{}, {}]}
    const questionsContext = useQuestions();
    return (
        <div>
            <h1>Sondages:</h1>
                {!questionsContext.isLoading?<QuestionList list={questionsContext.questionsData}/>:<p>Loading ...</p>}
        </div>
    )
}
export default QuestionWorkspace;