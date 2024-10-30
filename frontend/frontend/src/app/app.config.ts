import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(),
        provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"angular-auth-f19c9","appId":"1:569290418716:web:4da727ab1c2c504574cdd9","storageBucket":"angular-auth-f19c9.appspot.com","apiKey":"AIzaSyAqV2aqUa-Z8hj5YD_O9XeT67IF0pCLC_U","authDomain":"angular-auth-f19c9.firebaseapp.com","messagingSenderId":"569290418716"})), provideAuth(() => getAuth()),
    ],
};
