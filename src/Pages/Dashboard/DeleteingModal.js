import React from 'react';
import { toast } from 'react-toastify';

const DeleteingModal = ({ removeModal, refetch, setRemoveModal }) => {
    const { name, specialty, email, img } = removeModal;

    const handleDelete = (email) => {

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

                    toast.success(`Doctor ${name} is deleted`);
                    refetch();
                    setRemoveModal(null);

                }
            })

    }
    return (
        <div>

            <input type="checkbox" id="deleting-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="deleting-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Are you sure to remove {name}?</h3>
                    <p class="py-4">He is specialty on ${specialty}.</p>
                    <button class="btn btn-error" onClick={() => handleDelete(email)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteingModal;