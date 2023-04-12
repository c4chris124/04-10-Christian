'use client'
import Link from "next/link"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const Navbar = () => {
    return (
        <AppBar position="absolute">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Home
                </Typography>
                <Button color="inherit"><Link style={{ all: "unset" }} href="/branch" >Sucursales</Link></Button>
                <Button color="inherit"><Link style={{ all: "unset" }} href="/category" >Producto Categoria</Link></Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar