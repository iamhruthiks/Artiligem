import React, { useState } from 'react'
import { Box, Typography, useMediaQuery, TextField, Button, Alert, Collapse } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()

    // media
    const isNotMobile = useMediaQuery("(min-width:1000px)")

    // states
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // login ctrl
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/v1/auth/login', { email, password })
            toast.success("Login successful!")
            localStorage.setItem("authToken", true)
            navigate('/')
        } catch (err) {
            console.log(err)
            if (err.response.data.error) {
                setError(err.response.data.error)
            } else if (err.message) {
                setError(err.message)
            }
            setTimeout(() => { setError("") }, 5000)
        }
    }

    return (
        <Box
            style={{ marginTop: "120px" }}
            width={isNotMobile ? '40%' : '80%'}
            p={'40px'} m={'10rem auto'}
            borderRadius={5}
            sx={{ boxShadow: 5, backgroundColor: "rgb(17, 126, 0, 0.4)" }}>
            <Collapse>
                <Alert severity='error' sx={{ mb: 2 }}>{error}</Alert>
            </Collapse>
            <form onSubmit={handleSubmit} method='POST'>
                <Typography variant='h4' sx={{ color: "rgb(48,124,52)" }}>Sign In</Typography>
                <TextField
                    label="email" required
                    type='email'
                    margin='normal'
                    color='success'
                    fullWidth value={email}
                    onChange={(e) => { setEmail(e.target.value) }}>
                </TextField>
                <TextField
                    label="password" required
                    type='password'
                    margin='normal'
                    color='success'
                    fullWidth value={password}
                    onChange={(e) => { setPassword(e.target.value) }}>
                </TextField>
                <Button
                    color='success'
                    type='submit'
                    fullWidth variant='contained'
                    size='large'
                    sx={{ color: 'white', mt: 2 }}>
                    Sign Up
                </Button>
                <Typography mt={2}>Don't have an account?
                    <Link to="/register">
                        <b style={{ color: "rgb(48,124,52)" }}>
                            Please Register</b>
                    </Link>
                </Typography>
            </form>
        </Box >
    )
}

export default Login
