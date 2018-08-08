// These unused NgModules keep the Angular Language Service happy.
// The AppModule registers the final versions of these components
import {NgModule} from '@angular/core';

import {AppComponent as app_initial} from './app-initial.component';
import {BannerComponent as bc_initial} from './banner/banner-initial.component';
import {BannerComponent as bc_external} from './banner/banner-external.component';

@NgModule({declarations: [app_initial]})
export class AppModuleInitial {
}

@NgModule({declarations: [bc_initial]})
export class BannerModuleInitial {
}

@NgModule({declarations: [bc_external]})
export class BannerModuleExternal {
}
