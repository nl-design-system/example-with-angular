"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["main"],{

/***/ 6638:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4251);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4494);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 6319);
/* harmony import */ var _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utrecht/component-library-angular */ 3085);
/* harmony import */ var _components_story_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/story/component */ 6660);
/* harmony import */ var _theme_switcher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-switcher.component */ 3920);








class AppComponent {
  constructor(translate) {
    this.translate = translate;
    this.title = 'my-app';
    this.checkbox = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(true);
    this.textbox = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl('Sam Simpleton');
    this.textarea = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl('Lorem ipsum');
    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl('info@example.com');
    this.url = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl('https://example.com/');
    this.radio = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl('A');
    this.number = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl('42');
    this.currentLang$ = translate.onDefaultLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(({
      lang
    }) => lang));
  }
  setLanguage(lang) {
    this.translate.setDefaultLang(lang);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["example-root"]],
    decls: 452,
    vars: 65,
    consts: [["utrecht-document", ""], ["utrecht-paragraph", ""], ["href", "https://github.com/nl-design-system/example-with-angular", "utrecht-link", "", 3, "external"], ["name", "Heading 1", "id", "angular-utrecht-heading-1"], ["name", "Heading 2", "id", "angular-utrecht-heading-2"], ["name", "Heading 3", "id", "angular-utrecht-heading-3"], ["name", "Heading 4", "id", "angular-utrecht-heading-4"], ["name", "Heading 5", "id", "angular-utrecht-heading-5"], ["name", "Heading 6", "id", "angular-utrecht-heading-6"], ["name", "Ordered list", "id", "angular-utrecht-ordered-list"], ["utrecht-ordered-list", ""], ["utrecht-ordered-list-item", ""], ["name", "Separator", "id", "angular-utrecht-separator"], ["name", "Unordered list", "id", "angular-utrecht-unordered-list"], ["utrecht-unordered-list", ""], ["utrecht-unordered-list-item", ""], ["name", "Form label", "id", "angular-utrecht-form-label"], ["utrecht-form-label", ""], ["name", "Form label for radio button option", "id", "angular-utrecht-form-label--radio"], ["utrecht-form-label", "", "type", "radio"], ["name", "Form label for checkbox option", "id", "angular-utrecht-form-label--checkbox"], ["utrecht-form-label", "", "type", "checkbox"], ["name", "Form label for disabled form control", "id", "angular-utrecht-form-label--disabled"], ["utrecht-form-label", "", 3, "disabled"], ["name", "Form label for checked radio button", "id", "angular-utrecht-form-label--checked"], ["utrecht-form-label", "", "type", "radio", 3, "checked"], ["name", "Form label for checked checkbox button", "id", "angular-utrecht-form-label--checked-radio"], ["utrecht-form-label", "", "type", "checkbox", 3, "checked"], ["name", "Textbox", "id", "angular-utrecht-textbox"], ["type", "text", "utrecht-textbox", ""], ["name", "Disabled textbox", "id", "angular-utrecht-textbox--disabled"], ["type", "text", "utrecht-textbox", "", 3, "disabled"], ["name", "Read-only textbox", "id", "angular-utrecht-textbox--read-only"], ["type", "text", "utrecht-textbox", "", 3, "readOnly"], ["name", "Invalid textbox", "id", "angular-utrecht-textbox--invalid"], ["type", "text", "utrecht-textbox", "", 3, "invalid"], ["name", "Required textbox"], ["type", "text", "utrecht-textbox", "", "id", "angular-utrecht-textbox--required", 3, "required"], ["name", "Textbox with placeholder FIXME", "id", "angular-utrecht-textbox--placeholder"], ["type", "text", "utrecht-textbox", "", "placeholder", "Placeholder"], ["name", "Textarea", "id", "angular-utrecht-textarea"], ["utrecht-textarea", ""], ["name", "Disabled textarea", "id", "angular-utrecht-textarea--disabled"], ["utrecht-textarea", "", 3, "disabled"], ["name", "Read-only textarea", "id", "angular-utrecht-textarea--read-only"], ["utrecht-textarea", "", 3, "readOnly"], ["name", "Invalid textarea", "id", "angular-utrecht-textarea--invalid"], ["utrecht-textarea", "", 3, "invalid"], ["name", "Required textarea", "id", "angular-utrecht-textarea--required"], ["utrecht-textarea", "", 3, "required"], ["name", "Textarea with placeholder", "id", "angular-utrecht-textarea--placeholder"], ["utrecht-textarea", "", "placeholder", "Placeholder"], ["utrecht-form-fieldset", ""], ["utrecht-form-fieldset-legend", ""], ["utrecht-form-label", "", "type", "checkbox", "for", "b14381ec-d517-4a2e-9d37-e920501fbe93"], ["type", "checkbox", "utrecht-checkbox", "", "id", "b14381ec-d517-4a2e-9d37-e920501fbe93", "value", "1"], ["utrecht-form-label", "", "type", "checkbox", "for", "d404ad81-6f6e-48e9-a0d2-bd9c38a333d7"], ["type", "checkbox", "utrecht-checkbox", "", "id", "d404ad81-6f6e-48e9-a0d2-bd9c38a333d7", "value", "2"], ["utrecht-form-label", "", "type", "checkbox", "for", "f35c996f-8617-442a-85b5-80a5086d97c9", 3, "disabled"], ["type", "checkbox", "utrecht-checkbox", "", "id", "f35c996f-8617-442a-85b5-80a5086d97c9", "value", "3", 3, "disabled"], ["utrecht-form-label", "", "type", "checkbox", "for", "e8b3c516-76eb-40bb-835e-282b60782028"], ["type", "checkbox", "utrecht-checkbox", "", "id", "e8b3c516-76eb-40bb-835e-282b60782028", "value", "4", 3, "required"], ["utrecht-form-label", "", "type", "checkbox", "for", "61cff474-ee09-4571-9896-1ba1291f1ffa"], ["type", "checkbox", "utrecht-checkbox", "", "id", "61cff474-ee09-4571-9896-1ba1291f1ffa", "value", "5", 3, "invalid"], ["name", "External link"], ["href", "https://example.com", "utrecht-link", "", 3, "external"], ["name", "Link to the previous page in a series of pages"], ["href", "#prev", "utrecht-link", "", "rel", "prev"], ["name", "Link"], ["href", "https://example.com", "utrecht-link", ""], ["name", "Button", "id", "angular-utrecht-button"], ["utrecht-button", ""], ["name", "Primary action button", "id", "angular-utrecht-button--primary-action"], ["utrecht-button", "", "appearance", "primary-action-button"], ["name", "Secondary action button", "id", "angular-utrecht-button--secondary-action"], ["utrecht-button", "", "appearance", "secondary-action-button"], ["name", "Subtle button", "id", "angular-utrecht-button--subtle"], ["utrecht-button", "", "appearance", "subtle-action-button"], ["name", "Disabled button", "id", "angular-utrecht-button--disabled"], ["utrecht-button", "", "type", "submit", 3, "disabled"], ["name", "Submit button", "id", "angular-utrecht-button--submit"], ["utrecht-button", "", "type", "submit"], ["name", "Busy button", "id", "angular-utrecht-button--busy"], ["utrecht-button", "", 3, "busy"], ["name", "Button group", "id", "angular-utrecht-button-group"], ["name", "Table", "id", "angular-utrecht-table"], ["utrecht-table", ""], ["utrecht-table-caption", ""], ["utrecht-table-header", ""], ["utrecht-table-row", ""], ["utrecht-table-header-cell", "", "scope", "column"], ["utrecht-table-footer", ""], ["utrecht-table-cell", ""], ["utrecht-table-body", ""], ["utrecht-table-header-cell", "", "scope", "row"], ["name", "Neutral badge"], ["type", "neutral"], ["name", "Danger badge"], ["type", "danger"], ["nmae", "Warning badge"], ["type", "warning"], ["name", "Safe badge"], ["type", "safe"], ["name", "Invalid badge"], ["type", "invalid"], ["name", "Valid badge"], ["type", "valid"], ["name", "Error badge"], ["type", "error"], ["name", "Success badge"], ["type", "success"], ["name", "Inactive badge"], ["type", "inactive"], ["name", "Active badge"], ["type", "active"], ["type", "radio", "utrecht-radio-button", "", "id", "option-a", "name", "option", "value", "A"], ["for", "option-a", "utrecht-form-label", ""], ["type", "radio", "utrecht-radio-button", "", "id", "option-b", "name", "option", "value", "B"], ["for", "option-b", "utrecht-form-label", ""], ["utrecht-form-label", "", "for", "14d07fbb-0890-41b3-a9f2-2bff1ad100d0"], ["utrecht-textbox", "", "id", "14d07fbb-0890-41b3-a9f2-2bff1ad100d0", 3, "formControl"], ["utrecht-textbox", "", 3, "formControl", "required"], ["utrecht-textbox", "", 3, "formControl", "disabled"], ["utrecht-textbox", "", 3, "formControl", "readonly"], ["utrecht-textbox", "", 3, "formControl", "invalid"], ["utrecht-textbox", "", "type", "email", 3, "formControl"], ["utrecht-textbox", "", "type", "url", 3, "formControl"], ["utrecht-textbox", "", "type", "number", 3, "formControl"], ["utrecht-textbox", "", "inputmode", "number", 3, "formControl"], ["utrecht-textarea", "", 3, "formControl"], ["utrecht-textarea", "", 3, "formControl", "required"], ["utrecht-textarea", "", 3, "formControl", "disabled"], ["utrecht-textarea", "", 3, "formControl", "readonly"], ["utrecht-textarea", "", 3, "formControl", "invalid"], ["type", "checkbox", "utrecht-checkbox", "", 3, "formControl"], ["for", "dd122ad5-3ef9-4120-b98b-ff8cac9f604e", "utrecht-form-label", ""], ["type", "radio", "utrecht-radio-button", "", "value", "A", "id", "dd122ad5-3ef9-4120-b98b-ff8cac9f604e", 3, "formControl"], ["for", "f02359c9-2eb8-47cb-a471-227038330ba6", "utrecht-form-label", ""], ["type", "radio", "utrecht-radio-button", "", "value", "B", "id", "f02359c9-2eb8-47cb-a471-227038330ba6", 3, "formControl"], ["name", "Paragraph", "id", "angular-utrecht-paragraph"], ["name", "Lead paragraph", "id", "angular-utrecht-paragraph--lead"], ["utrecht-paragraph", "", 3, "lead"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "utrecht-page")(2, "utrecht-page-content")(3, "main")(4, "utrecht-article")(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "NL Design System met Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Van bijna alle componenten in de NL Design System community is herbruikbare CSS beschikbaar. Voor Angular is een gedeelte beschikbaar als component. Dat betekent dat je niet meer zelf alle CSS class names hoeft te schrijven, en je code-editor autocomplete heeft voor diverse properties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Componenten die nog niet voor Angular beschikbaar zijn, kun je waarschijnlijk relatief snel maken door gebruik te maken van de CSS die al wel bestaat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " We hebben extra aandacht besteed aan de formulier-componenten, zodat ze werken met Angular form bindings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " In Angular worden componenten vaak gerendered met een custom element als wrapper. Voor sommige componenten levert dit problemen op, bijvoorbeeld wanneer in HTML bepaalde elementen een directe parent-child-relatie moeten hebben. Denk aan: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, ", of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, ". We maken nu voor veel elementen gebruik van attribute selectors, om te voorkomen dat er een extra element wordt gemaakt. In de toekomst worden mogelijk bijna alle componenten beschikbaar via attribute selectors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "<table utrecht-table>\n  <tbody utrecht-table-body>\n    <tr utrecht-table-row>\n      <td utrecht-table-cell>...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Bekijk de broncode op GitHub: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "nl-design-system/example-with-angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "section")(46, "example-story", 3)(47, "utrecht-heading-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "The Quick Brown Fox Jumps Over The Lazy Dog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "example-story", 4)(50, "utrecht-heading-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "The Quick Brown Fox Jumps Over The Lazy Dog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "example-story", 5)(53, "utrecht-heading-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "The Quick Brown Fox Jumps Over The Lazy Dog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "example-story", 6)(56, "utrecht-heading-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "The Quick Brown Fox Jumps Over The Lazy Dog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "example-story", 7)(59, "utrecht-heading-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "The Quick Brown Fox Jumps Over The Lazy Dog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "example-story", 8)(62, "utrecht-heading-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "The Quick Brown Fox Jumps Over The Lazy Dog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "example-story", 9)(65, "ol", 10)(66, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Ordered Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "example-story", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "utrecht-separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "example-story", 13)(71, "ul", 14)(72, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Unordered Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "example-story", 16)(75, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Form label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "example-story", 18)(78, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Form label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "example-story", 20)(81, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Form label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "example-story", 22)(84, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Form label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "example-story", 24)(87, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Form label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "example-story", 26)(90, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Form label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "example-story", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "example-story", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "example-story", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "example-story", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "example-story", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "example-story", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "example-story", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "textarea", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "example-story", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](107, "textarea", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "example-story", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "textarea", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "example-story", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](111, "textarea", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "example-story", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "textarea", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "example-story", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "textarea", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "fieldset", 52)(117, "legend", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Checkbox group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "utrecht-form-field")(120, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "utrecht-form-field")(124, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](126, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "utrecht-form-field")(128, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Disabled option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](130, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "utrecht-form-field")(132, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Required option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "utrecht-form-field")(136, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "Invalid option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](138, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "example-story", 64)(140, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "example-story", 66)(143, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "example-story", 68)(146, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "Example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "example-story", 70)(149, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "example-story", 72)(152, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Primary action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "example-story", 74)(155, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, "Secondary action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "example-story", 76)(158, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "Subtle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "example-story", 78)(161, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "example-story", 80)(164, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "example-story", 82)(167, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "Busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "example-story", 84)(170, "utrecht-button-group")(171, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Submit request");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "Save and continue later");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "example-story", 85)(176, "table", 86)(177, "caption", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, " Table caption ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "thead", 88)(180, "tr", 89)(181, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "Column header cell 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "Column header cell 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "Column header cell 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "tfoot", 91)(188, "tr", 89)(189, "th", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "Footer cell 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "th", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "Footer cell 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "th", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, "Footer cell 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "tbody", 93)(196, "tr", 89)(197, "th", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](198, "Row header cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](200, "Table cell 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202, "Table cell 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "section")(204, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "Badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "example-story", 95)(207, "utrecht-badge-status", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](208, "neutral");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](209, "example-story", 97)(210, "utrecht-badge-status", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](211, "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](212, "example-story", 99)(213, "utrecht-badge-status", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](214, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "example-story", 101)(216, "utrecht-badge-status", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "example-story", 103)(219, "utrecht-badge-status", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, "invalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "example-story", 105)(222, "utrecht-badge-status", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](223, "valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "example-story", 107)(225, "utrecht-badge-status", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "example-story", 109)(228, "utrecht-badge-status", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](229, "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "example-story", 111)(231, "utrecht-badge-status", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "example-story", 113)(234, "utrecht-badge-status", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](235, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](236, "fieldset")(237, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, "Radio group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "utrecht-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](240, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "label", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](242, "Option A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "utrecht-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](244, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "label", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](246, "Option B");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "fieldset", 52)(248, "legend", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](249, "Angular reactive forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](250, "utrecht-button-group")(251, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](252, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](254, "Primary action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](255, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](256, "Secondary action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](258, "Subtle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](259, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](260, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](261, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](262, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](263, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](264, "Busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](265, "utrecht-html-content")(266, "table", 86)(267, "thead", 88)(268, "tr", 89)(269, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](270, "Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "th", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](274, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "tbody", 93)(276, "caption", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](277, " Tabel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "tr", 89)(279, "th", 94)(280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](281, "utrecht-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](282, "td", 92)(283, "label", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](284, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](285, "input", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](287);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "tr", 89)(289, "th", 94)(290, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](291, "utrecht-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, ", required");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](294, "input", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](296);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "tr", 89)(298, "th", 94)(299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](300, "utrecht-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](301, ", disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](302, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](303, "input", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](305);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](306, "tr", 89)(307, "th", 94)(308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](309, "utrecht-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](310, ", readonly");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](311, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](312, "input", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](313, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](314);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "tr", 89)(316, "th", 94)(317, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318, "utrecht-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](319, ", invalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](320, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](321, "input", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](323);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "tr", 89)(325, "th", 94)(326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](327, "utrecht-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328, ", type=email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](330, "input", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](331, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](332);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](333, "tr", 89)(334, "th", 94)(335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](336, "utrecht-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](337, ", type=url");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](338, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](339, "input", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](341);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](342, "tr", 89)(343, "th", 94)(344, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](345, "utrecht-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](346, ", type=number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](347, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](348, "input", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](349, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](350);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](351, "tr", 89)(352, "th", 94)(353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](354, "utrecht-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](355, ", inputmode=number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](356, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](357, "input", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](358, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](359);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](360, "tr", 89)(361, "th", 94)(362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](363, "utrecht-textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](364, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](365, "textarea", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](366, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](367);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](368, "tr", 89)(369, "th", 94)(370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](371, "utrecht-textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](372, ", required");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](373, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](374, "textarea", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](375, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](376);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](377, "tr", 89)(378, "th", 94)(379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](380, "utrecht-textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](381, ", disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](382, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](383, "textarea", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](384, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](385);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](386, "tr", 89)(387, "th", 94)(388, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](389, "utrecht-textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](390, ", readonly");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](391, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](392, "textarea", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](393, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](394);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](395, "tr", 89)(396, "th", 94)(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](398, "utrecht-textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](399, ", invalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](401, "textarea", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](402, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](403);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](404, "tr", 89)(405, "th", 94)(406, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](407, "utrecht-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](408, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](409, "input", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](410, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](411);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](412, "tr", 89)(413, "th", 94)(414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](415, "utrecht-form-field-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](416, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](417, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](418);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](419, "tr", 89)(420, "th", 94)(421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](422, "utrecht-form-field-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](423, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](424, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](425);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](426, "tr", 89)(427, "th", 94)(428, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](429, "utrecht-radio-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](430, "td", 92)(431, "utrecht-form-field")(432, "label", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](433, "Option A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](434, "input", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](435, "utrecht-form-field")(436, "label", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](437, "Option B");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](438, "input", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](439, "td", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](440);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](441, "example-story", 139)(442, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](443, "paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](444, "example-story", 140)(445, "p", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](446, "paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](447, "utrecht-page-footer")(448, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](449, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](450, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](451, "nl-theme-switcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("external", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("invalid", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("invalid", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("invalid", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("external", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("busy", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("busy", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.textbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textbox.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.textbox)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textbox.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.textbox)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textbox.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.textbox)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textbox.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.textbox)("invalid", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textbox.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.email.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.url.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.number.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.number.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.textarea);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textarea.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.textarea)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textarea.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.textarea)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textarea.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.textarea)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textarea.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.textarea)("invalid", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textarea.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.checkbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.checkbox.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.textbox.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.checkbox.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.radio);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.radio);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.radio.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lead", true);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtArticle, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtBadgeStatus, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtButtonAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtButtonGroup, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtCheckboxAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtDocument, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtFormField, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtFormLabelAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtHeading1, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtHeading2, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtHeading3, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtHeading4, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtHeading5, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtHeading6, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtHtmlContent, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtLinkAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtOrderedListAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtOrderedListItemAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtPage, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtPageContent, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtPageFooter, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtParagraph, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtRadioButtonAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtSeparator, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtTableAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtTableBodyAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtTableCaptionAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtTableCellAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtTableFooterAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtTableHeaderAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtTableHeaderCellAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtTableRowAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtTextareaAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtTextboxAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtUnorderedListAttr, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_6__.UtrechtUnorderedListItemAttr, _components_story_component__WEBPACK_IMPORTED_MODULE_0__.ExampleStoryComponent, _theme_switcher_component__WEBPACK_IMPORTED_MODULE_1__.ThemeSwitcherComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9313:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6638);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6009);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8375);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4515);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 6319);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5975);
