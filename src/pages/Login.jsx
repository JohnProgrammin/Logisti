import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


const initialValues = {
    email: '',
    password: ''
}

// 2. Fixed the validation logic
const validate = values => {
    const errors = {}

    // Email validation
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    // Password validation
    if (!values.password) {
        errors.password = "Required"
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long'
    }

    return errors
}

function Login() {
    // 3. Properly set up useFormik with initialValues and validate
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            // 4. Added onSubmit handler - this is where you would handle login logic
            alert(JSON.stringify(values, null, 2));
            // Typically you would call an API here:
            // await loginUser(values.email, values.password);
        }
    })

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <Navbar />
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* 5. Connected form onSubmit to formik.handleSubmit */}
                <form onSubmit={formik.handleSubmit} className="bg-white p-8 shadow rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Log in to your account</h2>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                            type="email" 
                            name='email' 
                            id='email' 
                            placeholder='Enter User Email' 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff73] focus:border-transparent"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {/* 6. Added error message display with styling */}
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input 
                            type="password" 
                            name='password' 
                            id='password' 
                            placeholder='Enter User Password' 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff73] focus:border-transparent"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {/* 7. Added password error message display */}
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div className="flex items-center justify-between">
                        <button 
                            type='submit' 
                            className="bg-[#00ff73] text-black px-4 py-2 rounded-md hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00ff73] focus:ring-offset-2 transition-colors cursor-pointer"
                        >
                            Login
                        </button>
                        <Link 
                            to='/signup' 
                            className="text-[#00ff73] hover:text-black text-sm font-medium transition-colors cursor-pointer"
                        >
                            Create an account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login