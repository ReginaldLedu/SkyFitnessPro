/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://skyfitnesspro-abf64-default-rtdb.europe-west1.firebasedatabase.app/",
  }),
  endpoints: (build) => ({
    getCourses: build.query({
      query: () => ({
        url: "courses.json",
      }),
    }),
    getWorkouts: build.query({
      query: () => ({
        url: "workouts.json",
      }),
    }),
    allUsers: build.query({
      query: () => ({
        url: "allUsers.json",
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useGetWorkoutsQuery, useAllUsersQuery } =
  coursesApi;

const url =
  "https://skyfitnesspro-abf64-default-rtdb.europe-west1.firebasedatabase.app";

export function getUser(login) {
  return axios({
    method: "get",
    url: `${url}/allUsers/${login}.json`,
  }).then((response) => response.data);
}

export function getWorkouts() {
  return axios({
    method: "get",
    url: `${url}/workouts.json`,
  }).then((response) => response.data);
}

export function getProgress(courseName) {
  return axios({
    method: "get",
    url: `${url}/progress/${courseName}.json`,
  }).then((response) => response.data);
}

export function addUser(login, password) {
  return axios({
    method: "patch",
    url: `${url}/allUsers/${login}.json`,
    data: {
      password,
    },
  });
}

export function addCoursesYoga({ login, yoga }) {
  return axios({
    method: "patch",
    url: `${url}/allUsers/${login}/courses.json`,
    data: {
      yoga,
    },
  });
}

export function addCoursesStretching({ login, stretching }) {
  return axios({
    method: "patch",
    url: `${url}/allUsers/${login}/courses.json`,
    data: {
      stretching,
    },
  });
}

export function addCoursesDance_fitness({ login, dance_fitness }) {
  return axios({
    method: "patch",
    url: `${url}/allUsers/${login}/courses.json`,
    data: {
      dance_fitness,
    },
  });
}

export function addCoursesStep_aerobics({ login, step_aerobics }) {
  return axios({
    method: "patch",
    url: `${url}/allUsers/${login}/courses.json`,
    data: {
      step_aerobics,
    },
  });
}

export function addCoursesBody_flex({ login, body_flex }) {
  return axios({
    method: "patch",
    url: `${url}/allUsers/${login}/courses.json`,
    data: {
      body_flex,
    },
  });
}

export function deleteUser(login) {
  return axios({
    method: "delete",
    url: `${url}/allUsers/${login}.json`,
  });
}

export function addUpdateUser(login, password, courses) {
  return axios({
    method: "patch",
    url: `${url}/allUsers/${login}.json`,
    data: {
      password,
      courses,
    },
  });
}
