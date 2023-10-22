export default function Item({item}) {
    return(
        <li>
            {item.name}. 
            <br />
            concluida? {item.done? "Sim": "Não"}
        </li>
    );
}
