import React from 'react';
import List from './components/List/List';
import './Board.scss';
import { IList } from '../../common/interfaces/IList';

interface IProps {
  test: string;
}

interface IState {
  title: string;
  lists: Array<IList>;
}

export default class Board extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: 'Моя тестовая доска',
      lists: [
        {
          id: 1,
          title: 'Планы',
          cards: [
            { id: 1, title: 'помыть кота' },
            { id: 2, title: 'приготовить суп' },
            { id: 3, title: 'сходить в магазин' },
          ],
        },
        {
          id: 2,
          title: 'В процессе',
          cards: [
            {
              id: 4,
              title: 'посмотреть сериал',
            },
          ],
        },
        {
          id: 3,
          title: 'С',
          cards: [
            { id: 5, title: 'с' },
            { id: 6, title: 'п' },
          ],
        },
      ],
    };
  }

  render(): JSX.Element {
    const { title } = this.state;
    const { lists } = this.state;
    const listsComponents: Array<JSX.Element> = lists.map((item): JSX.Element => {
      return <List key={item.id} title={item.title} cards={item.cards} />;
    });

    return (
      <div className="board">
        <div className="board__header">
          <h2 className="board__title">{title}</h2>
          <button className="board__list-add-button">Add new list</button>
        </div>
        <div className="board__list-container">{listsComponents}</div>
      </div>
    );
  }
}
