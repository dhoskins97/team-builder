import React, { useState } from 'react';

const Forms = props => {
    
    const [entry, setEntry] = useState({name: "", email: "", role: ""});

    const changeEntry = event => {
        setEntry({...entry, [event.target.name]: event.target.value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.setEntries( entries => [...entries, entry])
        setEntry({name: "", email: "", role: ""})
    };

    return (
        <div className ="formsContainer">
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input type="text" name="name" onChange={changeEntry} />
                </label>
                
                <label>
                    Email: 
                    <input type="text" name="email" onChange={changeEntry} />
                </label>
                
                <label>
                    Role: 
                    <input type="text" name="role" onChange={changeEntry} />
                </label>
                
                <input type="submit" value="Submit" />

            </form>
        </div>
    )
}

export default Forms;