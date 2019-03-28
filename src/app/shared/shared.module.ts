import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';

import { LimitToPipe } from 'app/shared/pipes/limit-to.pipe';

import { NgbTypeaheadModule, NgbModule, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MomentModule } from 'angular2-moment';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ToastyModule } from 'ng2-toasty';
import { AgoFromNowPipe } from './pipes/ago-from-now.pipe';
import { RouterModule } from '@angular/router';

const sharedComponents = [HeaderComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbTypeaheadModule,
    NgbModule,
    MomentModule,
    InfiniteScrollModule,
    LazyLoadImageModule,
    HttpClientModule,
    ToastyModule.forRoot(),
  ],
  declarations: [
    ...sharedComponents,
    LimitToPipe,
    AgoFromNowPipe,
  ],
  providers: [
    NgbTypeaheadConfig
  ],
  exports: [
    HeaderComponent,
    LimitToPipe,
    LazyLoadImageModule,
    InfiniteScrollModule,
    ToastyModule,
    AgoFromNowPipe
  ]
})
export class SharedModule { }
