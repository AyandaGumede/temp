import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  Link,
  Grid,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Paper,
  Divider,
  Snackbar,
  Alert,
  Container,
  IconButton,
  FormHelperText
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Phone as PhoneIcon,
  Home as HomeIcon,
  PersonAdd as PersonAddIcon,
  Visibility,
  VisibilityOff,
  LocationOn,
  Description,
  Numbers
} from '@mui/icons-material';

const CemeterySignupForm = ({ onLoginClick }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    relationship: '', // Relationship to deceased
    plotNumber: '',
    deceasedName: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // List of relationship options
  const relationships = [
    'Family Member',
    'Spouse',
    'Child',
    'Sibling',
    'Extended Family',
    'Friend',
    'Legal Representative',
    'Other'
  ];

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    
    // Required field validation
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Terms acceptance validation
    if (!termsAccepted) {
      newErrors.terms = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Signup attempt with:', formData);
      setShowSuccessMessage(true);
    }
  };

  // Close success message
  const handleCloseSnackbar = () => {
    setShowSuccessMessage(false);
  };

  return (
    <Container maxWidth="lg" sx={{ width: '900px' }}>
      <Paper elevation={3} sx={{ p: 4, my: 4, borderRadius: 2, maxWidth: '1s0%' }}>
        <Box>
          <Box
            sx={{
              mb: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" gutterBottom>
              Create Your Cemetery Management Account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sign up to manage your cemetery arrangements and services
            </Typography>
          </Box>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            {/* Personal Information */}
            <Typography variant="subtitle1" color="primary" gutterBottom sx={{ mt: 2 }}>
              Personal Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="name"
              autoFocus
              value={formData.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            
            {/* Address Information */}
            <Typography variant="subtitle1" color="primary" gutterBottom sx={{ mt: 3 }}>
              Mailing Address
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <TextField
              margin="normal"
              fullWidth
              id="address"
              label="Street Address"
              name="address"
              autoComplete="street-address"
              value={formData.address}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
            />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="address-level2"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="address-level1"
                  value={formData.state}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="zipCode"
                  label="ZIP Code"
                  name="zipCode"
                  autoComplete="postal-code"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            
            {/* Cemetery Information */}
            <Typography variant="subtitle1" color="primary" gutterBottom sx={{ mt: 3 }}>
              Cemetery Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  margin="normal"
                  fullWidth
                  id="relationship"
                  label="Relationship to Deceased"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                >
                  {relationships.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="plotNumber"
                  label="Plot/Grave Number (if known)"
                  name="plotNumber"
                  value={formData.plotNumber}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Numbers />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            
            <TextField
              margin="normal"
              fullWidth
              id="deceasedName"
              label="Name of Deceased (if applicable)"
              name="deceasedName"
              value={formData.deceasedName}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Description />
                  </InputAdornment>
                ),
              }}
            />
            
            {/* Password Fields */}
            <Typography variant="subtitle1" color="primary" gutterBottom sx={{ mt: 3 }}>
              Security
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            
            {/* Terms and Conditions */}
            <FormControlLabel
              control={
                <Checkbox 
                  value="termsAccepted" 
                  color="primary" 
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
              }
              label="I agree to the Terms and Conditions"
              sx={{ mt: 2 }}
            />
            {errors.terms && (
              <FormHelperText error>{errors.terms}</FormHelperText>
            )}
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              startIcon={<PersonAddIcon />}
              sx={{
                mt: 4,
                mb: 3,
                py: 1.5
              }}
            >
              Create Account
            </Button>
            
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary" display="inline">
                Already have an account?{' '}
              </Typography>
              <Link
                component="button"
                variant="body2"
                onClick={onLoginClick}
                sx={{
                  textDecoration: 'none',
                }}
              >
                Sign in
              </Link>
            </Box>
          </Box>
        </Box>
      </Paper>
      
      <Snackbar 
        open={showSuccessMessage} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Account created successfully! You can now manage your cemetery services.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CemeterySignupForm;