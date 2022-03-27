import { QuestionsProvider, useQuestionsContext } from "../../contexts/questions.context";
import PropositionList from "./PropositionList";
import QuestionTitle from "./QuestionTitle";
import ReponseList from "./ReponseList";

const Question = ({question}) => { //props = {todos: [{}, {}]}
    const questionsContext = useQuestionsContext();
    const currentUserId = 1;

    const isAutor = (currentUserId==question.idAuteur);
    var hasAnswered = false;
    
    question.reponses.forEach((reponse) => {
        if(currentUserId == reponse.idAuteur) hasAnswered=true;
        console.log(reponse);
    })
    

    return (
        <div className="questionWorkspace1">
            <QuestionTitle question={question}></QuestionTitle>
            <div>
                {(!questionsContext.isLoading)?
                    <div>
                         {!isAutor  && !hasAnswered
                            ? <PropositionList list={question.propositions}/>
                            : <ReponseList list={question.reponses}/>}
                    </div>
                :<p>Loading ...</p>}
            </div>
        </div>
    )
}

export default Question;