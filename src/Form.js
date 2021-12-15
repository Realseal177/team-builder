import React from 'react'

export default function Form (props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        //console.log(evt.target.name);
        const { value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Username: 
                    <input 
                        name='username'
                        type='text'
                        placeholder='Type your username here'
                        maxLength='30'
                        value={values.username}
                        onChange={onChange}
                    />
                </label>
                <label>Email: 
                    <input 
                        name='email'
                        type='email'
                        placeholder='Email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Guitarist'>Guitarist</option>
                        <option value='Singer'>Singer</option>
                        <option value='Vocalist'>Vocalist</option>
                        <option value='Mascot'>Mascot</option>
                    </select>
                </label>
                
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )




}