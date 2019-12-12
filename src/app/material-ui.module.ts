import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
         MatFormFieldModule, MatInputModule, MatCardModule, MatMenuModule, MatSnackBarModule,
         MatDialogModule, MatExpansionModule, MatChipsModule, MatAutocompleteModule,
         MatTabsModule, MatOptionModule, MatSelectModule, MatCheckboxModule,
         MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule } from '@angular/material';

const MODULES = [
  MatCardModule,
  MatMenuModule,
  MatSnackBarModule,
  MatDialogModule,
  MatExpansionModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialUiModule {
}
