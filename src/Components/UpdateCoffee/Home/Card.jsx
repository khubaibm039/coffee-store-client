import { Link } from "react-router-dom";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";

const Card = ({ coffee, coffees, setCoffees }) => {
    const {
        _id,
        price,
        photo,
        name,
        chef,
        taste,
        supplier,
        category,
        details,
    } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://coffe-store-server-jet.vercel.app/coffee/${_id}`,
                    {
                        method: "DELETE",
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                            const remaining = coffees.filter(
                                (cof) => cof._id !== _id
                            );
                            setCoffees(remaining);
                        }
                    });
            }
        });
    };
    return (
        <div className="card min-h-52 grid md:flex items-center card-side bg-[#F5F4F1] shadow-xl p-4 py-4">
            <figure className="md:w-3/5 w-full md:flex md:justify-center">
                <img
                    className="w-1/2  md:w-full object-cover"
                    src={photo}
                    alt={name}
                />
            </figure>
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col  items-start">
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Price:{price} taka</p>
                </div>
                <div className="card-actions justify-end grid gap-4 pr-4">
                    <Link className="bg-[#D2B48C] flex justify-center p-3 rounded-md text-white text-xl">
                        <FaEye />
                    </Link>
                    <Link
                        to={`/updateCoffee/${_id}`}
                        className="bg-[#3C393B] flex justify-center p-3 rounded-md text-white text-xl"
                    >
                        {" "}
                        <FaPen />
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="bg-[#EA4744] flex justify-center p-3 rounded-md text-white text-xl"
                    >
                        {" "}
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
