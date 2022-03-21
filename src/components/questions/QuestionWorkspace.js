import QuestionList from "./QuestionList";
import React from "react";
import { QuestionsProvider, useQuestions } from "../../contexts/questions.context";
import '../../styles/question.css'

const QuestionWorkspace = () => {//props = {todos: [{}, {}]}
    const questionsContext = useQuestions();
    const currentUserId = 1;
    const selectedCanalId = 2;

    React.useEffect(() => {
        questionsContext.getQuestionsDataByCanalId(selectedCanalId);
    }, [])

    return (
        
        <div class="questionWorkspace1">
            <h1>Sondages:</h1>
                {!questionsContext.isLoading?<QuestionList list={questionsContext.questionsData} currentUserId={currentUserId}/>:<p>Loading ...</p>}
        </div>
    )
}
export default QuestionWorkspace;