/* harmony import */ var _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utrecht/component-library-angular */ 3085);
/* harmony import */ var _theme_switcher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-switcher.component */ 3920);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ 5629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4494);











// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient]
      }
    }), _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_9__.UtrechtComponentsModule, _components__WEBPACK_IMPORTED_MODULE_2__.ExampleComponentsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _theme_switcher_component__WEBPACK_IMPORTED_MODULE_1__.ThemeSwitcherComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _utrecht_component_library_angular__WEBPACK_IMPORTED_MODULE_9__.UtrechtComponentsModule, _components__WEBPACK_IMPORTED_MODULE_2__.ExampleComponentsModule]
  });
})();

/***/ }),

/***/ 3920:
/*!*********************************************!*\
  !*** ./src/app/theme-switcher.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSwitcherComponent: () => (/* binding */ ThemeSwitcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4494);

const _c0 = ["*"];
class ThemeSwitcherComponent {
  constructor(c) {
    c.detach();
  }
  static #_ = this.ɵfac = function ThemeSwitcherComponent_Factory(t) {
    return new (t || ThemeSwitcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ThemeSwitcherComponent,
    selectors: [["nl-theme-switcher"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ThemeSwitcherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 5629:
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleComponentsModule: () => (/* binding */ ExampleComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2852);
/* harmony import */ var _story_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story/component */ 6660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4494);



const components = [_story_component__WEBPACK_IMPORTED_MODULE_0__.ExampleStoryComponent];
class ExampleComponentsModule {
  static #_ = this.ɵfac = function ExampleComponentsModule_Factory(t) {
    return new (t || ExampleComponentsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ExampleComponentsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleComponentsModule, {
    declarations: [_story_component__WEBPACK_IMPORTED_MODULE_0__.ExampleStoryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_story_component__WEBPACK_IMPORTED_MODULE_0__.ExampleStoryComponent]
  });
})();

/***/ }),

