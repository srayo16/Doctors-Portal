import React from 'react';
import { toast } from 'react-toastify';

const ManageDoctorPro = ({ doctor, index, refetch, setRemoveModal }) => {
    const { name, specialty, email, img } = doctor;



    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={img} alt={name} />
                    </div>
                </div></th>
            <td>{name}</td>
            <td>{specialty}</td>
            <td> <label onClick={() => setRemoveModal(doctor)} for="deleting-modal" className="btn btn-error modal-button">Remove</label>

            </td>
        </tr>
    );
};

export default ManageDoctorPro;