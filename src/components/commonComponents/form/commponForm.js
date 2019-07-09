import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const Label = styled(Form.Label)`
    color: white;
`

export const CommonForm = (props) => {
    const { as, rows, type, name, event  } = props;
    return (
        <Form.Group>
            <Label htmlFor={name}>{name}: </Label>
                <Form.Control
                    as={as}
                    rows={rows} 
                    type={type}
                    name={name}
                    onChange={event}
                />
        </Form.Group>
    );
}