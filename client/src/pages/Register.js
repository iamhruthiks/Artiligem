import React, { useState } from 'react'
import { Box, Typography, useMediaQuery, TextField, Button, Alert, Collapse } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Register = () => {

    const navigate = useNavigate()

    // media
    const isNotMobile = useMediaQuery("(min-width:1000px)")

    // states
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [passworderror, setPasswordError] = useState("")

    // register ctrl
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.")
            setTimeout(() => { setPasswordError("") }, 5000)
            return;
        }
        try {
            await axios.post('/api/v1/auth/register', { username, email, password })
            toast.success("Registration successful!")
            navigate('/login')
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
            className='box1'
            style={{ marginTop: "30px" }}
            width={isNotMobile ? '40%' : '80%'}
            p={'40px'} m={'10rem auto'}
            borderRadius={5}
            sx={{ boxShadow: 5, backgroundColor: "rgb(47, 53, 67)" }}>
            <Collapse in={!!passworderror}>
                <Alert severity='error' sx={{ mb: 2 }}>{passworderror}</Alert>
            </Collapse>
            <Collapse in={!!error}>
                <Alert severity='error' sx={{ mb: 2 }}>Email alreday registered. Please Sign Up with a different email.</Alert>
            </Collapse>
            <form onSubmit={handleSubmit} method='POST'>
                <Typography variant='h4' sx={{ color: "white" }}>Sign Up</Typography>
                <TextField
                    label="username" required
                    margin='normal'
                    fullWidth value={username}
                    sx={{
                        '& .MuiInputBase-root': {
                            color: 'white', // Input text color
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white', // Default border color
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white', // Border color on hover
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white', // Border color when focused
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white', // Label color
                            '&.Mui-focused': {
                                color: 'white', // Label color when focused
                            },
                        },
                    }}
                    onChange={(e) => { setUsername(e.target.value) }}>
                </TextField>
                <TextField
                    label="email" required
                    type='email'
                    margin='normal'
                    fullWidth value={email}
                    sx={{
                        '& .MuiInputBase-root': {
                            color: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white',
                            '&.Mui-focused': {
                                color: 'white',
                            },
                        },
                    }}
                    onChange={(e) => { setEmail(e.target.value) }}>
                </TextField>
                <TextField
                    label="password" required
                    type='password'
                    margin='normal'
                    fullWidth value={password}
                    sx={{
                        '& .MuiInputBase-root': {
                            color: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white',
                            '&.Mui-focused': {
                                color: 'white',
                            },
                        },
                    }}
                    onChange={(e) => { setPassword(e.target.value) }}>
                </TextField>
                <Button
                    className='button'
                    color='primary'
                    type='submit'
                    fullWidth variant='contained'
                    size='large'
                    sx={{
                        color: 'white',
                        mt: 2,
                        '&:hover': {
                            backgroundColor: "#ffffff",
                            color: "rgb(0, 0, 0)",
                            boxShadow: " 0 0 25px rgb(3, 233, 244), 0 0 100px rgb(3, 233, 244)",
                        },
                    }}>
                    Sign Up
                </Button>
                <Typography color="white" mt={2}>Already have an account?
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <b style={{ color: "white", borderBottom: "2px solid white", marginLeft: "4px" }}>
                            Please Login</b>
                    </Link>
                </Typography>
            </form>
        </Box >
    )
}

export default Register
