'use client'
import { useEffect, useState } from "react"
import { TableComponent } from "../components/Table/TableComponent"
import { IBranch } from "../interfaces/interfaces"
import ModalComponent from "../components/ModalComponent/ModalComponent"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { fetchBranches } from "../store/actions"

const Branch = () => {
    const dispatch = useAppDispatch()
    const branches: IBranch[] = useAppSelector((state) => state.branchReducer.Branches)
    const [state, setState] = useState<IBranch[] | undefined>(branches)



    useEffect(() => {
        dispatch(fetchBranches())
        console.log(branches);
        setState(branches);

    }, [])

    const onSubmit = () => {

    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 60 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h1>Sucursales</h1>
            </div>
            <ModalComponent label="Crear Nueva Sucursal" onSubmit={onSubmit} />

            <TableComponent branches={state} />
        </div>
    )
}

export default Branch