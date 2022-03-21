import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actionCreators } from "../../redux/store"
import { QuestionsProvider, useQuestions } from "../../contexts/questions.context";
import PropositionList from "./PropositionList";

const Question = ({question}) => { //props = {todos: [{}, {}]}
    const questionsContext = useQuestions();
    return (
        <div>
            <p>{question.idQuestion}</p>
            <p>{question.libelle}</p>
            <p>{question.nomAuteur}</p>

            {!questionsContext.isLoading?<PropositionList list={question.propositions}/>:<p>Loading ...</p>}

        </div>
    )
}

export default Question;