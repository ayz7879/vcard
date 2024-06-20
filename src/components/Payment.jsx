import React, { useEffect } from 'react';
import { Box, Typography, Grid, Paper, Card } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library

const Payment = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS without once option
  }, []);

  // Define gradient backgrounds for cards
  const cardGradients = [
    'linear-gradient(to right, #00b4db, #0083b0)', // Light blue gradient
    'linear-gradient(to right, #f2994a, #f2c94c)', // Orange gradient
    'linear-gradient(to right, #a8e063, #56ab2f)', // Green gradient
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0', // Light background color
        color: '#333333',
        minHeight: '100vh', // Full height of viewport
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" data-aos="fade-up" data-aos-duration="1000" gutterBottom sx={{ textAlign: 'center', marginBottom: '40px' }}>
        PAYMENTS INFORMATION
      </Typography>

      {/* Bank Details Card */}
      <Paper
        variant="outlined"
        sx={{
          backgroundColor: '#ffffff',
          color: '#333333',
          width: "90%",
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Typography variant="h5" gutterBottom>
          Bank Details
        </Typography>
        <AccountBalanceIcon fontSize="large" />
        <Typography variant="body1" gutterBottom>
          Bank Name: SBI Bank
        </Typography>
        <Typography variant="body1" gutterBottom>
          Account Number: XXXX1234
        </Typography>
        <Typography variant="body1" gutterBottom>
          IFSC Code: XXXX1234
        </Typography>
      </Paper>

      {/* QR Code and Status Card */}
      <Paper
        variant="outlined"
        sx={{
          backgroundColor: '#ffffff',
          color: '#333333',
          width: "90%",
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Typography variant="h5" gutterBottom>
          QR Code and Status
        </Typography>
        <QrCodeIcon fontSize="large" />
        <Typography variant="body1" gutterBottom>
          Status: Payment Sent
        </Typography>
        <Typography variant="body1" gutterBottom>
          Terms & Conditions Apply
        </Typography>
      </Paper>

      {/* Payment Methods */}
      <Grid container spacing={3} justifyContent="center" sx={{ width: '90%' }}>
        {/* Paytm */}
        <Grid item xs={12} sm={6} md={4} data-aos="flip-right" data-aos-duration="1000">
          <Card
            variant="outlined"
            sx={{
              backgroundImage: cardGradients[0],
              color: '#ffffff',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              height: '100%',
            }}
          >
            <MonetizationOnIcon fontSize="large" />
            <Typography variant="body1" gutterBottom>
              Paytm
            </Typography>
            <Typography variant="body2" gutterBottom>
              1234 456789
            </Typography>
          </Card>
        </Grid>

        {/* PhonePe */}
        <Grid item xs={12} sm={6} md={4} data-aos="flip-right" data-aos-duration="1000">
          <Card
            variant="outlined"
            sx={{
              backgroundImage: cardGradients[1],
              color: '#ffffff',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              height: '100%',
            }}
          >
            <SmartphoneIcon fontSize="large" />
            <Typography variant="body1" gutterBottom>
              PhonePe
            </Typography>
            <Typography variant="body2" gutterBottom>
              99999 99999
            </Typography>
          </Card>
        </Grid>

        {/* Google Pay */}
        <Grid item xs={12} sm={6} md={4} data-aos="flip-right" data-aos-duration="1000">
          <Card
            variant="outlined"
            sx={{
              backgroundImage: cardGradients[2],
              color: '#ffffff',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              height: '100%',
            }}
          >
            <PaymentIcon fontSize="large" />
            <Typography variant="body1" gutterBottom>
              Google Pay
            </Typography>
            <Typography variant="body2" gutterBottom>
              77777 77777
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Payment;
