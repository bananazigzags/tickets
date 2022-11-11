import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
  from: string,
  to: string,
  dateStart: string,
  dateFinish: string,
}

const initialState: SearchState = {
  from: "",
  to: "",
  dateStart: "",
  dateFinish: "",
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<SearchState>) => {
      return {...action.payload}
    },
  },
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer