import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'challenge',
        children:[
          {
            path:'',
            loadChildren: () => import('../challenge/challenge.module').then( m => m.ChallengePageModule)
          }
        ]
      },
      {
        path:'task',
        children:[
          {
            path:'',
            loadChildren: () => import('../task/task.module').then( m => m.TaskPageModule)
          }
        ]
      },
      {
        path:'journal',
        children:[
          {
            path:'',
            loadChildren: () => import('../journal/journal.module').then( m => m.JournalPageModule)
          }
        ]
      },
      {
        path:'explore',
        children:[
          {
            path:'',
            loadChildren: () => import('../explore/explore.module').then( m => m.ExplorePageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'challenge',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
