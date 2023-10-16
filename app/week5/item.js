export default function Items( { items }) {
    //Outputs items from Item list
    return (
        <div className="border-spacing-0 m-5 bg-sky-400 w-[250px] p-3">
            <h2>Item: {items.name}</h2> 
            <p>Quantity: {items.quantity}</p>
            <p>Category: {items.category}</p>
        </div>
    );
}
