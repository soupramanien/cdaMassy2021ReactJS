import { QuestionsProvider, useQuestions } from "../../contexts/questions.context";
import PropositionList from "./PropositionList";
import QuestionTitle from "./QuestionTitle";
import ReponseList from "./ReponseList";

const Question = ({question}) => { //props = {todos: [{}, {}]}
    const questionsContext = useQuestions();
    const currentUserId = 1;
    return (
        <div className="questionWorkspace1">
            <QuestionTitle question={question}></QuestionTitle>
            <div>
                {(!questionsContext.isLoading)?
                    <div>
                         {(currentUserId!=question.idAuteur)
                            ?<PropositionList list={question.propositions}/>
                            :null}
                         {(currentUserId==question.idAuteur)
                            ?<ReponseList list={question.reponses}/>
                            :null}
                    </div>
                :<p>Loading ...</p>}
            </div>
        </div>
    )
}

export default Question;