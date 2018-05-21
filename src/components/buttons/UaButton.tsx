import * as React from "react";
import styled from "styled-components";

interface IUaButtonProps {
    type?: string,
    children: string,
    onClick?: any
}

class UaButton extends React.Component<IUaButtonProps, {}> {
    public render() {
        return (
        <SyledButton 
            className={this.props.type || ''}
            onClick={this.props.onClick}
            >
            {this.props.children}
        </SyledButton>);
    }
}


const SyledButton = styled.button`
    color: #fff;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: color 0.15s ease-in-out, 
    background-color 0.15s ease-in-out, 
    border-color 0.15s ease-in-out, 
    box-shadow 0.15s ease-in-out;
    &.primary{
        background: #007bff;
    }
    &.primary:hover{
        background: #0069d9;
    }
    &.success{
        background: #28a745;
    }
    &.success:hover{
        background: #5a6268;
    }
    &.danger{
        background: #dc3545;
    }
    &.danger:hover{
        background: #c82333;
    }
    &.waring{
        background: #ffc107;
        color: #212529;
    }
    &.waring:hover{
        background: #e0a800;
        color: #212529;
    }
    &.info{
        background: #17a2b8;
    }
    &.info:hover{
        background: #138496;
    }
    &+&{
        margin:0 10px;
    }
`;

export default UaButton;
