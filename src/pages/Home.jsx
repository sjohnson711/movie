import MoodSelector from "../features/moodSelector/MoodSelector.jsx";
import styled from "styled-components";

const Body = styled.body`
  height: 100vh;
`;

export default function Home() {
  return (
    <div>
      <h1 style={{ color: "rgb(204, 204, 255)" }}>
        How ARE YOU FEELING TODAY?
      </h1>
      <MoodSelector />
    </div>
  );
}
