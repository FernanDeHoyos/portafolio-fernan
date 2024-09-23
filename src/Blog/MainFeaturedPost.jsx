import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const MainFeaturedPost = (props, {contactInfo}) => {
  const { post } = props;

  const socialLinks = [
    { href: 'https://github.com/FernanDeHoyos', icon: <GitHubIcon />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/fernan-de-hoyos-290072197/', icon: <LinkedInIcon />, label: 'LinkedIn' },
    { href: 'https://web.facebook.com/fernan.david.5832', icon: <FacebookIcon />, label: 'Facebook' },
    { href: 'https://www.instagram.com/fernandehoyos/', icon: <InstagramIcon />, label: 'Instagram' },
  ];

  return (
    <Paper
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          width: '300%',
          height: {xs: '100%', sm: '150%', md: '150%'},
          backgroundImage: 'url(./back.svg)',
          backgroundRepeat: 'no-repeat',
          bottom: 0,
        },
        color: '#0F969C',
        height: { xs: 'auto', md: 500 }, // Ajustar la altura en móviles
        mb: 4,
        p: 3,
        borderRadius: 2,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transition: 'hover 0.3s ease-in-out',
        '&:hover': {
          border: '1px solid #03DAC6',
        },
      }}
    >
      <Grid container spacing={3}
       sx={{
        display: 'flex', 
        flexDirection: {xs: 'column', sm: 'row'}, 
        justifyContent: 'space-evenly', 
        height: {xs: 400},
        flexWrap: {xs: 'nowrap', sm: 'nowrap', md: 'wrap'}}} >

        {/* Contenedor para el texto y enlaces sociales */}
        <Grid item xs={12} sm={6} sx={{display: 'flex', flexDirection: 'column'}}>
        <Grid item xs={12} md={6} sx={{width: '100%'}} >
          <Box
            sx={{
              width: { sm: 300, md:400},
              position: 'relative',
              p: 3,
              textAlign: { xs: 'center', md: 'left' }, 
            }}
          >
            <Typography component="h1" variant="h4" color="inherit" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
              {post.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph sx={{ fontSize: { xs: '1rem', md: '1rem' } }}>
              {post.description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mt: 2 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  color="inherit"
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    mr: 1,
                    '&:hover': {
                      border: '1px solid #03DAC6',
                      transform: 'scale(1.01)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Contenedor para la información de contacto */}
        <Grid item xs={12} md={6} sx={{width: '100%', display: {xs: 'none', sm: 'block', md: 'block', lg: 'block'}}}>
          <Typography variant="subtitle1" color="inherit" paragraph sx={{ fontSize: { xs: '0.8rem', md: '0.8rem' }}}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AlternateEmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="fernandehoyos93@gmail.com" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneAndroidIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="+57 3136601690" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOnIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="La pradera, Monteria - Cordoba" />
              </ListItem>
            </List>
          </Typography>
        </Grid>
        </Grid>
        {/* Contenedor para la imagen */}
        <Grid item xs={12} md={5} 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          mt: {xs: 0, sm: 5, md: 5},
          mb: {xs: 0, sm: 3, md: 3},
          pb: {xs: 3, sm: 0, md: 0},
          pt: { xs: 3, md: 0 } }}>
          <Box
            sx={{
              marginRight: {xs: '25%', sm: 0, md: 0},
              marginLeft: {xs: '25%', sm: 0, md: 0},
              position: 'relative',
              height: { xs: '150%', sm: '100%', md: '150%' }, // Ajustar la altura en diferentes tamaños
              width: { xs: '80%', sm: '300px', md: '300px' }, // Ajustar el ancho
              backgroundSize: 'cover',
              backgroundImage: 'url(./foto3x4_.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderRadius: '10%',
              transition: 'filter 0.3s ease-in-out',
              
            }}
            onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.8))'}
            onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};


MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

