import MenuIcon from '@mui/icons-material/Menu';
import MovieIcon from '@mui/icons-material/Movie';
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { MOVIE_LISTS, TOP_LISTS, iconComponents } from '../../../constants';

const Icon = ({ iconName }) => {
  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleDrawerToggle = () => {
    setisOpen(prevState => !prevState);
  };

  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <nav>
              <Drawer open={isOpen} onClose={handleDrawerToggle}>
                <Box sx={{ width: 250 }}>
                  <List>
                    {TOP_LISTS.map(({ title, icon, url }) => (
                      <Link
                        key={title}
                        component={RouterLink}
                        to={url}
                        sx={{ textDecoration: 'none' }}
                      >
                        <ListItem disablePadding>
                          <ListItemIcon sx={{ marginLeft: 2 }}>
                            <Icon iconName={icon} />
                          </ListItemIcon>
                          <ListItemButton onClick={handleDrawerToggle}>
                            <ListItemText primary={title} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                  <Divider />
                  {MOVIE_LISTS.map(({ title, icon, url }) => (
                    <Link
                      key={title}
                      component={RouterLink}
                      to={url}
                      sx={{ textDecoration: 'none' }}
                    >
                      <ListItem disablePadding>
                        <ListItemIcon sx={{ marginLeft: 2 }}>
                          <Icon iconName={icon} />
                        </ListItemIcon>
                        <ListItemButton onClick={handleDrawerToggle}>
                          <ListItemText primary={title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </Box>
              </Drawer>
            </nav>
            <Typography
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
                marginLeft: 2,
              }}
              variant="h5"
            >
              Betflix
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Header;
