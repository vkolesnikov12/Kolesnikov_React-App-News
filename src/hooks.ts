import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "./redux/store";
import store from "./redux/store";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
