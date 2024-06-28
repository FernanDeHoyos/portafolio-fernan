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

function MainFeaturedPost(props) {
  const { post } = props;

  const socialLinks = [
    { href: 'https://github.com', icon: <GitHubIcon />, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: <LinkedInIcon />, label: 'LinkedIn' },
    { href: 'https://facebook.com', icon: <FacebookIcon />, label: 'Facebook' },
    { href: 'https://instagram.com', icon: <InstagramIcon />, label: 'Instagram' },
  ];

  return (
    <Paper
      elevation={15}
      sx={{
        position: 'relative',
        background: '#121213',
        color: '#0F969C',
        mb: 4,
        p: 5,
        borderRadius: 2,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          border: '1px solid #03DAC6',
          transform: 'scale(1.01)',
        },
      }}
    >
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Box sx={{ display: 'flex', mt: 2 }}>
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
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: { xs: 3, md: 0 } }}>
          <Box
            sx={{
              position: 'relative',
              height: { xs: '200px', md: '110%' },
              width: { xs: '100%', sm: '300px' },
              maxWidth: '300px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(${post.image})`,
              borderRadius: '50%',
              ml: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
