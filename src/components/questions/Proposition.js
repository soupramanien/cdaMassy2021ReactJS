import { useQuestionsContext } from "../../contexts/questions.context";

const Proposition = ({proposition}) => { //props = {todos: [{}, {}]}
    const QuestionsContext = useQuestionsContext();
    function postQuestion(){
        QuestionsContext.postReponse({idAuteur:1,idQuestion:4,libelle:proposition.libelle});
    }
    return (
        <div>
            <button className="buttonstyle" onClick={postQuestion} >{proposition.libelle}</button>
        </div>
    )
}
export default Proposition;