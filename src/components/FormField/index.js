import React from 'react';


function FormField({ label, type, name, valor, onChange }) {
    return (
        <div>
            <label>
                {label}:
            </label>    
            <input
                placeholder={label}
                type={type}
                value={valor}
                name={name}
                onChange={onChange} />
            

        </div>

    )
}

export default FormField;