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

export const ListMenu = styled.ul`
    display: flex;
    justify-content: space-between;
`;
export const Item = styled.li`
    margin-right: 50px;
`;
export const Action = styled.a`
    font-size: 16px;
    text-transform:uppercase;
    color: #385faa;
 `;