import { createSelector } from "reselect";

const selectAlert = state => state.alert;

export const selectAlertInfo = createSelector(
  [selectAlert],
  alert => alert.alertInfo
);
