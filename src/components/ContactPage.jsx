import React, { useEffect } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0', // Light background color
        color: '#333', // Dark text color
        minHeight: '100vh', // Full height of viewport
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" data-aos="fade-right" data-aos-duration="1000" gutterBottom>
        CONTACT INFORMATION
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ width: '100%' }}>
        {/* Number Card */}
        <Grid item xs={12} sm={6} md={4} data-aos="fade-left" data-aos-duration="1000">
          <Paper
            variant="outlined"
            sx={{
              backgroundColor: '#ffffff',
              color: '#333',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
              Number
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '5px' }}>
              +91 7879 701086
            </Typography>
          </Paper>
        </Grid>

        {/* Email Card */}
        <Grid item xs={12} sm={6} md={4} data-aos="fade-left" data-aos-duration="1000">
          <Paper
            variant="outlined"
            sx={{
              backgroundColor: '#ffffff',
              color: '#333',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
              Email
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '5px' }}>
              yashish393@gmail.com
            </Typography>
          </Paper>
        </Grid>

        {/* Location Card */}
        <Grid item xs={12} md={4} data-aos="fade-right" data-aos-duration="1000">
          <Paper
            variant="outlined"
            sx={{
              backgroundColor: '#ffffff',
              color: '#333',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
              Location
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '5px' }}>
              65/3 Ravi Jagrati Nagar
            </Typography>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} sm={8} md={6} data-aos="fade-up" data-aos-duration="1000">
          <Paper
            variant="outlined"
            sx={{
              backgroundColor: '#ffffff',
              color: '#333',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px', color: '#2c5364' }}>
              CONTACT US
            </Typography>

            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Grid container spacing={2}>
                {/* Name Field */}
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      sx: { backgroundColor: '#f5f5f5' }, // Light background color for input
                    }}
                  />
                </Grid>

                {/* Number and Email Fields */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    label="Number"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      sx: { backgroundColor: '#f5f5f5' }, // Light background color for input
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      sx: { backgroundColor: '#f5f5f5' }, // Light background color for input
                    }}
                  />
                </Grid>

                {/* Message Field */}
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    InputProps={{
                      sx: { backgroundColor: '#f5f5f5' }, // Light background color for input
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#2c5364', color: '#ffffff' }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
