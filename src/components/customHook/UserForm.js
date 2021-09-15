import React, {useState} from 'react'
import UseInput from '../../hooks/UseInput'

function UserForm() {
    const [fname, bindfname, resetfname] = UseInput('')
    const [lname, bindlname, resetlname] = UseInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`${fname} ${lname}`)
        resetfname()
        resetlname()
    }
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" value={fname} {...bindfname}/>
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" value={lname} {...bindlname}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
