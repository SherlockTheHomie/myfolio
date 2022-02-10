import * as React from 'react';
import Container from '@mui/material/Container';
import { styled, alpha } from "@mui/material/styles";
import Button from '@mui/material/Button';

export default function Home() {
    return (
        <>
            <Container sx={{
                fontSize: 48,
                color: 'theme.palette.primary.main',
            }}>
                Hello World
                <Button sx={{
                    border: 1,
                    borderColor: "theme.palette.primary.main",
                }}>
                    Frank</Button>
            </Container>
        </>
    );
}