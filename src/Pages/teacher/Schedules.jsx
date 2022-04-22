import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


const  Schedules = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (
      <div style={{ width: "100%", paddingLeft: '5%'}}>

        <Box sx={{ bgcolor: 'background.paper', width: '88%', backgroundColor: '#F6F6FF', borderRadius: '10px', padding: '10px 1vw', marginTop: "1vh" }}  elevation={1}>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                    Dashboard
                    </Link>
                    
                    <Typography color="text.primary">Schedules</Typography>
                </Breadcrumbs>
            </div>
        </Box>
        
        <Box sx={{ bgcolor: 'background.paper', width: '90%', backgroundColor: '#F6F6FF', borderRadius: '10px',marginTop: "2vh" }}  elevation={1}>
            <AppBar position="static" style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' , backgroundColor: '#157ABD'}} >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Emplois des Temps" {...a11yProps(0)} />
                    <Tab label="Emplois des survellance" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <img src="http://www.isgbz.rnu.tn/emploi_du_temps_folder/2021/semestre-2/1LIG/cf6ec89906782b8554e09754bb44ef97.jpeg" alt="Emploi de temps"  style={{width: '100%'}}/>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <img src="http://www.isgbz.rnu.tn/emploi_du_temps_folder/2021/semestre-2/1LIG/cf6ec89906782b8554e09754bb44ef97.jpeg" alt="Emploi de temps"  style={{width: '100%'}}/>
              </TabPanel>
            
            </SwipeableViews>
        </Box>
      </div>
    );
  }
export default Schedules