import React from 'react';
import Masonry from 'react-masonry-component';

import Note from './Note.jsx';

import './NotesGrid.css';

const masonryOptions = {
  columnWidth: 250,
  gutter: 10,
  isFitWidth: true
};

const NotesGrid = React.createClass({
    render() {
        const {
            notes,
            onNoteDelete
        } = this.props;

        return (
            <Masonry
                className='grid'
                options={masonryOptions}
            >
                {
                    notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            color={note.color}
                            onDelete={onNoteDelete}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
});

export default NotesGrid;
