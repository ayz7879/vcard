import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { grey } from '@mui/material/colors';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library

// Mock data for products
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://m.media-amazon.com/images/I/61abLrCfF7L._SX679_.jpg',
    price: '$256.99',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Pellentesque eu ante in nisi placerat venenatis a sit amet lectus.',
    imageUrl: 'https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg',
    price: '$900.99',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Donec a nisi non augue luctus auctor.',
    imageUrl: "https://m.media-amazon.com/images/I/81vxWpPpgNL._SL1500_.jpg",
    price: '$1049.99',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Fusce condimentum, ligula sed volutpat vestibulum, libero arcu gravida libero.',
    imageUrl: 'https://m.media-amazon.com/images/I/714BfLMFR6L._SX679_.jpg',
    price: '$551.99',
  },
];

const Product = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS without once option
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9', // Light background
        minHeight: '100vh',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center', marginBottom: '40px', color: grey[800], fontWeight: 'bold' }}
      >
        PRODUCTS INFORMATION
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ width: '100%', padding: '0 20px' }}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} data-aos="fade-up" data-aos-duration="1000">
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <CardMedia
                component="img"
                image={product.imageUrl}
                alt={product.name}
                sx={{
                  height: '200px',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  objectFit: 'cover',
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  backgroundColor: '#ffffff', // White background for content area
                  borderBottomLeftRadius: '8px',
                  borderBottomRightRadius: '8px',
                  textAlign: 'center',
                  color: grey[800], // Text color
                }}
              >
                <Typography variant="h5" component="div" sx={{ mt: 2, fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, minHeight: '60px' }}>
                  {product.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
