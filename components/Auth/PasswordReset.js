import React, { useState } from 'react'
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  Link,
  Avatar,
} from '@mui/material'
import {
  Email as EmailIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material'

const PasswordReset = ({
  onLoginClick,
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Password reset requested for:', email)
    setIsSubmitted(true)
  }
  return (
    <Box>
      <Box
        sx={{
          mb: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Reset Password
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We'll send you instructions to reset your password
        </Typography>
      </Box>
      {!isSubmitted ? (
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            startIcon={<ArrowForwardIcon />}
            sx={{
              mt: 3,
              mb: 3,
            }}
          >
            Send Reset Instructions
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            mb: 3,
          }}
        >
          <Avatar
            sx={{
              mx: 'auto',
              mb: 2,
              bgcolor: 'success.light',
              width: 56,
              height: 56,
            }}
          >
            <EmailIcon />
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Check your email
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            We've sent password reset instructions to <strong>{email}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Didn't receive the email? Check your spam folder or try again.
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Link
          component="button"
          variant="body2"
          onClick={onLoginClick}
          sx={{
            textDecoration: 'none',
          }}
        >
          Back to sign in
        </Link>
      </Box>
    </Box>
  )
}
export default PasswordReset
