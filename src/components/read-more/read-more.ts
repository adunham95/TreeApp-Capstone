import { Component } from '@angular/core';


@Component({
  selector: 'read-more',
  templateUrl: 'read-more.html',
  styles: [`
        div.collapsed {
            height: 100px;
            overflow: hidden;
        }
    `]
})
export class ReadMore {
  isCollapsed: boolean = true;
}
