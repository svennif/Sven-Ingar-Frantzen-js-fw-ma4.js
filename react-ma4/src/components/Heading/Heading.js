import React from 'react';
import PropTypes from 'prop-types';

function Heading(props) {
    return (
    <h1>{props.content}</h1>
    )
}

Heading.propType = {
    props: PropTypes.string.isRequired
}; 

export default Heading;
