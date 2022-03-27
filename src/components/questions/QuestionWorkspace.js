import QuestionList from "./QuestionList";
import React from "react";
import { QuestionsProvider, useQuestionsContext } from "../../contexts/questions.context";
import '../../styles/question.css'

const QuestionWorkspace = () => {//props = {todos: [{}, {}]}
    const questionsContext = useQuestionsContext();
    const selectedCanalId = 1;

    React.useEffect(() => {
        questionsContext.getQuestionsDataByCanalId(selectedCanalId);
    }, [])

    return (
        
        <div className
        ="questionWorkspace1">
            <h1>Sondages:</h1>
                {!questionsContext.isLoading?<QuestionList list={questionsContext.questionsData} />:<p>Loading ...</p>}
        </div>
    )
}
export default QuestionWorkspace;