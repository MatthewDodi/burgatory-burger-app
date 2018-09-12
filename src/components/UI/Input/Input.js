import React, { Fragment } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    width: 100%;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
`

const Input = styled.input`
    box-sizing: border-box;
    border: 1px solid #ccc;
    backdrop-filter: white;
    font: inherit;
    padding: 6px 10px;
    margin-bottom: 2rem;
    display: block;
    width: 100%;
    &:focus {
        background-color: #ccc;
        outline-color: aqua;
        background-color: #ccc;
    }
`

const Select = styled.select`
    box-sizing: border-box;
    border: 1px solid #ccc;
    backdrop-filter: white;
    font: inherit;
    padding: 6px 10px;
    margin-bottom: 2rem;
    display: block;
    width: 100%;
    &:focus {
        outline-color: aqua;
        background-color: #ccc;
    }
`


const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'): 
            inputElement = <Input 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed} />
            break;
        case ('text-area'):
            inputElement = <textarea 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = <Select  value={props.value} 
            onChange={props.changed}>
                                {props.elementConfig.options.map(option => <option key={option.value} value={option.value}>{option.displayValue}</option>)}
                            </Select>
            break;
        default:
            inputElement = <Input 
                {...props.elementConfig} 
                value={props.value} />
    }

    return (
        <Fragment>
            <Label>{props.label}</Label>
            {inputElement}
        </Fragment>
)};

export default input