import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Awesome} from '../../../awesome';
import {AwesomeService} from '../awesome.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.scss']
})
export class AwesomeListComponent implements OnInit {

  @Output() delete = new EventEmitter();

  awesomeList: Awesome[];
  isFormHidden = true;

  constructor(private awesomeService: AwesomeService,
              private router: Router) {
    this.updateList();
  }

  ngOnInit() {
  }

  showFormAdd() {
    this.isFormHidden = !this.isFormHidden;
  }

  addAwesome(awesome: Awesome) {
    this.awesomeList.push(awesome);
  }

  updateList() {
    this.awesomeService.getList().subscribe(result => {
      this.awesomeList = result;
    });
  }

  goToEdit(item: Awesome) {
    this.awesomeService.setData(item);
    this.router.navigateByUrl('/edit-awesome');
  }


}
