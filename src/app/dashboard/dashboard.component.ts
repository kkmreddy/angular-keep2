import { Component } from '@angular/core';
import { NotesService } from '../services/notes.service';
import {Note} from '../note';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  note: Note = new Note();
  noteList: Array<Note> = [];

  constructor(private noteservice: NotesService) {

  }

  ngOnInit() {

    this.noteservice.getNotes().subscribe(
      data => {
        this.noteList = data;
      }
    )

  }

  takeNotes() {

    this.noteservice.addNote(this.note).subscribe(
      data => {
        this.noteList.push(data)
      }
    )

    this.note = new Note();

  }

}



