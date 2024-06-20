import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library

const AppointmentPage = () => {
  // Dummy data for available appointments
  const [appointments] = useState([
    { id: 1, time: '09:00 AM', available: true },
    { id: 2, time: '10:00 AM', available: false },
    { id: 3, time: '11:00 AM', available: true },
    { id: 4, time: '12:00 PM', available: true },
    { id: 5, time: '01:00 PM', available: false },
    { id: 6, time: '02:00 PM', available: true },
  ]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [appointments]);

  // Background gradients for appointments
  const darkGradients = [
    'linear-gradient(to right, #4b6cb7, #182848)', // Blue gradient
    'linear-gradient(to right, #03a9f4, #1a237e)', // Blue accent gradient
    'linear-gradient(to right, #512da8, #1a237e)', // Purple gradient
    'linear-gradient(to right, #f44336, #d32f2f)', // Red gradient
    'linear-gradient(to right, #388e3c, #1b5e20)', // Green gradient
    'linear-gradient(to right, #fbc02d, #f57f17)', // Yellow gradient
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        color: '#333',
        minHeight: '100vh',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom data-aos="fade-left" data-aos-duration="1000">
        Available Appointments
      </Typography>

      {/* Date Selection */}
      <Paper
        variant="outlined"
        sx={{
          background: 'linear-gradient(to right, #434343, #000000)',
          color: '#ffffff',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          width: '90%',
          maxWidth: '600px',
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
          Select Date
        </Typography>
        <input
          type="date"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            border: 'none',
            outline: 'none',
            width: '100%',
            padding: '10px 15px',
            marginTop: '10px',
          }}
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </Paper>

      {/* Available Appointments Grid */}
      <Grid container spacing={3} justifyContent="center">
        {appointments.map((appointment, index) => (
          <Grid key={appointment.id} item xs={12} sm={6} md={4} lg={3} data-aos="fade-up" data-aos-duration="1000">
            <Paper
              variant="outlined"
              sx={{
                background: darkGradients[index % darkGradients.length],
                color: '#ffffff',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                {appointment.time}
              </Typography>
              <Typography variant="body2">
                {appointment.available ? 'Available' : 'Booked'}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Working Hours Grid */}
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginTop: '40px' }} data-aos="fade-up" data-aos-duration="1000">
        Working Hours
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          background: 'linear-gradient(to right, #434343, #000000)',
          color: '#ffffff',
          width: '80%',
          maxWidth: '600px',
          marginTop: '20px',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '8px',
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <AccessTimeIcon fontSize="large" sx={{ color: '#ffffff', marginBottom: '10px' }} />
            <Typography variant="body1" gutterBottom>
              <strong>{day}:</strong> 8:00 AM - 10:00 PM
            </Typography>
          </Grid>
        ))}
        <Grid item xs={12} sm={6}>
          <EventIcon fontSize="large" sx={{ color: '#ffffff', marginBottom: '10px' }} />
          <Typography variant="body1" gutterBottom>
            <strong>Saturday & Sunday:</strong> Closed
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentPage;
