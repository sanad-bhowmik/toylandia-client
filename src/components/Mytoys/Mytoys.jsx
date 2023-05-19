import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../providers/AuthProviders';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';
import { toast, Toaster } from 'react-hot-toast';
import UpdateToyModal from './UpdateToyModal';

const Mytoys = () => {
    useTitle('MyToys');
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedToy, setSelectedToy] = useState(null);

    // Check if the user is not null before accessing the email property
    const userEmail = user ? user.email : '';
    const url = `http://localhost:5000/toys?seller_email=${userEmail}`;

    useEffect(() => {
        // Only fetch data if the user is not null
        if (user) {
            fetch(url)
                .then(res => res.json())
                .then(data => setToys(data));
        }
    }, [user]); // Add user as a dependency to useEffect

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log('delete confirm');
                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const handleUpdate = (toy) => {
        setSelectedToy(toy);
        setShowUpdateModal(true);
    };

    return (
        <div>
            <Navbar />
            <div className="mb-12 bg-gradient-to-l from-green-100 to-red-300 py-6">
                <h1 className="text-5xl text-black text-center font-bold">Toys of yours</h1>
            </div>

            <div className="p-4 container mx-auto">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-4 py-2">Photo</th>
                                            <th className="px-4 py-2">Toy Name</th>
                                            <th className="px-4 py-2">Seller Name</th>
                                            <th className="px-4 py-2">Seller Email</th>
                                            <th className="px-4 py-2">Subcategory</th>
                                            <th className="px-4 py-2">Price</th>
                                            <th className="px-4 py-2">Rating</th>
                                            <th className="px-4 py-2">Quantity</th>
                                            <th className="px-4 py-2">Details</th>
                                            <th className="px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {toys.map(toy => (
                                            <tr key={toy.id}>
                                                <td className="px-4 py-2">
                                                    <img className="w-10 h-10 rounded-full" src={toy.img} alt="Toy" />
                                                </td>
                                                <td className="px-4 py-2">{toy.toy_name}</td>
                                                <td className="px-4 py-2">{toy.seller_name}</td>
                                                <td className="px-4 py-2">{toy.seller_email}</td>
                                                <td className="px-4 py-2">{toy.sub_categories}</td>
                                                <td className="px-4 py-2">${toy.price}</td>
                                                <td className="px-4 py-2">{toy.rating}</td>
                                                <td className="px-4 py-2">{toy.available_quantity}</td>
                                                <td className="px-4 py-2">{toy.description}</td>
                                                <td className="px-4 py-2">
                                                    <div className="flex space-x-2">
                                                        <button onClick={() => handleDelete(toy._id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
                                                            Delete
                                                        </button>
                                                        <button
                                                            onClick={() => handleUpdate(toy)}
                                                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                                                        >
                                                            Edit
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {showUpdateModal && (
                <UpdateToyModal
                    toy={selectedToy}
                    onUpdate={(updatedToy) => {
                        fetch(`http://localhost:5000/toys/${updatedToy._id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updatedToy),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                setToys(
                                    toys.map((toy) => toy._id === updatedToy._id ? updatedToy : toy)
                                )
                                setShowUpdateModal(false); // Close the modal
                                toast.success('Toy updated successfully!'); // Show success toast
                            })
                    }}
                    onClose={() => setShowUpdateModal(false)}
                />
            )}
            <Toaster />
        </div>
    );
};

export default Mytoys;