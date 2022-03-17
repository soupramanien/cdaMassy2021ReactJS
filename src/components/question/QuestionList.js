import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actionCreators } from "../../redux/store"
import Question from "./Question";

const QuestionList = () => {//props = {todos: [{}, {}]}
    const questions = useSelector(state => state.question.allQuestions);
    const dispatch = useDispatch()
    // const onAddQuestionPress = () => dispatch(actionCreators.setAddQuestionMode(true))
    return (
        <div>
            <div>
                {questions.map((question) => {
                    return <Question key={question.id.toString()} question={question} />
                })}
            </div>
            {/* <Button title="Add new question" onPress={onAddQuestionPress} /> */}
        </div>
    )
}

export default QuestionList;