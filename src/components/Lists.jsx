import Item from "./Item";

export default function Lists({list}) {
    return(
        <div>
            <h1>{list.name}</h1>

            <ul>
                {list.item_set.map(item => <Item key={item.id} item={item} />)}
            </ul>
        </div>
    );
}
