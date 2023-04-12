import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBranch, IProductCategory } from "@/app/interfaces/interfaces"

export interface AuthState {
  Branches: IBranch[]
  Branch: IBranch[]
}

const initialState: AuthState = {
  Branches: [],
  Branch: []
} as AuthState

export const Branch = createSlice({
  name: "Branch",
  initialState,
  reducers: {
    reset: () => initialState,
    getBranches: (state, action: PayloadAction<IBranch[]>) => {
      state.Branches = action.payload
    },
    getBranchById: (state, action: PayloadAction<IBranch[]>) => {
      state.Branch = action.payload
    }
  }
})

export const { getBranches, getBranchById } = Branch.actions

export default Branch.reducer
