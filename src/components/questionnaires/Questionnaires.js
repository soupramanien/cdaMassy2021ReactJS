import { useSelector } from "react-redux";

const Questionnaires = () => {

    const afficherQuestionnaire = () => alert("ajout questionnaire ")

    // récupération des questionnaires dans le store
   const questionnaires = useSelector(state => state.questionnaires)
    return (
        <>
            <h2> Mes questionnaires</h2>
            <ul>
                {
                    questionnaires.map( (questionnaire) => 
                        <li key = {questionnaire.idQuestionnaire}>
                            <button onClick={"afficherQuestionnaire"}>V</button>
                            {questionnaire.libelle} {" "}
                            <small>
                                (C{questionnaire.idCanal}
                                ,F{questionnaire.idCreateur}
                                ,{new Date (questionnaire.dateAjout).toLocaleDateString() }
                            )
                            </small>
                        </li>               
                    )
                }
                
            </ul>
        </>
        )
        
}

export default Questionnaires;