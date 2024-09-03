import { Component, Input } from '@angular/core';
import { User } from '../../model/user';
import { forkJoin, Observable, of } from 'rxjs';
import { ListService } from '../../services/list.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Cart } from '../../model/cart';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [ListService],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  userDetails$!: Observable<{ user: User; cart: Cart[] }>;

  constructor(private listService: ListService) {}

  @Input() set id(userId: number) {
    this.userDetails$ = forkJoin({
      user: this.listService.getUser(userId),
      cart: this.listService.getAllUserCarts(userId),
    });
  }
}
