import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  from = new FormControl('');
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // we will initialize our form here
    this.myForm = this.fb.group({
      times: this.fb.array([
        this.initTimes()
      ])
    });
    this.fa.valueChanges.subscribe(value => {
      console.log('name has changed:', value)
    });
  }

  trackByFn(index: number, item: any) {
    return item.trackingId;
  }

  initTimes() {
    return this.fb.group({
      from: this.fb.control('', Validators.required),
      to: this.fb.control('', Validators.required),
      trackingId: this.generateUniqueId()
    });
  }

  generateUniqueId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  get fa() { return this.myForm.get('times') as FormArray; }

  addGroup() {
    this.fa.push(this.initTimes());
  }

  removeGroup(i: number) {
    this.fa.removeAt(i);
  }

  public cpfcnpjmask = function (rawValue) {
    var numbers = rawValue.match(/\d/g);
    var numberLength = 0;
    if (numbers) {
      numberLength = numbers.join('').length;
    }
    if (numberLength <= 11) {
      return [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
    } else {
      return [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
    }
  }

  // onSubmit() {
    // console.log('value: ', this.myForm.value);
    // console.log('valid: ', this.myForm.valid);
    // console.log('to: ', this.myForm.value);
    // console.log('to: ', this.myForm.status);
    // console.log(this.from.status);
    // console.log(this.from.valid);
  // }
}
