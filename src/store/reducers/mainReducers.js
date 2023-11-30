/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialState: false,
  user: {
    login: "admin",
    password: "admin",
    logout: false,
  },
  course: {
    name: "Йога",
    conditions: [
      "Давно хотели попробовать йогу, но не решались начать.",
      "Хотите укрепить позвоночник, избавиться от болей в спине и суставах.",
      "Ищете активность, полезную для тела и души.",
    ],
    directions: [
      "Йога для новичков",
      "Классическая йога",
      "Йогатерапия",
      "Кундалини-йога",
      "Хатха-йога",
      "Аштанга-йога",
    ],
    description:
      "Йога - это философия здорового образа жизни. Тот, кто занимается йогой, становится здоровее и выносливее, после занятий чувствует прилив сил, а также с новой силой может ощутить вкус к жизни. Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.",
  },
  currentWorkout: {
    exercises: [
      "Правильное дыхание (20 повторений)",
      "Наклон вниз, правая рука тянется вверх (10 повторений)",
      "Наклон вниз, левая рука тянется вверх (10 повторений)",
      "Перенос веса с ноги на ногу в положении сидя (20 повторений)",
    ],
    link: "Ewm-Bfg5ncg",
    name: "Стретчинг",
    title: "Основы стретчинга",
  },
};

const mainReducers = createSlice({
  name: "mainReducers",
  initialState,
  reducers: {
    submitProgress: (state) => {
      state.initialState = true;
    },
    backToInitial: (state) => {
      state.initialState = false;
    },
    userUpdate: (state, action) => {
      state.user = action.payload;
    },
    idUpdate: (state, action) => {
      state.user.id = action.payload;
    },
    loginUpdate: (state, action) => {
      state.user.login = action.payload;
    },
    passwordUpdate: (state, action) => {
      state.user.password = action.payload;
    },
    logoutUpdate: (state, action) => {
      state.user.logout = action.payload;
    },
    courseUpdate: (state, action) => {
      state.course = action.payload;
    },
    setCurrentWorkout: (state, action) => {
      state.currentWorkout = action.payload;
    },
  },
});

export const {
  submitProgress,
  backToInitial,
  userUpdate,
  idUpdate,
  loginUpdate,
  passwordUpdate,
  logoutUpdate,
  courseUpdate,
  setCurrentWorkout,
} = mainReducers.actions;
export default mainReducers;
