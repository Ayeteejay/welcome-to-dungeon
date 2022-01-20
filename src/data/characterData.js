const characters = [
  {
    id: 1,
    name: "Warrior",
    biography:
      "Standard tank character with high defense and attack power. Barge head first into battle.",
    hitPoints: 30,
    magicPoints: 3,
    attackPower: 10,
    magicPower: 1,
    path: "/warrior",
  },
  {
    id: 2,
    name: "Sorcerer",
    biography: "Trades lower attack power for greater list of spells.",
    hitPoints: 15,
    magicPoints: 30,
    attackPower: 1,
    magicPower: 10,
    path: "/sorcerer",
  },
  {
    id: 3,
    name: "Rogue",
    biography:
      "Balanced character. Able to use all weapons including bows, staffs and swords.",
    hitPoints: 20,
    magicPoints: 10,
    attackPower: 6,
    magicPower: 4,
    path: "/rogue",
  },
];
export default characters;
