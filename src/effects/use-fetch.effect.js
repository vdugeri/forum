import { useEffect, useReducer } from "react";
import axios from "utils/http-client";

const actionTypes = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE"
};

const useFetchReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        loading: true,
        isError: false
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        data: payload
      };
    case actionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        isError: true
      };
    default:
      return state;
  }
};

const useFetch = (url, initialData) => {
  const [state, dispatch] = useReducer(useFetchReducer, {
    isError: false,
    loading: false,
    data: initialData
  });
  useEffect(() => {
    console.log(url);
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: actionTypes.FETCH_START });

      try {
        const res = await axios.get(url);
        if (!didCancel) {
          dispatch({
            type: actionTypes.FETCH_SUCCESS,
            payload: res.data
          });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({
            type: actionTypes.FETCH_FAILURE,
            payload: error
          });
        }
      }
    };
    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state];
};

export default useFetch;
