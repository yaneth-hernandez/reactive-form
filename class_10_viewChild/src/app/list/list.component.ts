import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  {
  items: any = [
    {
      id:1,
      name: 'Elemento1',
    },
    {
      id:2,
      name: 'Elemento2',
    },
    {
      id:3,
      name: 'Elemento3',
    },
  ];

  @ViewChild('listItems') listItems!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  // ngAfterViewInit(): void {}

  highlightItem(index: number): void {
      const listItem = this.listItems.nativeElement.children[
      index
    ] as HTMLElement | null;

    if (listItem) {
      listItem.style.backgroundColor = 'yellow';
    }
  }
}
