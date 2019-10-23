import { Component, Input } from '@angular/core';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent {
  members: MemberEntity[];
  @Input() organization: string;
  organizationFound: boolean;
  apiError: string;

  constructor(private membersApi: MembersApiService) {
    this.organization = "lemoncode";
  }

  onKey(event) {
    this.organization = event.target.value;
  }

  loadMembers() {
    this.membersApi.getAllMembers(this.organization)
      .subscribe((ms) => {
        this.members = ms;
        this.organizationFound = true;
      },
      (error: HttpErrorResponse) => {
        this.members = [];
        this.organizationFound = false;
        this.apiError = error.error.message
      });
  }

}
