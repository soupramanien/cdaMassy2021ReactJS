import { QuestionsProvider, useQuestions } from "../../contexts/questions.context";
import PropositionList from "./PropositionList";
import QuestionTitle from "./QuestionTitle";
import ReponseList from "./ReponseList";

const Question = ({question}) => { //props = {todos: [{}, {}]}
    const questionsContext = useQuestions();
    const currentUserId = 3;

    const isAutor = (currentUserId==question.idAuteur);
    var hasAnswered = false;
    
    question.reponses.map((reponse) => {
        if(currentUserId == reponse.idAuteur) hasAnswered=true;
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