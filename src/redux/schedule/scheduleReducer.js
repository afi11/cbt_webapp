import {
  CHANGE_FORM_SCHEDULE,
  CLEAR_FORM_SCHEDULE,
  SCHEDULE_EDIT,
  SCHEDULE_EXAM,
  SCHEDULE_TODAY,
} from "./scheduleTypes";

const initialState = {
  schedule: {},
  schedules: [],
};

const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_SCHEDULE:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          [action.inputType]: action.inputValue,
        },
      };
    case SCHEDULE_EDIT:
      return {
        ...state,
        schedule: {
          id: action.row.id,
          day: action.row.day,
          time_start: action.row.time_start,
          duration: action.row.duration,
          desc: action.row.desc,
        },
      };
    case CLEAR_FORM_SCHEDULE:
      return {
        ...state,
        schedule: {
          id: "",
          day: "",
          time_start: "",
          duration: "",
          desc: "",
        },
      };
    case SCHEDULE_TODAY:
      return {
        ...state,
        schedules: action.value,
      };
    case SCHEDULE_EXAM:
      return {
        ...state,
        schedule: action.value,
      };
    default:
      return state;
  }
};

export default scheduleReducer;
