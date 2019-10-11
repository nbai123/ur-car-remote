import React from 'react';

const Temperature = (props) => (
    <form>
        <label>
            Temp:
            <input type='text' placeholder='64' />
        </label>
        <input type='submit' value='Submit' />
    </form>
)

export default Temperature;