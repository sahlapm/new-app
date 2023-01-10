import React from 'react'

const Login = () => {
  return (
    <div class="justify-content-center align-items-center h-100">
      <h3 class="fw-normal mb-3 pb-3" >Sign into your account</h3>
                    <div class="form-outline mb-4">
                      <input type="text" class="form-control form-control-lg" placeholder="Username" required />
                    </div>
                    <div class="form-outline mb-4">
                      <input type="password" class="form-control form-control-lg" placeholder="Password" required />
                    </div>
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                    </div>
                  
                    <p class="mb-5 pb-lg-2" >Don't have an account? <a
                        href="signup.html" >Register here</a></p>
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
    </div>
  )
}

export default Login
