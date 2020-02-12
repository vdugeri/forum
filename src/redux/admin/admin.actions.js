import adminActionTypes from "redux/admin/admin.types";

export const adminLogin = adminCreds => ({
  type: adminActionTypes.ADMIN_LOG_IN,
  payload: adminCreds
});
