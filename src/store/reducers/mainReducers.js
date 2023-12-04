/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialState: false,
  initialModal: false,
  logout: false,
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
  progressForRender: [],
  currentWorkoutProgress: [],
  currentWorkout: {
    exercises: [
      "Правильное дыхание (20 повторений)",
      "Наклон вниз, правая рука тянется вверх (10 повторений)",
      "Наклон вниз, левая рука тянется вверх (10 повторений)",
      "Перенос веса с ноги на ногу в положении сидя (20 повторений)",
    ],
    exerciseTitles: [
      "Правильное дыхание",
      "Наклон вниз, правая рука тянется вверх",
      "Наклон вниз, левая рука тянется вверх",
      "Перенос веса с ноги на ногу в положении сидя",
    ],
    link: "Ewm-Bfg5ncg",
    name: "Стретчинг",
    title: "Основы стретчинга",
    targetProgress: {
      "Правильное дыхание": 4,
      "Наклон вниз, правая рука тянется вверх": 6,
      "Наклон вниз, левая рука тянется вверх": 7,
      "Перенос веса с ноги на ногу в положении сидя": 8,
    },
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
    setModal: (state) => {
      state.initialModal = true;
    },
    hideModal: (state) => {
      state.initialModal = false;
    },

    userUpdate: (state, action) => {
      state.user = action.payload;
    },
    loginUpdate: (state, action) => {
      state.user.login = action.payload;
    },
    passwordUpdate: (state, action) => {
      state.user.password = action.payload;
    },
    logoutUpdate: (state, action) => {
      state.logout = action.payload;
    },
    userCoursesUpdate: (state, action) => {
      state.user.courses = action.payload;
    },
    courseUpdate: (state, action) => {
      state.course = action.payload;
    },
    setCurrentWorkout: (state, action) => {
      state.currentWorkout = action.payload;
    },
    setExerciseTitles: (state, action) => {
      state.currentWorkout.exerciseTitles = action.payload;
    },
    setTargetProgress: (state, action) => {
      state.currentWorkout.targetProgress = action.payload;
    },
    setProgress: (state, action) => {
      state.userProgress = action.payload;
    },

    setCurrentWorkoutProgress: (state, action) => {
      state.currentWorkoutProgress.push(action.payload);
    },
    setInitialCurrentWorkoutProgress: (state) => {
      state.currentWorkoutProgress = [];
    },
    setInitialProgress: (state) => {
      state.userProgress = {};
    },
    setProgressArrayForRender: (state, action) => {
      state.progressForRender.push(action.payload);
    },
    removeProgressArrayForRender: (state) => {
      state.progressForRender = [];
    },
  },
});

export const {
  setModal,
  hideModal,
  submitProgress,
  backToInitial,
  userUpdate,
  loginUpdate,
  passwordUpdate,
  logoutUpdate,
  userCoursesUpdate,
  courseUpdate,
  setCurrentWorkout,
  setExerciseTitles,
  setTargetProgress,
  setUserProgress,
  setProgress,
  setInitialProgress,
  setCurrentWorkoutProgress,
  setInitialCurrentWorkoutProgress,
  setProgressArrayForRender,
  removeProgressArrayForRender,
} = mainReducers.actions;
export default mainReducers;
