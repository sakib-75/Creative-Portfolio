import React from 'react'

export default function Button(props) {
    const {button_title} = props;
    return (
        <div>
            <button className="Button"> {button_title} </button>
        </div>
    );
}
