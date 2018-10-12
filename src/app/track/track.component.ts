import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  moods = new FormControl('');
  activities = new FormControl('');
  activities_data = [];

  track: FormGroup = this.builder.group({
    moods: this.moods,
    activities: this.activities
  });

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
  }

  generateJsonPayload(): void {
    console.log('Generate data :', 'generating.....');
  }

  addActivity(): void {
    let data = {};
    console.log('Activity', this.activities.value);
    data['activity'] = this.activities.value;
    this.activities_data.push(data);
    console.log('Activities :', this.activities_data);
  }
}
