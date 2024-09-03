import { Component, Input } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../../model/user';
import { ListService } from '../../services/list.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  providers: [ListService],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  user$!: Observable<User>;
  userForm!: User;
  
  constructor(private listService: ListService, private router: Router) {}

  @Input() set id(userId: number) {
    this.user$ = this.listService.getUser(userId).pipe(
      tap((res) => {
        this.userForm = {
          id: userId,
          email: res.email,
          username: res.username,
          name: res.name,
        };
      })
    );
  }

  onSubmit() {
    console.log(JSON.stringify(this.userForm))
    this.listService.editUser(this.userForm).subscribe({
      next: () => {
        this.router.navigate(['/', 'list'])
      }
    })
  }
}
