import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import listData  from '../JSON/list.json';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  submitted = false;

  constructor(private fb: FormBuilder,
    private route: Router) { }

  listForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    country: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
  });


  ngOnInit(): void {
  }

  get listFormControl() {
    return this.listForm.controls;
  }

  public save() {
    this.submitted = true;
    console.log(this.listForm.value);
    listData.push(this.listForm.value);
    this.route.navigate(['/']);
  }
}
