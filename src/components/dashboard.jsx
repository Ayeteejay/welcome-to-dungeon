import React, { useState } from "react";
import styled from "styled-components";

const Screen = styled.div`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 4rem;
`;

const PlayerDashboard = styled.div`
  .player-statistics {
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
    padding: 1rem 0;
    margin: 0 0 1rem 0;
  }
  .level-status {
    text-transform: uppercase;
    font-weight: bold;
  }
  .inventory-status {
  }
  ul {
    list-style: none;
  }
`;

const AdventureScreen = styled.div`
  display: flex;
  flex-flow: column;
  p {
    font-size: 1.5rem;
  }
  input {
    padding: 1rem 1.5rem;
    background: none;
    border: 1px solid #000;
    font-size: 1.25rem;
    transition: all ${(props) => props.theme.transition.normal};
    &:hover,
    &:focus {
      background: ${(props) => props.theme.colors.secondary};
      color: #fff;
    }
    &::placeholder {
      color: ${(props) => props.theme.colors.tertiary};
    }
  }
  button {
    max-width: 150px;
    padding: 1rem;
    font-size: 1.25rem;
    margin: 1rem 0 0 0;
  }
  .quest-description {
  }
  .player-input {
    display: flex;
    flex-flow: column;
    margin: 2rem 0 0 0;
  }
  .instructions {
    font-size: 0.8rem;
  }
`;

const Dashboard = (props) => {
  const [playerInventory, setPlayerInventory] = useState([
    {
      itemId: 1,
      name: "Potion",
      quantity: 1,
    },
  ]);
  const [playerStats, setPlayerStats] = useState({
    level: 1,
    hitPoints: props.character.hitPoints,
    magicPoints: props.character.magicPoints,
    attackPower: props.character.attackPower,
    magicPower: props.character.magicPower,
  });
  return (
    <Screen>
      <PlayerDashboard>
        <div className="player-statistics">
          <h1>{props.character.name}</h1>
          <p className="level-status">Level {playerStats.level}</p>
          <p>
            <strong>HP</strong> {playerStats.hitPoints} | <strong>MP</strong>{" "}
            {playerStats.magicPoints}
          </p>
          <p>
            <strong>Power</strong> {playerStats.attackPower} |{" "}
            <strong>Magic</strong> {playerStats.magicPower}
          </p>
        </div>
        <div className="inventory-status">
          <p>
            <strong>Inventory</strong>
          </p>
          <ul
            style={{ display: playerInventory.length !== 0 ? "block" : "none" }}
          >
            {playerInventory.map((value, index) => {
              return (
                <li>
                  {value.name} x{value.quantity}
                </li>
              );
            })}
          </ul>
          <ul
            style={{ display: playerInventory.length === 0 ? "block" : "none" }}
          >
            <li>Your inventory is empty.</li>
          </ul>
        </div>
      </PlayerDashboard>
      <AdventureScreen>
        <div className="question-description">
          <p>Welcome {props.character.name}.</p>

          {/* Fix this below */}
          {/* <p>{props.quest}</p> */}
        </div>
        <div className="player-input">
          {/* <input placeholder="What would you like to do?"></input>
          <p className="instructions">
            Stuck? Some valid actions are "Move Left", "Attack", "Look."
          </p>
          <button className="primary-cta">Submit</button> */}
          <button className="primary-cta">&#8592;</button>
          <button className="primary-cta">&#8593;</button>
          <button className="primary-cta">&#8594;</button>
          <button className="primary-cta">&#8595;</button>
        </div>
      </AdventureScreen>
    </Screen>
  );
};
export default Dashboard;
