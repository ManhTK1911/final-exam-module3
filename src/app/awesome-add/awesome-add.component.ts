import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Awesome} from '../../../awesome';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-awesome-add',
  templateUrl: './awesome-add.component.html',
  styleUrls: ['./awesome-add.component.scss']
})
export class AwesomeAddComponent implements OnInit {

  awesomeForm: FormGroup = new FormGroup({
    tag: new FormControl(''),
    url: new FormControl(('')),
    description: new FormControl(''),
  });

  @Output() addAwesome = new EventEmitter<Awesome>();

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const awesome = this.awesomeForm.value;
    this.addAwesome.emit(awesome);
    this.awesomeService.addAwesome(awesome).subscribe(result => {
      alert('added successfully!');
    });
  }
}
