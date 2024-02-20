'use client'

import React, { useCallback } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { Button, TextField, Card, CardHeader, CardActions, CardContent} from '@mui/material';

import './login.css'

function LoginPage() {

  return (
    <Card className='login-container' style={{ maxWidth: "23rem", width: "100%", borderRadius:"1rem"}}>
      <h2>Login</h2>
      <CardContent className='signin-container' style={{ padding: '0.5rem'}}>
            <p>Email</p >
            <TextField
              id="filled-basic" label="User email" variant="filled"
              placeholder='User email or username'
            />
            <p>Password</p >
            <TextField
              type='password'
              id="filled-basic" label="Password" variant="filled"
              placeholder='User password'
            />
        </CardContent>
        <CardActions style={{ padding: '0.5rem', justifyContent: 'center'}}>
          <Button variant='contained' onClick={()=>{signIn("google",  { callbackUrl: 'http://localhost:3000/home' })}}>Sign in with Google</Button>
        </CardActions> 
    </Card>
  )
}

export default LoginPage