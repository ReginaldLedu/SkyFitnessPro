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

export const { useGetCoursesQuery, useGetWorkoutsQuery, useAllUsersQuery } =
  coursesApi;
