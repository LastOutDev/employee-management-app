import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';



export default function CreatePost({ setPostTitle, setPostContent, handleAction }) {
    return (
        <Container maxWidth="lg" centered style={{
            paddingTop: "120px",
            paddingBottom: '120px',
            textAlign: 'center'
          }}>
            <Grid container spacing={1} alignItems="center" justifyContent="center">

                <Grid item xs={6} md={12} style={{
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '40px',
                    textAlign: 'center'
                }}>
                <Typography variant="h4" style={{
                        paddingBottom: "40px",
                    }}>New Post</Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    <TextField
                        id="email"
                        label="Enter the Title"
                        variant="outlined"
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                    <TextField
                        id="password"
                        label="Enter the Content"
                        variant="outlined"
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                </Box>

                <Button title="Add Post" handleAction={handleAction}/>
                </Grid>
                </Grid>
        </Container>
    );
}