import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

const Body = styled.div`
  min-height: 100vh;
  font-family: monospace;
  background-color: black;
  color: white;
  flex-direction: column;
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
  scrollbar-width: none;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-context: center;
  text-align: center;
  margin: auto;
  margin-bottom: 400px;
`;

export default function LayOut() {
  return (
    <Body>
      <NavBar />

      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Body>
  );
}
