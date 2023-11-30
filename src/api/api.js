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

<<<<<<< HEAD
export function addUserFirebase(user) {
  return axios
    .post(
      "https://skyfitnesspro-abf64-default-rtdb.europe-west1.firebasedatabase.app/allUsers.json",
      { ...user },
    )
    .then((response) => response.data);
}

export function getUserFirebase(id) {
  return axios
    .get(
      `https://skyfitnesspro-abf64-default-rtdb.europe-west1.firebasedatabase.app/allUsers/${id}.json`,
    )
    .then((response) => response.data);
}



=======
>>>>>>> a3b14d3e2f0e0bf69eea2164f1b081a3ff27278b
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
