import customAxios from "./helpers/http";

let interceptor;
/*
const addAuthInterceptor = (auth) => {
  interceptor = customAxios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${auth.accessToken}`;
      return config;
    }, 
    error => {
      return Promise.reject(error.message);
    }
  );
}
const removeInterceptors = () => {
  customAxios.interceptors.request.eject(interceptor);
}
*/

async function getQuestionsData() {
  return customAxios.get('/question');
}
async function getQuestionData(id) {
  return customAxios.get(`/question/${id}`);
}
async function postQuestion(payload) {
  return customAxios.post('/question',JSON.stringify(payload));
}

export const questionsServices = {
  getQuestionsData,
  getQuestionData,
  postQuestion,
}