/***/ 6660:
/*!*******************************************!*\
  !*** ./src/components/story/component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleStoryComponent: () => (/* binding */ ExampleStoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4494);

const _c0 = ["*"];
class ExampleStoryComponent {
  constructor() {
    this.name = '';
    this.role = 'presentation';
  }
  static #_ = this.ɵfac = function ExampleStoryComponent_Factory(t) {
    return new (t || ExampleStoryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExampleStoryComponent,
    selectors: [["example-story"]],
    hostVars: 1,
    hostBindings: function ExampleStoryComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role);
      }
    },
    inputs: {
      name: "name"
    },
    ngContentSelectors: _c0,
    decls: 5,
    vars: 1,
    consts: [[1, "example-story"], ["role", "presentation", 1, "example-story__canvas"]],
    template: function ExampleStoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
      }
    },
    styles: [".example-story__canvas[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 4px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.1);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;\n  margin-block-end: 40px;\n  margin-block-start: 25px;\n  padding-block-end: 30px;\n  padding-block-start: 30px;\n  padding-inline-end: 20px;\n  padding-inline-start: 20px;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3N0b3J5L2luZGV4LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsOENBQThDO0VBQzlDLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXN0b3J5X19jYW52YXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDNweCAwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDQwcHg7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMjVweDtcbiAgcGFkZGluZy1ibG9jay1lbmQ6IDMwcHg7XG4gIHBhZGRpbmctYmxvY2stc3RhcnQ6IDMwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMjBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 5906:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 1763:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4494);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 9313);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5906);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1763)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map