import * as React from 'react';
import { Alert, Snackbar } from '@mui/material';

interface PopupProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const Popup = ({ open, setOpen }: PopupProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity='success' sx={{ width: '100%' }}>
        Payment Accepted
      </Alert>
    </Snackbar>
  );
};
