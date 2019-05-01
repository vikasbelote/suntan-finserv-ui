import { Component, Input, Output, EventEmitter, Renderer2, OnInit } from '@angular/core';
import { SessionStoreService } from '../app-session-store'; 
import { UserInfo } from '../app-session-user-info';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() pageSidebarTwo;
	@Output() toggleSidebarRightCollapsed = new EventEmitter<boolean>();
	@Output() toggleMobileSidebar = new EventEmitter<boolean>();
	@Output() toggleMobileRightSidebar = new EventEmitter<boolean>();

  mobileSidebarToggle() {
		this.toggleMobileSidebar.emit(true);
  }
  mobileRightSidebarToggle() {
		this.toggleMobileRightSidebar.emit(true);
  }
	toggleSidebarRight() {
		this.toggleSidebarRightCollapsed.emit(true);
	}

  public userInfo: UserInfo;
  constructor(private renderer: Renderer2,private sessionStore: SessionStoreService) {
  }

  ngOnInit() {
    this.sessionStore.userInfo.subscribe(sessionUserInfo => this.userInfo = sessionUserInfo);
  }
}
