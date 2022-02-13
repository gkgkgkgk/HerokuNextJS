import { useState } from 'react';
import axios from 'axios';

const Button = () => {
    const [value, setValue] = useState("");
    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            console.log(await axios.get(`/api/response?text=${value}`));
            setValue("");
        }}>
            <input type="text" value={value} onChange={({ target: { value: v } }) => setValue(v)}></input>
        </form>
    )
}

export default Button;