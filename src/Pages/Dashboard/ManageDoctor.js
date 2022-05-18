import React from 'react';
import { useQuery } from 'react-query';
import Spinners from '../Shared/Spinners';
import ManageDoctorPro from './ManageDoctorPro';

const ManageDoctor = () => {
    const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
        fetch('http://localhost:5000/doctor', {
            headers: {
                authorization: `bearer ${localStorage.getItem('AccessToken')}`
            }
        }).then(res => res.json())
    )

    if (isLoading) {
        return <Spinners></Spinners>
    }

    return (
        <div>
            <h2 className='text-2xl'>Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, index) => <ManageDoctorPro key={doctor._id} index={index} doctor={doctor} refetch={refetch}></ManageDoctorPro>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;