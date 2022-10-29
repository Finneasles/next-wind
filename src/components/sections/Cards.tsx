import React, { useEffect, useState } from "react";
import { Card, Cards as CardsContainer } from "@/components";

const cardsData = [
  {
    title: "Neque Quisquam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum ante nec tincidunt iaculis. Duis.",
    cta: "Dolor sit",
    href: "/home",
  },
  {
    title: "Mauris Feugiat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum ante nec tincidunt iaculis. Duis.",
    cta: "Dolor sit",
    href: "/home",
  },
  {
    title: "Suspendisse Mattis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum ante nec tincidunt iaculis. Duis.",
    cta: "Dolor sit",
    href: "/home",
  },
];

export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <section className="bg-blueGray-200 -mt-24 pb-10">
      <CardsContainer>
        {cards.map((card) => {
          return (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              cta={card.cta}
            />
          );
        })}
      </CardsContainer>
    </section>
  );
};

export default Cards;
