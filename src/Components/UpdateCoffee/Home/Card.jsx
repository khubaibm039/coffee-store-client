import { Link } from "react-router-dom";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Card = ({ coffee }) => {
    const { price, photo, name, chef, taste, supplier, category, details } =
        coffee;
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
                <div className="flex flex-col md:flex-col-reverse items-start">
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Price:{price} taka</p>
                </div>
                <div className="card-actions justify-end grid gap-4 pr-4">
                    <Link className="bg-[#D2B48C] flex justify-center p-3 rounded-md text-white text-xl">
                        <FaEye />
                    </Link>
                    <Link className="bg-[#3C393B] flex justify-center p-3 rounded-md text-white text-xl">
                        {" "}
                        <FaPen />
                    </Link>
                    <Link className="bg-[#EA4744] flex justify-center p-3 rounded-md text-white text-xl">
                        {" "}
                        <MdDelete />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
