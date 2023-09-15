
const Menu = ()=>{

    return (
        <ul style={{
    
            listStyle: 'none',
            display: 'flex',
            width: '100%',
            height: 70,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            background: 'black',
            fontSize: 20
        }}>
            <li style={{color: 'white', cursor: 'pointer'}}>Inicio</li>
            <li style={{color: 'white', cursor: 'pointer'}}>Nosotros</li>
            <li style={{color: 'white', cursor: 'pointer'}}>Contacto</li>
        </ul>
    )

}

export default Menu