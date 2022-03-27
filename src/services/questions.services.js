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

async function getQuestionsDataByCanalId(canalId) {
  return customAxios.get(`/question/bycanal/${canalId}`);
}
async function postReponse(payload) {
  return customAxios.post(`/question/reponse`,JSON.stringify(payload));
}
export const questionsServices = {
  getQuestionsData,
  getQuestionsDataByCanalId,
  getQuestionData,
  postQuestion,
  postReponse,
}