export default function Item({item}) {
    console.log(item)

    return(
        <li>
            {item.name}. 
            <br />
            concluida? {item.done? "Sim": "Não"}
        </li>
    );
}
