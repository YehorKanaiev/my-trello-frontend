import React from 'react';
import Card from '../Card/Card';
import { ICard } from '../../../../common/interfaces/ICard';
import './List.scss';

interface IProps {
  title: string;
  cards: ICard[];
}

export default function List(props: IProps): JSX.Element {
  const { cards } = props;
  const { title } = props;
  const cardsList = cards.map((card) => {
    return <Card key={card.id} title={card.title} />;
  });
  return (
    <div className="list">
      <h2 className="list__title">{title}</h2>
      <div className="list__cards">{cardsList}</div>
      <button className="list__card-add-button">Add new card</button>
    </div>
  );
}
