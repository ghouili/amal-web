import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { IoMdImages } from 'react-icons/io';
import { BsCamera } from 'react-icons/bs';
import { FiFilePlus } from 'react-icons/fi';


const useStyles = makeStyles((theme) => ({
    
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        alignSelf: 'center'
    },
    
  
}));

const AddPost = () => {

    const classes = useStyles();


  return (
    <Box sx={{ bgcolor: 'background.paper', width: '61vw', backgroundColor: '#F6F6FF', borderRadius: '10px', marginLeft: '5vw', padding: '10px 1vw', marginTop: "20px" }}  elevation={1}>

        <div style={{ display: 'flex', flexDirection: 'row', width: "99 %", justifyContent: 'space-between', marginBottom: '1vh'}}>

            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/3f/3c/b0/3f3cb09eeb9fbb95c6b19915eb31cf9d.jpg" className={classes.large} />
            
            <textarea 
                style={{borderRadius: '10px'}}
                id="reason" 
                name="reason" 
                rows="4" 
                cols="100"
                >
            </textarea>
        </div>
        <Divider />
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: "5px" ,height: '40px', color: '#3E3E40'}}>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '19vw',}}>
                <IoMdImages style={{ fontSize: '35px', marginLeft: '1vw'}} />
                <h4>Gallery</h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '19vw',}}>
                <Divider orientation='vertical'/>
                <BsCamera style={{ fontSize: '35px', marginLeft: '1vw'}} />
                <h4>Camera</h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '19vw',}}>
                <Divider orientation='vertical'/>
                <FiFilePlus style={{ fontSize: '35px', marginLeft: '1vw'}} />
                <h4>File</h4>
            </div>

        </div>
    </Box>
  )
}

export default AddPost