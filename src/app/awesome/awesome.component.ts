import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Awesome} from '../../../awesome';
import {AwesomeService} from '../awesome.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-awesome',
  templateUrl: './awesome.component.html',
  styleUrls: ['./awesome.component.scss']
})
export class AwesomeComponent implements OnInit {

  @Input() awesome: Awesome;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor(private awesomeService: AwesomeService,
              private router: Router) { }

  ngOnInit() {
  }

  editAwesome() {
    this.edit.emit();
  }

  deleteAwesome() {
    this.awesomeService.deleteAwesome(this.awesome.id).subscribe(result => {
      alert('deleted successfully!');
      this.delete.emit();
    });
  }

}
