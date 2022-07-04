import styled from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  top: 70px;
  left: 0;
  width: 250px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #240047;
  padding: 10px 120px;

  .true {
    background: green;
  }

  .false {
    background: red;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarList = styled.ul`
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavbarItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;

  &.active {
    background: #fff;
    color: #000;
  }

  &:hover {
    background: #fff;
    color: #000;
    cursor: pointer;
  }
`;