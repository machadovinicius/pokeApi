import styled from "styled-components";

export const Container = styled.div`
    background: white;
    box-shadow: 0 2px 2px rgb(44, 113, 184);
`;
export const NavBar = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Image = styled.img`
    width: 120px;
    height: auto;
`;
export const Menu = styled.div`
    width: 25px;
    height: 21px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right: 10px;
    span{
        display: block;
        width: 100%;
        height: 3px;
        background: #274987;
    }
`;
export const ListMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #fff;
    position: absolute;
    z-index: 3;
    top: 0;
    left: ${props => props.active ? '0' : '-3500px'};
    padding: 20% 0;
    background: #ef5350;
    transition: all 1s ease-in-out;
    img{
        margin-bottom: 30px;
    }
`;

export const Close = styled.div`
    position: absolute;
    right: 10%  ;
    top: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    img{
        width: 30px;
    }
`;
export const Item = styled.li`
    display: block;
    width: 80%;
    text-align: center;
    padding: 15px 0;
    border-top: 1px solid #ef5350;
    a{
        color: #fff;
        font-weight: bold;
        font-size: 18px;
    }
`;
