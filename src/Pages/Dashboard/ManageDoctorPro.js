import React from 'react';
import { toast } from 'react-toastify';

const ManageDoctorPro = ({ doctor, index, refetch }) => {
    const { name, specialty, email, img } = doctor;

    const handleDelete = email => {
        const confirm = window.confirm('Are you sure to delete?');
        if (confirm) {
            fetch(`http://localhost:5000/doctor/${email}`, {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${localStorage.getItem('AccessToken')}`
                }
            })
                .then(res => res.json())
                .then(done => {
                    // console.log(done);
                    if (done.deletedCount > 0) {

                        toast(`Doctor ${name} is deleted`);
                        refetch();

                    }
                })
        }

    }

    return (
        <tr>
            <th>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={img} alt={name} />
                    </div>
                </div></th>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button class="btn btn-error" onClick={() => handleDelete(email)}>Error</button></td>
        </tr>
    );
};

export default ManageDoctorPro;