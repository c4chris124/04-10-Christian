'use client'
import React, { useCallback, useState } from 'react'
import { Box, Button, Typography, Modal, TextField } from '@mui/material'
import { useForm } from '@/app/hooks/useForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  gap: 4
};

interface Props {
  label: string
  onSubmit: () => void
}


const ModalComponent: React.FC<Props> = ({
  label,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const { form, onChangeForm, name } = useForm({
    name: '',
    direction: '',
    email: '',
    department: '',
    municipality: '',
    phone: '',

  })

  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>{label}</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography id="modal-modal-title" variant="h5" component="h2" align='center'>
              {label}
            </Typography>
          </Box>
          <Box>
            {/* Form */}
            <TextField
              id="outlined-controlled"
              label="Nombre"
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeForm(event.target.value, 'name')
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Nombre"
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeForm(event.target.value, 'name')
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Nombre"
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeForm(event.target.value, 'name')
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default React.memo(ModalComponent)