import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../providers/AuthProviders';
import useTitle from '../../hooks/useTitle';
import { Toaster, toast } from 'react-hot-toast';


const AddToys = () => {
    useTitle('Alltoys')
    const { user } = useContext(AuthContext);

    const handleAddToys = event => {
        event.preventDefault();
    
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const sellerName = user?.displayName;
        const email = user?.email;
        const categoryValue = form.category.value;
        
        // Extract the subcategory ID and name from the selected value
        const [subCategoryId, subCategoryName] = categoryValue.split('_');
    
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        form.reset();
        toast.success('Wow!!! You Added new toy');
    
        const toys = {
            toy_name: name,
            img: photo,
            sub_categoriesId: subCategoryId, // Add the subcategory ID
            sub_categories: subCategoryName, // Use the extracted subcategory name
            price: price,
            rating: rating,
            available_quantity: quantity,
            description: description,
            seller_name: sellerName,
            seller_email: email
        }
        console.log(toys);
    
        fetch('http://localhost:5000/toys',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(toys)
        })
            .then(res => res.json())
            .then(data => { console.log(data); })
    }
    return (
        <div>
            <Navbar />
            <Toaster/>
            <h1 className="text-5xl font-serif text-center font-bold mb-10 mt-10">Add your Toy</h1>
            <div className="flex container mx-auto px-4 py-8 ">
                <div className="mr-8">
                    <img src="https://i.pinimg.com/originals/ab/d7/a4/abd7a42750a2268fbd1088994e623ade.gif" alt="GIF" className="w-[130%] h-[80%]" />
                </div>
                <form onSubmit={handleAddToys} className=" w-[60%] pt-6 pl-6 ml-14 pr-6 pb-6 mx-auto bg-gradient-to-t from-blue-800 via-purple-400 to-gray-300">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-800">Picture URL of the toy</label>
                            <input
                                type="url"
                                name="photo"
                                className="form-input mt-1 w-full rounded-lg  h-10"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-800">Name</label>
                            <input
                                type="name"
                                name="name"
                                className="form-input mt-1 w-full rounded-lg h-10"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-800">Seller Name</label>
                            <input
                                type="name"
                                name="sellerName"
                                defaultValue={user?.displayName}
                                className="form-input mt-1 w-full rounded-lg h-10"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-800">Seller Email</label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                className="form-input mt-1 w-full rounded-lg h-10"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-800">Sub-category</label>
                            <select
                                name="category"
                                className="form-select mt-1 w-full rounded-lg h-10"
                                required
                            >
                                <option value="" disabled selected>Select an option</option>
                                <option value="1_math toy">Math Toy</option>
                                <option value="2_engineering toy">Engineering Toy</option>
                                <option value="3_science toy">Science Toy</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-800">Price</label>
                            <input
                                type="number"
                                name="price"
                                className="form-input mt-1 w-full rounded-lg h-10"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-800">Rating</label>
                            <input
                                type="number"
                                name="rating"
                                className="form-input mt-1 w-full rounded-lg h-10"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-800">Available Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                className="form-input mt-1 w-full rounded-lg h-10"
                                required
                            />
                        </div>
                        <div className="mb-4 col-span-2">
                            <label className="block text-lg font-medium text-gray-800">Detail Description</label>
                            <textarea
                                name="description"
                                type="text"
                                className="form-textarea mt-1 w-full rounded-lg h-10"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="ml-[45%] text-2xl bg-red-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
                        >
                            Add Toy
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddToys;