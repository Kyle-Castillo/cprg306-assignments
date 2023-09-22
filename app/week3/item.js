export default function Items( {name, quantity, category }) {
    //Outputs items from Item list
    return (
        <div className="border-spacing-0 m-5 bg-sky-400 w-[250px] p-3">
            <h2>Item: {name}</h2> 
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}
