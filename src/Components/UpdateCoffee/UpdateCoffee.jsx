import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
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

    const handleUpdatedCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const updatedCoffee = {
            name,
            chef,
            taste,
            supplier,
            category,
            details,
            photo,
            price,
        };
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://coffe-store-server-jet.vercel.app/coffee/${_id}`,
                    {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(updatedCoffee),
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your file has been Updated.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };
    return (
        <div className="bg-[#f4f3f0] md:p-28 p-8 container mx-auto">
            <h1 className="text-3xl font-extrabold text-center uppercase mb-10">
                update a coffee
            </h1>

            <form onSubmit={handleUpdatedCoffee}>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Coffee name"
                                name="name"
                                defaultValue={name}
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter coffee chef"
                                name="chef"
                                defaultValue={chef}
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter coffee supplier"
                                name="supplier"
                                defaultValue={supplier}
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter coffee taste"
                                name="taste"
                                defaultValue={taste}
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter Coffee Category"
                                name="category"
                                defaultValue={category}
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter Coffee Details"
                                name="details"
                                defaultValue={details}
                            />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter Coffee Price"
                                name="price"
                                defaultValue={price}
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Enter Photo URL"
                                name="photo"
                                defaultValue={photo}
                            />
                        </label>
                    </div>
                </div>
                <input
                    type="submit"
                    className="btn bg-[#D2B48C] w-full mt-4"
                    value="update coffee"
                />
            </form>
        </div>
    );
};

export default UpdateCoffee;
