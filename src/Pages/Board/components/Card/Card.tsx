import React from 'react';
import './Card.scss';

interface IProps {
  title: string;
}

export default function List(props: IProps): JSX.Element {
  const { title } = props;
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
    </div>
  );
}
