import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatStepperModule } from "@angular/material/stepper";

@NgModule({
    imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatStepperModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
    ],
    exports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatStepperModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
    ]
})

export class MaterialModule {

}