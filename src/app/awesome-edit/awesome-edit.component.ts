import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Awesome} from '../../../awesome';
import {FormControl, FormGroup} from '@angular/forms';
import {AwesomeService} from '../awesome.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-awesome-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.scss']
})
export class AwesomeEditComponent implements OnInit {

  @Output() delete = new EventEmitter();

  awesome: Awesome;

  awesomeForm: FormGroup;

  @Output() editAwesome = new EventEmitter<Awesome>();

  constructor(private awesomeService: AwesomeService,
              private route: Router) {
  }

  ngOnInit() {
    this.awesome = this.awesomeService.getData();
    this.awesomeForm = new FormGroup({
      tag: new FormControl(this.awesome.tag),
      url: new FormControl(this.awesome.url),
      description: new FormControl(this.awesome.description),
    });
  }

  onSubmit() {
    this.awesomeService.editAwesome(this.awesomeForm.value).subscribe(result => {
      alert('edited successfully!');
    });
  }

  deleteAwesome() {
    this.awesomeService.deleteAwesome(this.awesome.id).subscribe(result => {
      alert('deleted successfully!');
      this.delete.emit();
    });
  }


}
