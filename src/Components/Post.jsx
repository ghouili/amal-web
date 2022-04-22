import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { FiThumbsUp } from 'react-icons/fi';
import { BiComment } from 'react-icons/bi';
import { BiMailSend } from 'react-icons/bi';


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        alignSelf: 'center',
        marginRight: '1vw'
    },
    large_cmnt: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        alignSelf: 'center',
        marginRight: '1vw'
    },
    
  
}));

const Post = () => {

    const classes = useStyles();

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '61vw', backgroundColor: '#F6F6FF', borderRadius: '10px', marginLeft: '5vw', padding: '10px 1vw', marginTop: "20px" }}  elevation={1}>

        <div style={{ display: 'flex', flexDirection: 'row'}} >

            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/3f/3c/b0/3f3cb09eeb9fbb95c6b19915eb31cf9d.jpg" className={classes.large} />

            <div>
                <h6 style={{ fontSize: '17px', margin: 0}}>Amal Khadhraoui</h6>
                <p style={{ margin: 0}}>18/04/2022 11:57</p>
            </div>

        </div>

        <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}} > 
                    <FiThumbsUp style={{marginRight: '1vw'}} />
                    <p>25</p>
                </div>

                <p> 12 Comments</p>
            </div>
        </div>
        <Divider />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', height: '40px', padding: '0.5vw'}}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '20px'}} > 
                <FiThumbsUp style={{marginRight: '1vw'}} />
                <p>Like</p>
            </div>
            <Divider orientation='vertical'/>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '20px'}} > 
                <BiComment style={{marginRight: '1vw'}} />
                <p>comment</p>
            </div>

        </div>

        <Divider />

        <div style={{ display: 'flex', flexDirection: 'row', width: "99 %", justifyContent: 'space-evenly', marginBottom: '1vh', alignItems: 'center', marginTop: '1vh'}}>

            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/3f/3c/b0/3f3cb09eeb9fbb95c6b19915eb31cf9d.jpg" className={classes.large} />
            
            <textarea 
                style={{borderRadius: '10px', width: '85%'}}
                id="reason" 
                name="reason" 
                rows="2" 
                cols="100"
            >
            </textarea>

            <BiMailSend style={{ fontSize: '35px', marginLeft: '3%' }} />
        </div>

        <div style={{ display: 'flex', width: "80%", borderRadius: "15px", flexDirection: 'column', backgroundColor: '#F6F6FF', padding: '5px' }}  >
            <div style={{ display: 'flex', flexDirection: 'row'}} >

                <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/3f/3c/b0/3f3cb09eeb9fbb95c6b19915eb31cf9d.jpg" className={classes.large_cmnt} />

                <div>
                    <h6 style={{ fontSize: '15px', margin: 0}}>Amal Khadhraoui</h6>
                    <p style={{ fontSize: '12px', margin: 0}}>18/04/2022 11:57</p>
                </div>

            </div>

            <div  >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>

        <div>
            
        </div>
    </Box>
  )
}

export default Post