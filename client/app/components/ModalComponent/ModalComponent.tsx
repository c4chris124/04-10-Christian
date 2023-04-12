'use client'
import React, { useCallback, useState } from 'react'
import { Box, Button, Typography, Modal } from '@mui/material'
import Form from '../Form/Form';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,

};

interface Props {
  label: string
  Form?: React.ReactElement
  onSubmit: () => void
}


const ModalComponent: React.FC<Props> = ({
  label,
  Form
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>{label}</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" align='center'>
            {label}
          </Typography>
          {/* Form */}
          {Form}
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent