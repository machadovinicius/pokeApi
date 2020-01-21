import styled, { keyframes } from "styled-components";
import ColorTypes from '../../global/ColorTypes';


const widthFade = keyframes`
  from {
    width: 0;
    height: 0;
  }

  to {
    width: 96px;
    height: auto; 
  }
`;

export const Container = styled.div`
    max-width: 900px;
    width: 100%;
    margin: 50px auto;
    padding: 0 15px;
`;
export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
   
`;
export const Head = styled.div`
    background-color: ${ props => props.typeColor ? ColorTypes[props.typeColor] : '#000'};
    width: 100%;
    max-height: 200px;
    height: 100%;
    padding: 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    z-index: 2;
`;
export const Item = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;
export const PokeIndice = styled.span`
    display: block;
    color: #fff;
    text-align: right;
    width: 100%;
`;
export const Title = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 28px;
    text-transform: capitalize;
    text-align: center;
`;
export const ListTypes = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
`;
export const Type = styled.li`
    color: #fff;
    padding: 3px 15px;
    margin-right: 10px;
    text-transform: capitalize;
    background-color: #ffffff33;
    border-radius: 15px;
    font-size: 14px;
`;
export const Circle = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ffffff33;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
 `;
export const Image = styled.img`
    opacity: 1;
    animation: ${widthFade} 1s;
    transition: all 1s ease-in;
`;
export const Content = styled.div`
    width: 100%;
    box-shadow: 0 2px 2px rgb(0,0,0,0.2);
    background-color: #fff;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    z-index: 1;
    padding: 20px;
`;
export const Abilities = styled.ul`

`;
export const Text = styled.span`
    display: flex;
    color: #000;
    text-transform: capitalize;
    font-size: 14px;
    line-height: 22px;
    justify-content: space-between;
    
`;
export const Strong = styled.span`
    display: block;
    text-align: left;
    width: 50%;
`;
export const Soft = styled.span`
    display: block;
    color: #737373;
    margin-right: 10px;
    width: 50%;
`;
export const TitleConent = styled.span`
    display: block;
    color: #0d0b0b;
    width: 15%;
    padding: 3px 10px 5px 0;
    border-bottom: 2px solid #cacaca;
    text-transform: capitalize;
    font-size: 14px;
    margin-bottom: 20px;
`;
export const StrongTitle = styled.span`
    display: block;
    color: #000;
    font-weight: bold;
    font-size: 15px;
    padding: 10px 0;
`;
