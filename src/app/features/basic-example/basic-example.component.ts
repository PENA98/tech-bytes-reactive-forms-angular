import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-example',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './basic-example.component.html',
  styleUrl: './basic-example.component.scss',
})
export class BasicExampleComponent {
  form: FormGroup;
  response: unknown;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.form = new FormGroup({
      filters: new FormArray([]),
    });
  }

  get filters() {
    return this.form.get('filters') as FormArray;
  }

  addField() {
    const filter = this.formBuilder.group({
      name: new FormControl('', Validators.required),
    });

    this.filters.push(filter);
  }

  showErrors(index: number) {
    return (
      this.form.get('filters')?.get(index.toString())?.get('name')?.invalid &&
      this.form.get('filters')?.get(index.toString())?.get('name')?.touched
    );
  }

  onSubmit() {
    console.log(this.form.value);
    this.httpClient
      .post('https://httpbin.org/post', this.form.value)
      .subscribe((response: any) => {
        this.response = response['data'];
        console.log(response);
      });
  }
}
