const AddCoffee = () => {
    return (
        <div>
            <h1>Add a coffee</h1>
            <form>
                <div className="flex">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered "
                                placeholder="Coffee name"
                                name="coffeeName"
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Available Quantity
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                className="input input-bordered "
                                placeholder="available quantity"
                            />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
