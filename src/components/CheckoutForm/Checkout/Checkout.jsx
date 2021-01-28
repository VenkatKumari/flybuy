import { useState } from 'react';

import { Button, CircularProgress, Divider, Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../paymentForm';



const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const Confirmation = () => {
        <div>Confirmation</div>
    }

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />
    return (<>
    <div className={classes.toolbar}/>
    <main className={classes.layout}>
        <Paper className={classes.paper} elevation={3}>
            <Typography variant='h4' align='center'>Checkout</Typography>
            <Stepper activeStep={0} className={classes.stepper}>{steps.map(step => (
                <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                </Step>
            ))}</Stepper>
            {activeStep === steps.length ? <Confirmation /> : <Form/>}
        </Paper>
    </main>
    </>  );
}
 
export default Checkout;