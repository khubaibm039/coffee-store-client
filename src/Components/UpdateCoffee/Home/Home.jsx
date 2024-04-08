import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
const Home = () => {
    const loadedCoffee = useLoaderData();
    const [coffees] = useState(loadedCoffee);

    return (
        <div className="md:m-20 m-4 text-center">
            <h1>hot hot cold coffee: {coffees.length}</h1>
            <div className="grid lg:grid-cols-2 gap-4">
                {coffees?.map((coffee) => (
                    <Card key={coffee._id} coffee={coffee}></Card>
                ))}
            </div>
        </div>
    );
};

export default Home;
