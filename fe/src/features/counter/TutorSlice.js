/** @format */

import { createSlice } from "@reduxjs/toolkit";
const initial = {
  listoftutor: [],
  maxmoney: 0,
  minmoney: 0,
  filtertutor: [],
  filter: {
    maxmoney: 100000,
    minmoney: 0,
    subjectname: "",
    gender: "",
    level: "",
    schedule: [
      { day: "T2", morning: false, afternoon: false, night: false },
      { day: "T3", morning: false, afternoon: false, night: false },
      { day: "T4", morning: false, afternoon: false, night: false },
      { day: "T5", morning: false, afternoon: false, night: false },
      { day: "T6", morning: false, afternoon: false, night: false },
      { day: "T7", morning: false, afternoon: false, night: false },
      { day: "CN", morning: false, afternoon: false, night: false },
    ],
  },
};
export const TutorSlice = createSlice({
  name: "tutor",
  initialState: initial,
  reducers: {
    AddNewList: (state, action) => {
      state.listoftutor = action.payload;
      state.filtertutor = action.payload;
      state.maxmoney = Math.max(...state.listoftutor.map((t) => t.maxmoney));
      state.minmoney = Math.min(...state.listoftutor.map((t) => t.maxmoney));
    },
    filterAlist: (state, action) => {
      state.filtertutor = state.listoftutor.filter((tutor) => {
        if (tutor.minmoney > state.filter.minmoney) return false;
        if (tutor.minmoney < state.filter.maxmoney) return false;
        if (state.filter.level && tutor.level !== state.filter.level)
          return false;
        const temp = tutor.subjects.filter(
          (subject) => subject.name === state.filter.subjectname
        );
        if (state.filter.subjectname && temp.length === 0) {
          return false;
        }
        if (state.filter.schedule.length > 0) {
          const temp2 = state.filter.schedule.filter((day, index) => {
            console.log(tutor.general[index].morning, day.morning);
            if (day.morning && tutor.general[index].morning) return true;
            if (day.afternoon && tutor.general[index].afternoon) return true;
            if (day.night && tutor.general[index].night) return true;
            return false;
          });
          if (temp2.length > 0) return false;
        }
        if (state.filter.gender && tutor.gender !== state.filter.gender)
          return false;
        return true;
      });
    },
    filterthelist: (state, action) => {
      state.filter.maxmoney = action.payload.maxmoney;
      state.filter.minmoney = action.payload.minmoney;
      state.filter.subjectname = action.payload.subjectname;
      state.filter.gender = action.payload.gender;
      state.filter.level = action.payload.filterlevel;
      state.filter.schedule = action.payload.schedule;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddNewList, filterAlist, filterthelist } = TutorSlice.actions;

export default TutorSlice.reducer;
