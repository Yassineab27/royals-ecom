import { createSelector } from "reselect";

const selectMenuMainData = state => state.menuMainData;

export const selectMainSections = createSelector(
  [selectMenuMainData],
  menuMainData => menuMainData.sections
);
