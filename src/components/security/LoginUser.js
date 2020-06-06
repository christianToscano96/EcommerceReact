import React, { Component } from 'react'
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


export default class LoginUser extends Component {
    render() {
        return (         
                <Container  maxWidth="md">
                    <div boxShadow={3} style={style.paper}>
                        <Avatar style={style.avatar}>
                            <LockOutLineIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <form style={style.form}>
                            <Grid container spacing={4}>
                                <Grid item md={6} xs={12}>
                                    <TextField name="name" fullWidth label="Enter your name"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField name="surname" fullWidth label="Enter your surname"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField name="email" fullWidth label="Enter your email"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField type="password" name="password" fullWidth label="Enter your password"/>
                                </Grid>
                            </Grid>

                            <Grid container justify="center">
                                <Button type="submit" variant="contained" fullWidth size="large" color="primary" style={style.submit}>
                                    Registrer
                                </Button>
                            </Grid>
                        </form>
                       
                    </div>
                   
                </Container>
        );
    }
}
