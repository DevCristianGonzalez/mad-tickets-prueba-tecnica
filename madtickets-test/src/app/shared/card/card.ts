import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../../core/models/post.model';
import { CommonModule, SlicePipe } from '@angular/common';


@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true,
  imports: [
    CommonModule,
    SlicePipe  
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card {
  @Input() post!: Post;
}
