import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditableComponent } from './editable/editable.component';
import { ViewModeDirective } from './editable/view-mode.directive';
import { EditModeDirective } from './editable/edit-mode.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FocusableDirective } from './focusable.directive';
import { EditableOnEnterDirective } from './editable/editable-on-enter.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    EditableComponent,
    ViewModeDirective,
    EditModeDirective,
    CheckboxComponent,
    FocusableDirective,
    EditableOnEnterDirective,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
