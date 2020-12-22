import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
const rootReducers = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducers;
