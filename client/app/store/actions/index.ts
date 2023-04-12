import { branchApi } from "../../api/ApiBranch"

import { IBranch } from "../../interfaces/interfaces"
import { getBranchById, getBranches } from "../reducers/branchReducer"
import { AppDispatch } from "../store"

export const fetchBranches = () => async (dispatch: AppDispatch) => {
  try {
    const response = await branchApi.get<IBranch[]>("/branch")
    const data = response.data
    dispatch(getBranches(data))
  } catch (error) {
    console.log(error)
  }
}
export const fetchBranchById =
  (_id: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await branchApi.get<IBranch[]>(`/branch/${_id}`)
      const data = response.data
      dispatch(getBranchById(data))
    } catch (error) {
      console.log(error)
    }
  }
