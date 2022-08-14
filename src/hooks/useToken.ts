import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../store";

export function useToken() {
  // const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.__token__ && typeof window.__token__ !== "undefined" && window.__token__ !== undefined) {
      dispatch(setToken(window.__token__));
    }
  }, []);
}
