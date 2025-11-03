import styled from "styled-components";

const H1 = styled.h1`
  color: white;
`;

const Image = styled.img`
  width: 600px;
  border-radius: 50px;
`;

const Abouts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  font-family: monospace;
  flex: 1;

  & p {
    font-size: 22px;
  }
`;

export default function About() {
  return (
    <Abouts className="about">
      <H1>Seth Johnson</H1>
      <Image src="../public/Weekend In the Life.png" alt="picture" />
      <p>
        Mood Movie is an interactive app designed to help users find the perfect
        movie based on how they are feeling. Whether you are happy, sad, excited
        or feeling romantic we have a movie for you. This is a way not only to
        enjoy a good movie but by you identifying your feelings, this can help
        you toward your break through.{" "}
      </p>
      <br />
      <p>
        This project means alot to me as a Mental Health professional.I truly
        believe in the super powers of having a Mental Health advocate in all
        work places. For some reason we have become reactive instead of
        proactive when it comes to Mental Health concerns. I hope this project
        brings a sense of awareness to those who take the time to check it out.
      </p>
      <h2>~Blessings, Seth Johnson</h2>
    </Abouts>
  );
}
