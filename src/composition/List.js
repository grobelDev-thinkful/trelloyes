import React from 'react';
import './List.css';

import Card from './Card';

class ListClass extends React.Component {

    render() {
        return (
            <section className='List'>
                <header className='List-header'>
                    <h2>{this.props.header}</h2>
                </header>
                <div className='List-cards'>
                    {this.props.cards.map(card => (
                        <Card
                            key={card.id}
                            title={card.title}
                            content={card.content}
                        ></Card>
                    ))}
                    <button
                    type='button'
                    className='List-add-button'
                    >
                    + Add Random Card
                    </button>
                </div>
            </section>
        )
    }
}


// export default List;
export default ListClass;

