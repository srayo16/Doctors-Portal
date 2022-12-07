import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinners from '../Shared/Spinners';
import DeleteingModal from './DeleteingModal';
import ManageDoctorPro from './ManageDoctorPro';

const ManageDoctor = () => {
    const [removeModal, setRemoveModal] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
        fetch('https://doctor-portal-server-nekx.onrender.com/doctor', {
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
            <div className="overflow-x-auto">
                <table className="table w-full">

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
                            doctors.map((doctor, index) => <ManageDoctorPro key={doctor._id} index={index} doctor={doctor} refetch={refetch} setRemoveModal={setRemoveModal}></ManageDoctorPro>)
                        }

                    </tbody>
                </table>
            </div>
            {removeModal && <DeleteingModal refetch={refetch} setRemoveModal={setRemoveModal} removeModal={removeModal}></DeleteingModal>}
        </div>
    );
};

export default ManageDoctor;