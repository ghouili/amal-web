import React, {useState} from 'react';
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
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import swal from 'sweetalert';


import {path} from '../../utils/constants';

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


const Demande = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [attestation, setAttestation] = useState('');

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
                    
                    <Typography color="text.primary">Demandes</Typography>
                </Breadcrumbs>
            </div>
        </Box>
        
        <Box sx={{ bgcolor: 'background.paper', width: '90%', backgroundColor: '#F6F6FF', borderRadius: '10px',marginTop: "1vh" }}  elevation={1}>
          <AppBar position="static" style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' , backgroundColor: '#157ABD'}} >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Demande de Congée" {...a11yProps(0)} />
                    <Tab label="Demande de papier" {...a11yProps(1)} />
                </Tabs>
          </AppBar>
          <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              {/* <h5>formuler de demande conge</h5> */}
              <h4 style={{fontSize: '20px', margin: 0}} >formuler de demande conge</h4>
              <Box 
                component="form" 
                style={{width: '60%', marginLeft: "0%"}}
                // onSubmit={handleSubmit} 
                noValidate sx={{ mt: 1 }}
              >
                <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between',  }}>

                  <div  style={{width: '20vw',display: 'flex', flexDirection: 'column', }}>
                    <label for="from" style={{}} >From:</label>
                    <TextField
                      style={{backgroundColor: '#fff'}}

                      margin="normal"
                      required
                      // fullWidth
                      id="from"
                      // label="Email Address"
                      name="from"
                      autoComplete="date"
                      type="date"
                      autoFocus
                    />
                  </div>

                  <div style={{width: '20vw', display: 'flex', flexDirection: 'column', }}>
                    <label for="to" >To:</label>
                    <TextField
                      style={{backgroundColor: '#fff'}}
                      
                      margin="normal"
                      required
                      // fullWidth
                      id="to"
                      // label="Email Address"
                      name="to"
                      autoComplete="date"
                      type="date"
                      autoFocus
                    />
                  </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                  <label for="reason">Reason:</label>
                  <textarea id="reason" name="reason" rows="6" cols="100">

                  </textarea>

                </div>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{width: '20vw' }}
                >
                  Submit
                </Button>
                
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <h4 style={{fontSize: '20px', margin: 0}} >formulaire de papier</h4>

              <FormControl style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>

                  <InputLabel htmlFor="age-native-helper">Type of Document</InputLabel>
                  <NativeSelect
                    value={attestation}
                    onChange={(e) => setAttestation(e.target.value)}
                    inputProps={{
                      name: 'age',
                      id: 'age-native-helper',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value='travail'>Attestation de travail</option>
                    <option value='salaire'>attestation de salaire</option>
                    {/* <option value={30}>Thirty</option> */}
                  </NativeSelect>
                  <FormHelperText>choisir le type de document</FormHelperText>
                </div>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{width: '20vw' }}
                >
                  Request
                </Button>
              </FormControl>

               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '20px'}}>
                 {attestation === 'travail'?
                 
                 <img src={`${path}uploads/images/attestation_travail.jpg`} alt="attestation de travail"  style={{width: '50%', height: 'auto', borderRadius: '5px'}}/>
                : <></>}
               </div>
              
            </TabPanel>
          
          </SwipeableViews>
        </Box>
      </div>
    );
  }
export default Demande