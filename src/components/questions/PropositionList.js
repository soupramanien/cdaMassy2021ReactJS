import Proposition from "./Proposition";

const PropositionList = ({list}) => {//props = {todos: [{}, {}]}
    // const onAddQuestionPress = () => dispatch(actionCreators.setAddQuestionMode(true))
    return (
        <div>
            <div>
                {list.map((proposition) => {
                    return <Proposition key={proposition.idProposition.toString()} proposition={proposition} />
                })}
            </div>
            {/* <Button title="Add new question" onPress={onAddQuestionPress} /> */}
        </div>
    )
}

export default PropositionList;