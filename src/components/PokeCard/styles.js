import styled from 'styled-components';
import ColorTypes from '../../global/ColorTypes';


export const Item = styled.div`
    width: 24%;
    margin: 8px 0;
    padding: 15px 20px;
    box-shadow: 0 2px 2px rgb(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: ${ props => props.type ? ColorTypes[props.type] : '#000'};
    a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }
 `;
export const Circle = styled.div`
    width: 40%;
    height: 80%;
    border-radius: 50%;
    background-color: #ffffff33;
    display: flex;
    justify-content: center;
    align-items: center;
 `;
export const Info = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
 `;
export const Image = styled.img`

 `;

export const Title = styled.span`
    display: block;
    width: 100%;
    text-align: left;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
`;

export const ListTypes = styled.ul`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
export const Type = styled.li`
    color: #fff;
    padding: 3px 10px;
    margin-top: 10px;
    text-transform: capitalize;
    background-color: #ffffff33;
    border-radius: 15px;
`;
export const PokeIndice = styled.span`
    display: block;
    width: 100%;
    color: #fff;
    padding: 3px 10px;
    text-align: right;
    padding: 0 0 5px 0;
`;