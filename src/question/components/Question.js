import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actionCreators } from "../../redux/store"




const Question  = ({question}) => { //props = {todos: [{}, {}]}
    return (
        <div class="questionWorkspace1">
            <div class="questiontitle">
                {question.idQuestion}. 
                {question.libelle}
                <p class="nomauteur">  {question.nomAuteur}</p>
               
            </div>
        </div>
    )
}

export default Question;