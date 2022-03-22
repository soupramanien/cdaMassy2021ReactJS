import React from 'react';
import { questionsServices } from '../services/questions.services';

const QuestionsContext = React.createContext();

const QuestionsProvider =({children}) => {
    const [questionsData, setQuestionsData]  = React.useState(null);
    const [isLoading, isLoadingChange] = React.useState(true);
    const [errorMessage, setErrorMessage] = React.useState(undefined);

    const selectedCanalId = 2;

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
    React.useEffect(() => {
        //getQuestionsDataByCanalId(selectedCanalId);
    }, [])

    return (
        <QuestionsContext.Provider value = {{questionsData, isLoading, errorMessage, postQuestion, getQuestionsDataByCanalId}}>  {/* C'est ca qu'on utilise */}
            {children}
        </QuestionsContext.Provider>
    );
    
}
function useQuestions() {
    const context = React.useContext(QuestionsContext);
    if(!context) throw new Error('useQuestions must be use with and QuestionsProvider');
    return context;
}
export {QuestionsProvider, useQuestions}