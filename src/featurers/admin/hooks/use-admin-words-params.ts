"use client";

import { useQueryStates } from "nuqs";
import { adminWordsParams } from "../server/params";

export const useAdminWordsParams = () => {
  return useQueryStates(adminWordsParams);
};
