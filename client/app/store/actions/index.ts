import { branchApi } from "../../api/ApiBranch"

import { IBranch } from "../../interfaces/interfaces"
import { getBranches } from "../reducers/branchReducer"
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
