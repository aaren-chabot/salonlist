import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@modules/shared.module';

import { SearchPageComponent } from '@pages/search/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [SearchPageComponent],
  exports: [RouterModule]
})
export class SearchModule {}
