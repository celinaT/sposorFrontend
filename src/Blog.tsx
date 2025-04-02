import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from './theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
import SignInCard from './components/SignInCard';
import { Dialog, DialogContent } from '@mui/material';
import SignUp from "./components/SignUp";


export default function Blog(props: { disableCustomTheme?: boolean }) {
    const [openSignIn, setOpenSignIn] = React.useState(false);
    const [openSignUp, setOpenSignUp] = React.useState(false);


    const handleOpenSignIn = () => setOpenSignIn(true);
    const handleCloseSignIn = () => setOpenSignIn(false);


    const handleOpenSignUp = () => setOpenSignUp(true);
    const handleCloseSignUp = () => setOpenSignUp(false);

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />

            <AppAppBar
                onSignInClick={handleOpenSignIn}
                onSignUpClick={handleOpenSignUp}
            />

            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <MainContent />
                <Latest />
            </Container>
            <Footer />

            {/* Sign In Dialog */}
            <Dialog open={openSignIn} onClose={handleCloseSignIn}>
                <DialogContent>
                    <SignInCard/>
                </DialogContent>
            </Dialog>

            {/* Sign Up Dialog — replace content with your actual sign-up card later */}
            <Dialog open={openSignUp} onClose={handleCloseSignUp}>
                <DialogContent>
                    <SignUp/>
                </DialogContent>
            </Dialog>

        </AppTheme>
    );
}
