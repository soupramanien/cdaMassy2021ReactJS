import QuestionList from "./QuestionList";
import { QuestionsProvider, useQuestions } from "../contexts/questions.context";
import '../question.css'
const QuestionWorkspace = () => {//props = {todos: [{}, {}]}
    const questionsContext = useQuestions();
    return (
        <div class="questionWorkspace1">
            <h1>Sondages:</h1>
                {!questionsContext.isLoading?<QuestionList list={questionsContext.questionsData}/>:<p>Loading ...</p>}
        </div>
    )
}
export default QuestionWorkspace;