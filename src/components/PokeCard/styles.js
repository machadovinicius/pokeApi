import styled from 'styled-components';
import ColorTypes from '../../global/ColorTypes';


export const Item = styled.div`
    width: 48%;
    padding: 10px 10px;
    min-height: 247px;
    margin: 6px 0;
    box-shadow: 0 2px 2px rgb(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: ${ props => props.type ? ColorTypes[props.type] : '#ccc   '};
    a{
        display: flex;
        height: 100%;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        @media only screen and (min-width: 769px) {
            justify-content: center;
        }
    }
    @media only screen and (min-width: 769px) {
        width: 19%;
    }
 `;
export const Circle = styled.div`
    width: 100%;
    height: auto;
    border-radius: 50%;
    background-color: #ffffff33;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    @media only screen and (min-width: 769px) {
        width: 50%;
    }
 `;
export const Info = styled.div`
    width: 100%;
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
    text-align: center;
    font-size: 1em;
    text-transform: uppercase;
    color: #fff;
`;

export const ListTypes = styled.ul`
    width: 100%;
    height: 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export const Type = styled.li`
    width: 100%;
    height: 25px;
    color: #fff;
    padding: 3px 10px;
    margin-top: 10px;
    text-transform: capitalize;
    background-color: #ffffff33;
    border-radius: 15px;
    text-align: center;
`;
export const PokeIndice = styled.span`
    display: block;
    width: 100%;
    color: #fff;
    padding: 3px 10px;
    text-align: right;
    padding: 0 0 5px 0;
`;
