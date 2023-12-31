import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SigninForms from './_auth/forms/SigninForms'
import SignupForms from './_auth/forms/SignupForms'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'

import './index.css'

const App = () => {
  return (
    <main className='flex h-screen bg-black'>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path='/sign-in' element={<SigninForms />} />
                <Route path='/sign-up' element={<SignupForms />} />
            </Route>

            <Route>
               <Route index element={<Home />} />
            </Route>
        </Routes>
    </main>
  )
}

export default App