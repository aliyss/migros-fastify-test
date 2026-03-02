import { MigrosAPI } from "migros-api-wrapper";

let guestInfo: null | { token: string } = null;

export const getGuestInfo = async () => {
  if (guestInfo) {
    return guestInfo;
  }
  guestInfo = await MigrosAPI.account.oauth2.getGuestToken();
  return guestInfo;
};
