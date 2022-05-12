import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useForm } from "react-hook-form";
import Spinners from '../Shared/Spinners';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    let from = location.state?.from?.pathname || "/";
    if (loading || loading1 || updating) {
        return <Spinners></Spinners>
    }

    let errorMessage;
    if (error || error1 || error2) {
        errorMessage = <p className='text-red-500'><small>{error?.message || error1?.message || error2?.message}</small></p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
        toast('Welcome to Doctor Portal')
    }

    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    }
    return (
        <div className='flex h-screen pb-40 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"  {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"  {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>

                        </div>


                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'MinLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                            {errorMessage}
                            <p className='text-xs m-2'>Forgot Password</p>

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input type="submit" value='SIGN UP' className="btn btn-accent w-full max-w-xs" />
                            <p className='text-xs m-2 text-center font-semibold'>Already have an account?
                                <Link className='text-primary ml-2' to='/login'>Go to Login</Link> </p>
                        </div>
                    </form>
                    <ToastContainer />
                    <div className="divider">OR</div>

                    <button className="btn btn-outline" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>


                </div>
            </div>
        </div>
    );
};

export default Signup;