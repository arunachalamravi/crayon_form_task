import React, { useState, useEffect } from 'react'
import { TextField, Input, Switch, Button } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Main = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")

    const [num, setNum] = useState("")
    const [permission, setPermission] = useState(false)
    const [byValue, setbyValue] = useState('')
    const [dataAry, setdataAry] = useState([])
    const [gender, setGender] = useState("")
    const [swap, setSwap] = useState(false)
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        conPassword: "",
        num: "",
        gender: "",

    })
    const [errorstate, setErrorstate] = useState({
        username: false,
        email: false,
        password: false,
        conPassword: false,
        num: false,
        gender: false,

    })

    useEffect(() => {
        console.log(errorstate.username, errorstate.email, errorstate.password, errorstate.conPassword, errorstate.num, errorstate.gender)
        console.log(errorstate.username && errorstate.email && errorstate.password && errorstate.conPassword && errorstate.gender)
    }, [errorstate.username, errorstate.email, errorstate.password, errorstate.conPassword, errorstate.num])

    const usernameHandler = (e) => {
        setUsername(e)

        if (e.length <= 3) {
            errors.username = "usernamelessthan3"
            errorstate.username = false

        }
        else {
            errors.username = ""
            errorstate.username = true

        }
    }
    const emailHandler = (e) => {

        setEmail(e)

        if (e.length <= 3) {
            errors.email = "enter valid email id"
            errorstate.email = false


        }
        else {
            errorstate.email = true
            errors.email = ""
        }





    }
    const passwordHandler = (e) => {
        setPassword(e)

        if (e.length <= 3) {
            errors.password = "usernamelessthan3"
            errorstate.password = false

        }
        else {
            errors.password = ""
            errorstate.password = true

        }
    }
    const conPasswordHandler = (e) => {
        setConPassword(e)

        if (password === e) {
            errorstate.conPassword = false
            errors.conPassword = "do not match"

        }
        else {
            errors.conPassword = ""
            errorstate.conPassword = true

        }
    }
    const genderHandler = (e) => {
        setGender(e)
        console.log(e)
        if (e == "") {
            errorstate.gender = false
            errors.gender = "do any gender"

        }
        else {
            errors.gender = ""
            errorstate.gender = true

        }
    }
    const numberHandler = (e) => {
        setNum(e)

        if (e.length <= 10) {
            errorstate.num = false
            errors.num = "enter valid number"


        }
        else {
            errors.num = ""
            errorstate.num = true

        }
    }

    const submit = (e) => {
        e.preventDefault()

        let payload = {
            "username": username,
            "email": email,
            "password": password,
            "number": num,
            'permision': permission,
            'gender': gender,
            'swap': swap,
        }
        console.log(payload)
        setdataAry([...dataAry, payload])
        setNum('')
        setUsername('')
        setEmail('')
        setPassword('')
        setConPassword('')
        setPermission(false)
        setGender('')
        setSwap(false)





        // let payload =
        // {
        //     title: 'asdsd',
        //     price: 12.6,
        //     description: 'lorem ipsum set',
        //     image: 'https://staticg.sportskeeda.com/wp-content/uploads/2013/06/stock-1782043-1024x682.jpg',
        //     category: 'football'
        // }

        // axios.post('https://reqres.in/', payload)
        //     .then((res) => {
        //         console.log(res)
        //     })

    }







    return (
        <>
            <Box className='formbox'
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <div className='boxt'>
                    <h4 className='head'>Form</h4>
                    <div>
                        <TextField helperText={errors.username} fullWidth label="username" id="user" onChange={(event) => usernameHandler(event.target.value)} value={username} />

                    </div>
                    <div>

                        <TextField helperText={errors.email} fullWidth label="Email" type="email" id="email" onChange={(event) => emailHandler(event.target.value)} value={email} />

                    </div>
                    <div>

                        <TextField helperText={errors.password} fullWidth label="Password" type="password" onChange={(event) => passwordHandler(event.target.value)} value={password} />

                    </div>
                    <div>

                        <TextField helperText={errors.conPassword} fullWidth label="Confirm Password" type="password" onChange={(event) => conPasswordHandler(event.target.value)} value={conPassword} />

                    </div>
                    <div>

                        <TextField helperText={errors.num} fullWidth label="Number" type="number" onChange={(event) => numberHandler(event.target.value)} value={num} />

                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={(event) => genderHandler(event.target.value)}
                            >
                                <MenuItem value={'male'}>male</MenuItem>
                                <MenuItem value={'female'}>female</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='checking'>
                        <span className=''> <Switch onChange={() => setSwap(!swap)} value={swap} />+18
                        </span>
                    </div>

                    <div className='checking'>
                        <span className=''><Checkbox onChange={() => setPermission(!permission)} value={permission} /> By agree this to terms and privacy policy</span>
                    </div>
                    <div className='btnt'>

                        <Button variant="contained" onClick={(e) => submit(e)} disabled={!errorstate.username || !errorstate.email || !errorstate.password || !errorstate.conPassword || !errorstate.num || !errorstate.gender || !permission || !swap}>Register</Button>

                    </div>
                </div>



            </Box>
            <div className='datastore'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className='tablebg'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">number&nbsp;(g)</TableCell>
                                <TableCell align="right">permission&nbsp;(g)</TableCell>
                                <TableCell align="right">gender&nbsp;(g)</TableCell>
                                <TableCell align="right">Yes or No&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataAry.map((row, i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.username}
                                    </TableCell>

                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.number}</TableCell>
                                    <TableCell align="right">{row.permision === true ? "yes" : "no"}</TableCell>
                                    <TableCell align="right">{row.gender}</TableCell>
                                    <TableCell align="right">{row.swap}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
