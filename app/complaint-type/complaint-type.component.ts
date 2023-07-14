import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-complaint-type',
  templateUrl: './complaint-type.component.html',
  styleUrls: ['./complaint-type.component.scss'],
})
export class ComplaintTypeComponent implements OnInit {
  isChecked: boolean = false;
  isDashBoard: boolean = false;
  //  '#33835C' bg
  complaintTypes: any[] = [
    {
      icon: 'fa-solid fa-car border',
      type: 'صياته السياره',
    },
    {
      icon: 'fa-sharp fa-solid fa-circle-exclamation',
      type: ' أحقيه خصم تأمين السياره',
    },
    {
      icon: 'fa-sharp fa-solid fa-car-burst',
      type: 'بلاغ عن حادث',
    },
    {
      icon: 'fa-solid fa-car-tunnel',
      type: 'بلاغ عن احتيال',
    },
    {
      icon: 'fa-sharp fa-solid fa-cart-flatbed-suitcase',
      type: 'ملخص تقييم الاضرار',
    },
    {
      icon: 'fa-sharp fa-solid fa-car-burst',
      type: 'بلاغ عن حادث',
    },
    {
      icon: 'fa-solid fa-car-tunnel',
      type: 'بلاغ عن احتيال',
    },
    {
      icon: 'fa-sharp fa-solid fa-cart-flatbed-suitcase',
      type: 'ملخص تقييم الاضرار',
    },
    {
      icon: 'fa-solid fa-car-tunnel',
      type: 'بلاغ عن احتيال',
    },
    {
      icon: 'fa-sharp fa-solid fa-cart-flatbed-suitcase',
      type: 'ملخص تقييم الاضرار',
    },
  ];

  constructor() {}
  ngOnInit(): void {}
  Checked(i: number) {
    // this.getElementNeedToCHange(i);
    this.isChecked = true;
  }
  // getElementNeedToCHange(i: number) {
  //   let allCards = Array.from(document.querySelectorAll('.card'));
  //   allCards.filter((x, index) => {
  //     if (i == index) {
  //       this.changeColor(x);
  //     }
  //   });
  // }
  // changeColor(x){
  //   x.
  // }
}
