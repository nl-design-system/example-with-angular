import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  checkbox = new FormControl(true);
  textbox = new FormControl('Sam Simpleton');
  currentLang$: Observable<string>;

  constructor(private translate: TranslateService) {
    this.currentLang$ = translate.onDefaultLangChange.pipe(map(({ lang }: { lang: string }) => lang));
  }
  setLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
  }
}
