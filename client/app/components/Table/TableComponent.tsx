'use client'
import {
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
} from '@mui/material'
import { IBranch } from '../../interfaces/interfaces'
import ModalComponent from '../ModalComponent/ModalComponent'
interface TableProps {
    branches: IBranch[] | undefined
}

const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
}


const handleOnSubmit = () => {

}


export const TableComponent = ({ branches }: TableProps) => {
    return (
        <div style={{ paddingTop: 10, }}>
            <div style={{ width: 750 }}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre de Sucursal</TableCell>
                                <TableCell align="left">Creada</TableCell>
                                <TableCell align="left">Actualizada</TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {branches?.map((e: IBranch) => (
                                <TableRow key={e._id}>
                                    <TableCell>{e.name}</TableCell>
                                    <TableCell>{formatTimestamp(e.createdAt)}</TableCell>
                                    <TableCell>{formatTimestamp(e.updatedAt)}</TableCell>
                                    <TableCell><ModalComponent label='Editar' onSubmit={handleOnSubmit} /></TableCell>
                                    <TableCell><Button>Inactivar</Button></TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
