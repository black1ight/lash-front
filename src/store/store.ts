import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartSlice } from './cart/cart.slice'

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

const persistConfig = {
	key: 'lash-market',
	storage,
	whitelist: ['cart', 'user']
}

const rootReducers = combineReducers({
	cart: cartSlice.reducer
	// carousel: carouselSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducers>
