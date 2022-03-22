import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actionCreators } from "../../redux/store"
import { QuestionsProvider, useQuestions } from "../../contexts/questions.context";
import PropositionList from "./PropositionList";


const Question = ({question}) => { //props = {todos: [{}, {}]}
    const questionsContext = useQuestions();
    return (
        <div className="questionWorkspace1">
            <div className="questiontitle">
                {question.idQuestion}. 
                {question.libelle}
                <p className="nomauteur">  {question.nomAuteur}</p>
                {!questionsContext.isLoading?<PropositionList list={question.propositions}/>:<p>Loading ...</p>}
            </div>
        </div>
    )
}

export default Question;