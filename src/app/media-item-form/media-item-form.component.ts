import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormBuilder } from "@angular/forms";
import { MediaItemService } from "../media-item.service";
import { lookupListToken } from "../providers";

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.pattern("[\\w\\-\\s\\/]+"),
        Validators.required
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { year: true };
    }
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
  }
}
