import Proposition from "./Proposition";

const PropositionList = ({list}) => {//props = {todos: [{}, {}]}
    // const onAddQuestionPress = () => dispatch(actionCreators.setAddQuestionMode(true))
    const isNoProposition = (list.length <1);
    return (
        <div>
            <div>
                <p>Séléctionnez une réponse:</p>

                {isNoProposition?
                    <div>
                        <form class="input_form">
                            <input type="text" class="input_form__field" placeholder="Réponse" />
                            <button type="button" class="input_btn input_btn--primary input_btn--inside input_uppercase">Envoyer</button>
                        </form>
                    </div>
                    : list.map((proposition) => {
                    return <Proposition key={proposition.idProposition.toString()} proposition={proposition} />
                })}

            </div>
            {/* <Button title="Add new question" onPress={onAddQuestionPress} /> */}
        </div>
    )
}

export default PropositionList;