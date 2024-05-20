import { configureStore } from '@reduxjs/toolkit'
import LanguageSlice from './Slices/LanguageSlice'

export interface RootState {
  language: ReturnType<typeof LanguageSlice>
}

const store = configureStore({
  reducer: { language: LanguageSlice },
})

export default store
