import userReducer from "./user/user.reducer";
import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    
}

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
})