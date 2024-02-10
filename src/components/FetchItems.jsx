import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemActions } from "../store/itemSlice";
import { fetchActions } from "../store/FetchSlice";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (fetchStatus.fetchDone) return;
    dispatch(fetchActions.markFetchingStarted());
    fetch("https://chandupingili.github.io/Myntra_Clone_API/items.json", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchActions.markFetchDone());
        dispatch(fetchActions.markFetchingFinished());
        dispatch(itemActions.addInitialItems(items[0]));
      });
    // cleaning the pages
    return () => {
      controller.abort;
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;


// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { itemActions } from "../store/itemSlice";
// import { fetchActions } from "../store/FetchSlice";

// const FetchItems = () => {
//   const fetchStatus = useSelector((store) => store.fetchStatus);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     if (fetchStatus.fetchDone) return;

//     dispatch(fetchActions.markFetchingStarted());

//     fetch("http://localhost:8081/items", { signal })
//       .then((res) => res.json())
//       .then(({ items }) => {
//         dispatch(fetchActions.markFetchDone());
//         dispatch(fetchActions.markFetchingFinished());
//         dispatch(itemActions.addInitialItems(items)); // Use items directly, not items[0]
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//         dispatch(fetchActions.markFetchingFinished()); // Ensure fetching finished on error too
//       });

//     // cleaning the pages
//     return () => {
//       controller.abort(); // Correct the function call to abort()
//     };
//   }, [fetchStatus, dispatch]); // Added dispatch to dependency array to fix missing dependency warning

//   return null; // You can return null instead of an empty fragment
// };

// export default FetchItems;
