const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {
            name,
            chef,
            taste,
            supplier,
            category,
            details,
            photo,
        };
        console.log(newCoffee);
    };
    return (
        <div className="bg-[#f4f3f0] md:p-28 p-8 container mx-auto">
            <h1 className="text-3xl font-extrabold text-center uppercase">
                Add a coffee
            </h1>
            <p className="text-center my-4">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
            </p>
            <form onSubmit={handleAddCoffee}>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered w-full"
                                placeholder="Coffee name"
                                name="name"
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
                            />
                        </label>
                    </div>
                </div>
                <input
                    type="submit"
                    className="btn bg-[#D2B48C] w-full mt-4"
                    value="Add Coffee"
                />
            </form>
        </div>
    );
};

export default AddCoffee;
