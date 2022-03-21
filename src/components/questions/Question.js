import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actionCreators } from "../../redux/store"
import { QuestionsProvider, useQuestions } from "../../contexts/questions.context";
import PropositionList from "./PropositionList";


const Question = ({question}) => { //props = {todos: [{}, {}]}
    const questionsContext = useQuestions();
    return (
        <div class="questionWorkspace1">
            <div class="questiontitle">
                {question.idQuestion}. 
                {question.libelle}
                <p class="nomauteur">  {question.nomAuteur}</p>
               
            </div>

            {!questionsContext.isLoading?<PropositionList list={question.propositions}/>:<p>Loading ...</p>}
        </div>
    )
}

export default Question;