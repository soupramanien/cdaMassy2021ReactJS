import { QuestionsProvider, useQuestions } from "../../contexts/questions.context";
import PropositionList from "./PropositionList";
import ReponseList from "./ReponseList";

const Question = ({question}) => { //props = {todos: [{}, {}]}
    const questionsContext = useQuestions();
    const currentUserId = 2;
    return (
        <div className="questionWorkspace1">
            <div className="questiontitle">
                {question.idQuestion}. 
                {question.libelle}
                <p className="nomauteur">  {question.nomAuteur}</p>
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