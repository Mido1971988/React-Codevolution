import { Snackbar, Button, Alert } from '@mui/material'
import { useState } from 'react'

export const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }
    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                message='Form submitted successfully!'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='success'>
                Form submitted successfully!
                </Alert>
            </Snackbar>
        </>
    )
}