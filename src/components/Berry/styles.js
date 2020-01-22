import styled from 'styled-components';

export const Container = styled.li`
    padding: 10px;
    color: #737373;
    margin: 10px 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
export const Item = styled.span`
    position: relative;
    text-transform: capitalize;
    border: 1px solid #000;
    display: block;
    border-radius: 3px;
    padding: 10px 0 10px 10px;
    width: 70%;
    border-right: 2px solid red;
    box-shadow: 1px 2px 2px rgb(0,0,0, 0.2);
`;
