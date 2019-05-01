import { group, animate, query, style, trigger, transition, state } from '@angular/animations';
import { Component, Input, Output, EventEmitter, ElementRef, HostListener, OnInit } 		 from '@angular/core';
import * as global 			 from '../globals';
import { SessionStoreService } from '../app-session-store'; 
import { UserInfo } from '../app-session-user-info';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  animations: [
    trigger('expandCollapse', [
      state('expand', style({ height: '*', overflow: 'hidden', display: 'block' })),
      state('collapse', style({ height: '0px', overflow: 'hidden', display: 'block' })),
      state('active', style({ height: '*', overflow: 'hidden', display: 'block' })),
      transition('expand <=> collapse', animate(100)),
      transition('active => collapse', animate(100))
    ])
  ]
})

export class SidebarComponent implements OnInit {
  navProfileState = 'collapse';
	slimScrollOptions = global.whiteSlimScrollOptions;
	@Output() toggleSidebarMinified = new EventEmitter<boolean>();
	@Output() hideMobileSidebar = new EventEmitter<boolean>();
	@Input() pageSidebarTransparent;

  toggleNavProfile() {
    if (this.navProfileState == 'collapse') {
      this.navProfileState = 'expand';
    } else {
      this.navProfileState = 'collapse';
    }
  }

	toggleMinified() {
		this.toggleSidebarMinified.emit(true);
	}

	expandCollapseSubmenu(currentMenu, allMenu, active) {
		for (let menu of allMenu) {
			if (menu != currentMenu) {
				menu.state = 'collapse';
			}
		}
		if (currentMenu.state == 'expand' || (active.isActive && !currentMenu.state)) {
			currentMenu.state = 'collapse';
		} else {
			currentMenu.state = 'expand';
		}
	}

	@HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
		  this.hideMobileSidebar.emit(true);
    }
  }

	public userInfo: UserInfo;
  constructor(private eRef: ElementRef, private sessionStore: SessionStoreService) {}

	ngOnInit() {
    this.sessionStore.userInfo.subscribe(sessionUserInfo => this.userInfo = sessionUserInfo);
  }
  
  menus = [{
		'icon': 'fa fa-th-large',
		'title': 'Dashboard',
		'url': 'dashboard/v1'
	}];
}
