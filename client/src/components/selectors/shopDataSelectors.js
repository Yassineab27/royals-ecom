import { createSelector } from "reselect";

const selectShopData = state => state.shopData;

// SELECT COLLECTIONS
export const selectCollections = createSelector(
  [selectShopData],
  shopData => shopData.collections
);

// SELECT COLLECTION
export const selectCollection = createSelector(
  [selectShopData],
  shopData => shopData.currentCollection
);
