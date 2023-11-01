export default function Items( { items }) {
    //Outputs items from Item list
    return (
        <div className="border-spacing-0 m-5 bg-sky-400 w-[280px] p-3">
            <h1 className="text-4x1 font-bold">{items.name}</h1> 
            <p>Buy {items.quantity} in {items.category}</p>
        </div>
    );
}
