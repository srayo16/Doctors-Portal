import React from 'react';
import { toast } from 'react-toastify';

const DeleteingModal = ({ removeModal, refetch, setRemoveModal }) => {
    const { name, specialty, email, img } = removeModal;

    const handleDelete = (email) => {

        fetch(`https://evening-dawn-51608.herokuapp.com/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('AccessToken')}`
            }
        })
            .then(res => res.json())
            .then(done => {
                // console.log(done);
                if (done.deletedCount > 0) {

                    toast.success(`Doctor ${name} is deleted`);
                    refetch();
                    setRemoveModal(null);

                }
            })

    }
    return (
        <div>

            <input type="checkbox" id="deleting-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="deleting-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you sure to remove {name}?</h3>
                    <p className="py-4">He is specialty on ${specialty}.</p>
                    <button className="btn btn-error" onClick={() => handleDelete(email)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteingModal;