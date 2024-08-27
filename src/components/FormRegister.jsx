import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import guardarRecetasLocalStorage from '../utils/guardarRecetasLocalStorage'
import obtenerRecetasLocalStorage from '../utils/obtenerRecetasLocalStorage'
import { useNavigate } from 'react-router-dom'

function FormRegister() {
    const navigate = useNavigate()
    const handleSubmit =()=>{
        navigate('/login')
    }
    return (
    <Formik
        initialValues={{email:'',password:'', confirmPassword:''}}
        validationSchema={Yup.object({
            email: Yup.string().email('Email Incorrecto').required('Requerido'),
            password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('Requerido'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas tienen que coincidir').required('Requerido')
            })}

            onSubmit={(values, { setSubmitting }) => {
                const usuarios = obtenerRecetasLocalStorage('usuarios')
                const usuarioExistente = usuarios.some(user => user.email === values.email)

                if (!usuarioExistente) {
                    usuarios.push({
                        email: values.email,
                        password: values.password
                    })
                    guardarRecetasLocalStorage('usuarios',usuarios)
                    alert('Usuario creado con exito')
                    onSubmit(values)
                    } else {
                        alert('El usuario ya existe')
                    }
                    setSubmitting(false)  
            }}
    >
        <section class="text-gray-600 body-font">
                <Form class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Registrarse</h2>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <Field type="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                            <Field type="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="confirmPassword" class="leading-7 text-sm text-gray-600">Confirmar Password</label>
                            <Field type="password" name="confirmPassword" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type='submit' onClick={handleSubmit} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Registrar</button>
                    </div>
                </Form>
            </section>
    </Formik>
  )
}

export default FormRegister 