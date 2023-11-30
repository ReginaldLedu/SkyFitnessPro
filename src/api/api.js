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

export function addUser(login, password) {
  return axios({
    method: "patch",
    url: `${url}/allUsers/${login}.json`,
    data: {
      password,
    },
  });
}
