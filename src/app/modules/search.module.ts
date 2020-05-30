import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from '@pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [SearchPageComponent],
  exports: [RouterModule]
})
export class SearchModule {}
