import React, { useState } from "react";

const AddNewListing = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [free, setFree] = useState();
    const [paid, setPaid] = useState();
    const [price, setPrice] = useState();
    const [material, setMaterial] = useState("");
    const [capacity, setCapacity] = useState("");

    const formSubmitHandler = async (event) => {
        try {
            event.preventDefault();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-green-200/[.40]  flex flex-col h-screen items-center">
            <h1 className="text-2xl font-bold m-4 py-10">Add New Listing</h1>
            <form onSubmit={formSubmitHandler}>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 items-center text-sm rounded-lg block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    value={name}
                    required
                    placeholder="Name"
                />
                <textarea
                    className="bg-gray-50 border border-gray-300 text-gray-900 items-center text-sm rounded-lg block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mt-6"
                    value={address}
                    placeholder="Address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    rows={4}
                    cols={40}
                />
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 items-center text-sm rounded-lg block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mt-6"
                    type="radio"
                    name="free"
                    value="Free"
                    onChange={e => setFree(e.target.value)}
                    required
                />Free
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 items-center text-sm rounded-lg block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mt-6"
                    type="radio"
                    name="paid"
                    value="Paid"
                    onChange={e => setPaid(e.target.value)}
                    required
                />Paid
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 items-center text-sm rounded-lg block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mt-6"
                    type="text"
                    id="price"
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                    value={price}
                    required
                    placeholder="Price"
                />
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 items-center text-sm rounded-lg block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mt-6"
                    type="text"
                    id="material"
                    onChange={(e) => {
                        setMaterial(e.target.value);
                    }}
                    value={material}
                    required
                    placeholder="Material"
                />
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 items-center text-sm rounded-lg block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mt-6"
                    type="text"
                    id="capacity"
                    onChange={(e) => {
                        setCapacity(e.target.value);
                    }}
                    value={capacity}
                    required
                    placeholder="Capacity"
                />
                <label>
                    Select Indoor or Outdoor:
                    <select name="selectIndoorOutdoor" className="mt-6">
                        <option value="select">Select</option>
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                    </select>
                </label>

                <input
                    className="bg-[#243e8e] hover:bg-[#323754] border-gray-300 text-white items-center text-sm rounded-lg block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white font-bold mt-12 ml-10"
                    type="submit"
                    id="submit"
                    value="Submit Listing"
                />
            </form>
        </div>
    );
};

export default AddNewListing;
