import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpData } from '../emp.model';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  isCreate: boolean;

  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmpData) { }

  ngOnInit() {

    this.isCreate = Object.keys(this.data).length === 0 ? true : false

    this.id = this.data.id;
    this.email = this.data.email;
    this.first_name = this.data.first_name;
    this.last_name = this.data.last_name;
    this.avatar = this.data.avatar;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
