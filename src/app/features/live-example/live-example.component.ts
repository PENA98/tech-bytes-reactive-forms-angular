import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-example',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './live-example.component.html',
  styleUrl: './live-example.component.scss',
})
export class LiveExampleComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
