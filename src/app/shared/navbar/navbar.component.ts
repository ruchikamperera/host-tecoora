import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';
import { UserRoleNumber } from 'src/app/enum/common';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
    isMenu: boolean;
    isStudent = false;
    isLawyer = true;
    isStaff = false;
    userName: string;
    role: string;
    profile: string;

    constructor(public sidebarservice: SidebarService, private router: Router) { }

    ngOnInit() {
        this.userName = localStorage.getItem("firstName");
        this.profile = localStorage.getItem("profileImage");
        this.getUserRole(Number(localStorage.getItem("role")))
    }

    ngDestroy(){
        localStorage.clear();
    }

    getUserRole(role: number){
        switch (role) {
            case 1: {
                this.role = UserRoleNumber.One;
              break;
            }
            case 2: {
                this.role = UserRoleNumber.Two;
              break;
            }
            case 3: {
                this.role = UserRoleNumber.Tree;
              break;
            }
            case 4: {
                this.role = UserRoleNumber.Four;
              break;
            }
          }
    }
    

    activeMenuClass(path: string) {
        if (this.router.url.includes(path)) {
            return 'active';
        } else {
            return '';
        }
    }

    menu(){
        this.isMenu = !this.isMenu;
    }

    logOut(){
        localStorage.clear();
        this.router.navigate(['/auth/sign-in']);
    }
}
