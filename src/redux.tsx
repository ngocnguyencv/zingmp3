import { thunk } from "redux-thunk";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "./pages/store/reducers/rootReducer";

const reduxConfig = () => {
    const store = createStore(rootReducers, applyMiddleware(thunk))
    const persistor = persistStore(store)

    return { store, persistor }
}
export default reduxConfig;