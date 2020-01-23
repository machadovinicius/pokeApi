import styled from 'styled-components';
import ColorTypes from '../../global/ColorTypes';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    a{
        display: flex;
        justify-content:center;
        width:100%;
    }
`;
export const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    background: ${props => props.type ? ColorTypes[props.type] : "#ccc"};
    border-radius: 15px;
`;

export const Item = styled.span`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 30px 0;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    img{
        width: 30px;
    }
`;
export const Circle = styled.div`

    background: #ffffff33;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;
export const Image = styled.img`
`;
