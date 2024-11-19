import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Button } from '@mui/material';

const App = () => {
    // État pour gérer la réponse sélectionnée
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // Gestion de la sélection de réponse
    const handleAnswer = (answer) => {
        setSelectedAnswer(answer); // Stocke la réponse choisie
    };

    return (
        <div>
            {/* Barre de navigation */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sondage très important
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Contenu principal */}
            <Container sx={{ marginTop: 4 }}>
                {!selectedAnswer ? (
                    <>
                        <Typography variant="h4" align="center" gutterBottom>
                            Pour vous Nico est :
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom>
                            Veuillez sélectionner une option ci-dessous.
                        </Typography>

                        {/* Options de réponse */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                                    <Typography variant="h6">Réponse 1</Typography>
                                    <Typography variant="body1">Un connard.</Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ marginTop: 2 }}
                                        onClick={() => handleAnswer('un connard')}
                                    >
                                        Choisir Réponse 1
                                    </Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                                    <Typography variant="h6">Réponse 2</Typography>
                                    <Typography variant="body1">Un énorme connard.</Typography>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{ marginTop: 2 }}
                                        onClick={() => handleAnswer('un énorme connard')}
                                    >
                                        Choisir Réponse 2
                                    </Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    // Message de remerciement
                    <Typography variant="h5" align="center" gutterBottom sx={{ marginTop: 4 }}>
                        Nico est donc {selectedAnswer} !
                    </Typography>
                )}
            </Container>
        </div>
    );
};

export default App;
