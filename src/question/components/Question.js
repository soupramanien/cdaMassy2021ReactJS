import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actionCreators } from "../../redux/store"

const Question = ({question}) => { //props = {todos: [{}, {}]}
    return (
        <div>
            <p>{question.idQuestion}</p>
            <p>{question.libelle}</p>
            <p>{question.nomAuteur}</p>

        </div>
    )
}

export default Question;