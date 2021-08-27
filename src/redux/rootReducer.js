import { combineReducers } from "redux";
import scheduleReducer from "./schedule/scheduleReducer";
import modalReducer from "./modal/modalReducer";
import questionReducer from "./question/questionReducer";
import authReducer from "./auth/authReducer";
import examReducer from "./exam/examReducer";
import dashReducer from "./dashboard/dashReducer";

const rootReducer = combineReducers({
  schedule: scheduleReducer,
  question: questionReducer,
  modal: modalReducer,
  auth: authReducer,
  exam: examReducer,
  dashboard: dashReducer,
});

export default rootReducer;
