import { createSelector } from "reselect";

const selectMenuSecData = state => state.menuSecData;

export const selectSecSections = createSelector(
  [selectMenuSecData],
  menuSecData => menuSecData.sections
);
