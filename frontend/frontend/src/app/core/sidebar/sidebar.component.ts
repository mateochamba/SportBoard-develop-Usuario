import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [RouterModule, SharedModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

    isSidebarOpen = true;

    constructor(private router: Router) {}
    
    toggleSidebar(sidenav: any) {
        sidenav.toggle();
    }

    navigateToCrearUsuario() {
        this.router.navigate(['/usuarios/crear-usuario']);
    }

    navigateToEliminarUsuario() {
        this.router.navigate(['/usuarios/eliminar-usuario']);
    }
}
