import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = "Required"
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Required"
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords must match'
    }

    return errors
}

function Signup() {
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <Navbar />
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <form onSubmit={formik.handleSubmit} className="bg-white p-8 shadow rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Create your account</h2>
                    
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input 
                            type="text" 
                            name='name' 
                            id='name' 
                            placeholder='Enter your full name' 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff73] focus:border-transparent"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                            type="email" 
                            name='email' 
                            id='email' 
                            placeholder='Enter your email' 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff73] focus:border-transparent"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input 
                            type="password" 
                            name='password' 
                            id='password' 
                            placeholder='Create a password' 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff73] focus:border-transparent"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input 
                            type="password" 
                            name='confirmPassword' 
                            id='confirmPassword' 
                            placeholder='Confirm your password' 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff73] focus:border-transparent"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>

                    <div className="flex items-center justify-between">
                        <button 
                            type='submit' 
                            className="bg-[#00ff73] text-black px-4 py-2 rounded-md hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00ff73] focus:ring-offset-2 transition-colors cursor-pointer"
                        >
                            Sign Up
                        </button>
                        <Link 
                            to='/login' 
                            className="text-[#00ff73] hover:text-black text-sm font-medium transition-colors cursor-pointer"
                        >
                            Already have an account?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup