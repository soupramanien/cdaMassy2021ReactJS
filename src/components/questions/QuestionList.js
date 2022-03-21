import Question from "./Question";

const QuestionList = ({list}) => {//props = {todos: [{}, {}]}
    // const onAddQuestionPress = () => dispatch(actionCreators.setAddQuestionMode(true))
    return (
        <div>
            <div>
                {list.map((question) => {
                    return <Question key={question.idQuestion.toString()} question={question} />
                })}
            </div>
            {/* <Button title="Add new question" onPress={onAddQuestionPress} /> */}
        </div>
    )
}

export default QuestionList;