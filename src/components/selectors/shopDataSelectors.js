import { createSelector } from "reselect";

const selectShopData = state => state.shopData;

export const selectCollections = createSelector(
  [selectShopData],
  shopData => shopData.collections
);

export const selectCollection = collectionUrlParams => {
  return createSelector(
    [selectCollections],
    collections =>
      collections.find(
        collection => collection.routeName === collectionUrlParams
      )
  );
};
