'use client'
import { TextField, FormControl, Button } from "@mui/material";
import { useState, memo } from 'react'

interface Props {
    inputs?: React.ReactElement
}

const Form = ({ inputs }: Props) => {
    // const [first, setfirst] = useState(second)
    return (
        <>
            <form autoComplete="off"
            // onSubmit={handleSubmit}
            >
                {/* inputs */}
                {inputs}

                <Button variant="outlined" color="secondary" type="submit">Login</Button>

            </form>
        </>
    )
}

export default Form