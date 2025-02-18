import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ButtonWebComponent } from '@rijkshuisstijl-community/web-components';

@Component({
  selector: 'example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'my-app';
  checkbox = new UntypedFormControl(true);
  textbox = new UntypedFormControl('Sam Simpleton');
  textarea = new UntypedFormControl('Lorem ipsum');
  email = new UntypedFormControl('info@example.com');
  url = new UntypedFormControl('https://example.com/');
  radio = new UntypedFormControl('A');
  number = new UntypedFormControl('42');
  currentLang$: Observable<string>;

  constructor(private translate: TranslateService) {
    this.currentLang$ = translate.onDefaultLangChange.pipe(map(({ lang }: { lang: string }) => lang));
  }
  setLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
  }

  ngOnInit(): void {
    ButtonWebComponent.define();
  }
}
