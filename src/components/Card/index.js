import styled from "styled-components";

const CARD = styled.div`
  background-color: var(--nav2);
  color: var(--white);
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  border-radius: 20px;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Image = styled.img`
  width: 40%;
  height: 40%;
  object-fit: cover;
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translateX(-50%);
  border-radius: 50%;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;
const Text = styled.h4`
  padding: 0 calc(1rem + 1vw);
  padding-top: 1rem;
  font-size: calc(0.6rem + 0.5vw);
  text-align: center;
`;
const Name = styled.h3`
  color: var(--pink);
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`;

const Card = ({ name, text, image }) => {
  return (
    <CARD>
      <Image src={image} alt="" width="400" height="400" />
      <Text>{text}</Text>
      <Name>{name}</Name>
    </CARD>
  );
};

export default Card;
