import { Component, inject } from '@angular/core';
import { ListService } from '../../services/list.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  providers: [ListService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  
  constructor(private listService: ListService){}

  users$ = this.listService.getAllUsers()
}
