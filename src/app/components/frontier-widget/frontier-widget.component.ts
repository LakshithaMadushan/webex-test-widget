import {Component, OnInit, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-frontier-widget',
  templateUrl: './frontier-widget.component.html',
  styleUrls: ['./frontier-widget.component.css']
})
export class FrontierWidgetComponent implements OnInit {

  @Input() email: string;
  showPanelContainer = false;
  isSuccess: boolean;

  constructor(private elm: ElementRef) {
    this.email = elm.nativeElement.getAttribute('email');
  }

  ngOnInit() {
  }

  showHidePanelContainer(event) {
    this.showPanelContainer = event;
  }

  isAuthSuccess(event) {
    this.isSuccess = event;
    return this.isSuccess;
  }
}
