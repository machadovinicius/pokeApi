import styled from 'styled-components';
import ColorTypes from '../../global/ColorTypes';

export const Container = styled.li`
    padding: 10px 0;
    margin: 10px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;
export const Item = styled.span`
    display: block;
    background: ${props => props.flavor ? ColorTypes[props.flavor] : "#ccc"};
    width: 80%;
    text-align: center;
    color: #fff;
    font-size: 16px;
    border-radius: 15px;
    padding: 5px 0;
    text-transform: capitalize;
    box-shadow: 1px 2px 2px rgb(0,0,0, 0.2);
`;
