import React, { useState } from 'react'
import { Box, Typography, useMediaQuery, TextField, Button, Alert, Collapse, Card } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const Summary = () => {
    const navigate = useNavigate()

    // media
    const isNotMobile = useMediaQuery("(min-width:1000px)")

    // states
    const [text, setText] = useState("")
    const [summary, setSummary] = useState("")
    const [error, setError] = useState("")

    // summary ctrl
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/v1/gemini/summary', { text })
            setSummary(data)
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
            className='box2'
            style={{ marginTop: "30px" }}
            width={isNotMobile ? '40%' : '80%'}
            p={'40px'} m={'10rem auto'}
            borderRadius={5}
            sx={{ boxShadow: 5, backgroundColor: "rgb(47, 53, 67)" }}>
            <Collapse in={!!error}>
                <Alert severity='error' sx={{ mb: 2 }}>{error}</Alert>
            </Collapse>
            <form onSubmit={handleSubmit} method='POST'>
                <Typography variant='h4' sx={{ color: "white" }}>Summarize Text</Typography>
                <TextField
                    placeholder='add your text' required
                    type='text'
                    multiline={true}
                    margin='normal'
                    fullWidth value={text}
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
                    onChange={(e) => { setText(e.target.value) }}>
                </TextField>
                <Button
                    color='warning'
                    type='submit'
                    fullWidth variant='contained'
                    size='large'
                    sx={{
                        color: 'white',
                        mt: 2,
                        '&:hover': {
                            backgroundColor: "#ffffff",
                            color: "rgb(0, 0, 0)",
                            boxShadow: " 0 0 25px rgb(253, 139, 0), 0 0 100px rgb(253, 139, 0)",
                        },
                    }}>
                    Submit
                </Button>
                <Typography color="white" mt={2}>Not this tool?
                    <Link to="/menu" style={{ textDecoration: "none" }}>
                        <b style={{ color: "white", borderBottom: "2px solid white", marginLeft: "4px" }}>
                            Go back</b>
                    </Link>
                </Typography>
            </form>
            {summary ? (
                <Card sx={{ mt: 4, border: 1, boxShadow: 0, height: "500px", borderColor: "white", bgcolor: "rgb(47, 53, 67)" }}>
                    <Typography backgroundColor="rgb(47, 53, 67)" color="white" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>{summary}</Typography>
                </Card>
            ) : (
                <Card sx={{ mt: 4, border: 2, boxShadow: 0, height: "500px", borderColor: "white", bgcolor: "rgb(47, 53, 67)" }}>
                    <Typography variant='h5' backgroundColor="rgb(47, 53, 67)" color="white" sx={{ textAlign: "center", verticalAlign: "middel", lineHeight: "450px" }}>Summary will appear here</Typography>
                </Card>
            )}
        </Box >
    )
}

export default Summary
