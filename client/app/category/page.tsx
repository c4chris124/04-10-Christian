'use client'

import { TableComponent } from "../components/Table/TableComponent"



const Category = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 60 }}>
            <h1>Producto Categoria</h1>
            <TableComponent />
        </div>
    )
}

export default Category