import React, {  useState } from 'react'
import { Container, Avatar, Typography, Grid, TextField, Button } from '@material-ui/core'
import LockOutLineIcon from '@material-ui/icons/LockOutlined';


const style = {
    paper : {
        marginTop :  "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar : {
        margin: 8,
        backgroundColor: "#e53935",
        width: 50,
        height: 50
    },
    form : {
        width: "100%",
       marginTop: 10
    },
    submit: {
        marginTop : "2rem",
        marginBottom: 20
    }
}


function LoginUser() {

    const [user, setUser] = useState({
        name    : '',
        surname : '',
        email   : '',
        password: ''
    });
    const handleInputChange = (e) => {
        //console.log(e.target.name)

        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    }

    const setData = (e) => {
        e.preventDefault()
        console.log('enviando datos' + user.name+ user.surname);
    }
    
        return (         
                <Container  maxWidth="md">
                    <div  style={style.paper}>
                        <Avatar style={style.avatar}>
                            <LockOutLineIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <form onSubmit={setData} style={style.form}>
                            <Grid container spacing={4}>
                                <Grid item md={6} xs={12}>
                                    <TextField name="name" value={user.name} onChange={handleInputChange} fullWidth label="Enter your name"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField name="surname" value={user.surname} onChange={handleInputChange} fullWidth label="Enter your surname"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField name="email" value={user.email} onChange={handleInputChange} fullWidth label="Enter your email"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField type="password" name="password" value={user.password} onChange={handleInputChange} fullWidth label="Enter your password"/>
                                </Grid>
                            </Grid>

                            <Grid container justify="center">
                                <Grid item md={6} xs={12}>
                                    <Button type="submit" variant="contained" fullWidth size="large" color="primary" style={style.submit}>
                                        Registrer
                                    </Button>                                
                                </Grid>    
                            </Grid>
                        </form>                     
                    </div>                 
                </Container>
        );
}

export default LoginUser;