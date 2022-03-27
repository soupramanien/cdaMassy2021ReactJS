import React from 'react';
import { questionsServices } from '../services/questions.services';

/* React Context caveats:
* The issue with this approach lies in the way that React context triggers a re-render.
* If you are passing down an object on your React context provider 
* and any property on it updates, what happens? 
* Any component which consumes that context will re-render.
*/


// Le Contexte nous permet de transmettre une prop profondément dans l’arbre des
// composants sans la faire passer explicitement à travers tous les composants.
// Crée un contexte pour la liste de question (rien en parametre = aucune valeur par défaut).
// Crée un contexte:
const QuestionsContext = React.createContext();

// Creation du composant qui servira de provider de contexte au composant children
const QuestionsProvider =({children}) => {

    // Declare differents etats pour mon contexte
    const [questionsData, setQuestionsData]  = React.useState(null);
    const [isLoading, isLoadingChange] = React.useState(true);
    const [errorMessage, setErrorMessage] = React.useState(undefined);
    
    // fonction qui fera lla passerelle entre notre composant et notre service
    // et mets a jour l'etat de notre contexte
    async function getQuestionsDataByCanalId(canalId){
        questionsServices.getQuestionsDataByCanalId(canalId)
        .then( response => {
            setQuestionsData(response.data);
            isLoadingChange(false);
            console.log(response.data); 
        })
        .catch(error => {
            setErrorMessage(error.message);
        })
    }

    async function getQuestionsData(){
        questionsServices.getQuestionsData()
        .then( response => {
            setQuestionsData(response.data);
            isLoadingChange(false);
            console.log(response.data); 
        })
        .catch(error => {
            setErrorMessage(error.message);
        })
    }

    async function postQuestion(payload){
        questionsServices.postQuestion(payload)
        .then( response => {
            setQuestionsData([...questionsData, response.data]);
            console.log(response.data); 
        })
        .catch(error => {
            setErrorMessage(error.message);
        })
    }


    // payload doit contenir{ idAuteur, idQuestion, libelleReponse}
    async function postReponse(payload){
        
        questionsServices.postReponse(payload)
        .then( response => {

            console.log(response.data);
            setQuestionsData([...questionsData.map(question=> { 
                /*console.log("this->",{...question, reponses: [...question.reponses, response.data ]})*/
                return question.idQuestion==payload.idQuestion
                    ? {...question, reponses: [...question.reponses, response.data ]}
                    : question
             } )]);
        })
        .catch(error => {
            setErrorMessage(error.message);
        })
    }

    // Permet d'executer des opération une fois que le composant est monté,
    // puis lorsque l'etat de notre contexte est modifie,
    // Le return du useEffect est exécuté avant que le composant soit démonté
    // 
    React.useEffect(() => {
        // fonctionExecuteeApresMontage();
        // return fonctionExecuteAuDemontage();
    }, []/* sans ce tableau le useEffect s execute a chaque update du composant, si [questionsData] useEffect à chaque changement d'état de questionData, on peut en mettre plusieurs*/ )

    return (  
            // return un provider avec pour props les etats et function accessible depuis les composants providé grace aux hooks
        <QuestionsContext.Provider value = {{questionsData, isLoading, errorMessage, postQuestion, getQuestionsDataByCanalId, postReponse}}>  {/* C'est ca qu'on utilise */}
            {children}
        </QuestionsContext.Provider>
    );
    
}

// declaration du hook personnalisé qui nous permet ensuite d'acceder au contexte
function useQuestionsContext() {
    const context = React.useContext(QuestionsContext);
    if(!context) throw new Error('useQuestions must be use with and QuestionsProvider');
    return context;
}
export {QuestionsProvider, useQuestionsContext}