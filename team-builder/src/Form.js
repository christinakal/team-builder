import React, { useState } from 'react';

export default function Form(props) {

    const [member, setMember] = useState({
        name: " ",
        email: " ",
        role: " "
    });

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name" 
                        type="text" 
                        placeholder="name" 
                        onChange={handleChanges}
                        name="name"
                        value={member.name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email"
                        type="email"
                        placeholder="email"
                        onChange={handleChanges}
                        name="email"
                        value={member.email}
                    /> 
                </div>
                <div>  
                    <label htmlFor="role">Role</label>
                    <input 
                        id="role"
                        type="text"
                        placeholder="role"
                        onChange={handleChanges}
                        name="role"
                        value={member.role}
                    />
                </div>  
            </form>
        </div>
    )
}
