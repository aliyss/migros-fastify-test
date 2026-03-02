import { MigrosAPI } from "migros-api-wrapper";

import { getGuestInfo } from "./token.js";
import type { IProductCardsOptions } from "migros-api-wrapper/dist/api/product-display/product-cards.ts";
import type { IProductSearchBody } from "migros-api-wrapper/dist/api/onesearch-oc-seaapi/product-search.ts";

export const searchForProductCards = async (productIds: number[]) => {
  const guestInfo = await getGuestInfo();
  if (!guestInfo || !guestInfo.token) {
    return;
  }
  const only5Ids = productIds.slice(0, 5);

  const productSearchBody: IProductCardsOptions = {
    productFilter: {
      uids: only5Ids,
    },
  };

  const response = await MigrosAPI.products.productDisplay.getProductCards(
    productSearchBody,
    {
      leshopch: guestInfo.token,
    },
  );

  return response;
};

export const searchForProduct = async (query: string) => {
  const guestInfo = await getGuestInfo();
  if (!guestInfo || !guestInfo.token) {
    return;
  }

  const productSearchBody: IProductSearchBody = {
    query,
  };
  const response = await MigrosAPI.products.productSearch.searchProduct(
    productSearchBody,
    {
      leshopch: guestInfo.token,
    },
  );
  return await searchForProductCards(response.productIds);
};
