import './App.css';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Material UI App</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ pt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button onClick={openDialog} variant="contained">
          Открыть диалоговое окно
        </Button>
      </Container>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Использовать Material UI?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это простое React приложение с использованием Material UI. Вы можете
            настроить его по своему усмотрению.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Отмена</Button>
          <Button>Согласен</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
