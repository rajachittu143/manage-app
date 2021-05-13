import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderDrawerComponent } from './layout/header-drawer/header-drawer.component';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const COMPONENTS = [LayoutComponent, HeaderComponent, FooterComponent,HeaderDrawerComponent];

@NgModule({
    imports: [
        MaterialModule,
        BASE_MODULES,
        RouterModule
    ],
    exports: [ 
        MaterialModule,
        BASE_MODULES,
        COMPONENTS
    ],
    declarations: [
        COMPONENTS
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ThemeModule {}