import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
	data = [
    {
      "subtitle": "Douglas  Pace",
      "title": "Douglas  Pace",
      "Content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "subtitle": "Mcleod  Mueller",
      "title": "Mcleod  Mueller",
      "Content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      "subtitle": "Day  Meyers",
      "title": "Day  Meyers",
      "Content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
      "subtitle": "Aguirre  Ellis",
      "title": "Aguirre  Ellis",
      "Content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"
    },
    {
      "subtitle": "Cook  Tyson",
      "title": "Cook  Tyson",
      "Content": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    }
  ];
}
