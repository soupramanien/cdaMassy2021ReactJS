import { QuestionsProvider, useQuestions } from "../../contexts/questions.context";


const QuestionTitle = ({question}) => { //props = {todos: [{}, {}]}
    return (
        <div className="questionTitle">
            
            <p className="libelleQuestion"> {question.libelle}
               <p className="nomAuteur">  {question.nomAuteur}</p>
            </p> 
        </div>


    )
}

export default QuestionTitle;