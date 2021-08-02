import React, {useState}  from 'react'


export const Renderizado = () => {

    const Effect =() => {
        const [salir, setSalir] = useState(false);
    }

    const condicional = true;

    return (
        <div>
            { condicional && <p>Hola</p> }
            <button >
                Salir         
            </button>
        </div>
    )
}
