import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TrendsComponent } from 'app/trends/trends.component';
import { YoutubeFeedsComponent } from './containers/youtube-feeds/youtube-feeds.component';
import { YoutubePlayerComponent } from 'app/trends/containers/youtube-player/youtube-player.component';

const routes: Route[] = [
  {
    path: '', component: TrendsComponent,
    children: [
      {path: '', component: YoutubeFeedsComponent},
      {path: 'player/:id', component: YoutubePlayerComponent}
    ]
  },
  // otherwise redirect to home page
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
