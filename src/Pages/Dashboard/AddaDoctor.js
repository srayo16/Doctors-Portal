import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinners from '../Shared/Spinners';

const AddaDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { isLoading, error, data: treatment } = useQuery('serviceForAdd', () =>
        fetch('http://localhost:5000/services').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Spinners></Spinners>
    }
    const imgApi = 'b03f3b5e4c220079e4cfb7adc703b87e';

    const onSubmit = async data => {
        // console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgApi}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.success) {
                    const img = result.data.image.url;

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }

                    fetch('http://localhost:5000/doctor', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('AccessToken')}`
                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {

                                toast.success('Doctor added successfully')
                            }
                            else {
                                toast('Doctor add failed!');
                            }
                        })

                }
            })


    }

    return (
        <div className='container  mx-auto'>
            <h2 className="text-center  text-2xl mt-2">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control mx-auto w-full max-w-xs">

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
                <div className="form-control mx-auto w-full max-w-xs">

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


                <div className="form-control mx-auto mb-5 w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>

                    <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                        {
                            treatment.map(trt => <option key={trt._id} value={trt.name}>{trt.name}</option>)
                        }
                    </select>

                </div>

                <div className="form-control mx-auto w-full max-w-xs">

                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>

                    <input type="file" className="input input-bordered w-full max-w-xs"  {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is Required'
                        }
                    })} />

                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                    </label>

                </div>

                <div className="form-control w-full mx-auto mt-5 max-w-xs">
                    <input type="submit" value='ADD' className="btn btn-accent w-full max-w-xs" />
                </div>
            </form>
        </div>
    );
};

export default AddaDoctor;