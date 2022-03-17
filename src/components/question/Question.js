import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actionCreators } from "../../redux/store"

const Question = () => { //props = {todos: [{}, {}]}
    return (
        <div>
            <h1> Une question s affiche ici</h1>
        </div>
    )
}

export default Question;