import { createSelector } from "reselect";

const selectShopData = state => state.shopData;

// SELECT COLLECTIONS
export const getCollections = createSelector(
  [selectShopData],
  shopData => shopData.collections
);
export const selectCollections = createSelector(
  [getCollections],
  collections => collections
);

// SELECT COLLECTION
export const getCurrentCollection = createSelector(
  [selectShopData],
  shopData => shopData.currentCollection
);
export const selectCollection = createSelector(
  [getCurrentCollection],
  currentCollection => currentCollection
);
