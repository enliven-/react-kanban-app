import AltContainer from 'alt-container';


import React from 'react';
import Notes from './Notes.jsx';

import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';


export default class App extends React.Component {



  addNote() {
    NoteActions.create( {task: 'New Task'} );
  }

  editNote(id, task) {
    NoteActions.update( {id: id, task: task} );
  }

  deleteNote(id) {
    NoteActions.delete(id);
  }


  render() {

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <AltContainer stores={ [NoteStore] } inject={ { notes: () => NoteStore.getState().notes } }>
          <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
        </AltContainer>
      </div>
    );
  }
}