import React, { useState } from 'react'
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  Link as MuiLink,
} from '@mui/material'
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Login as LoginIcon,
} from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt with:', { email, password })
  }

  return (
    <Box>
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Access your cemetery management dashboard
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ mt: 1, mb: 2, textAlign: 'right' }}>
          <MuiLink
            component={RouterLink}
            to="/reset-password"
            variant="body2"
            sx={{ textDecoration: 'none' }}
          >
            Forgot password?
          </MuiLink>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          startIcon={<LoginIcon />}
          sx={{ mb: 3 }}
        >
          Sign In
        </Button>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" display="inline">
            Don't have an account?{' '}
          </Typography>
          <MuiLink
            component={RouterLink}
            to="/register"
            variant="body2"
            sx={{ textDecoration: 'none' }}
          >
            Sign up
          </MuiLink>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginForm
