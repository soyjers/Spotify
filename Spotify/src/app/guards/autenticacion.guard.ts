import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { SpotifyAPIService } from '../components/service/spotify-api.service';

export const autenticacionGuard: CanMatchFn = (route, segments) => {
  const SpotifyService = inject(SpotifyAPIService)
return SpotifyService.estaLogueado()
};
