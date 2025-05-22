import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
  type="button"
  (click)="onClick.emit($event)"
  class="btn"
  [ngClass]="classes"
>
  {{ label }}
</button>`
})
export class ButtonComponent {
  @Input() primary = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() label = 'Button';
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'btn-primary' : 'btn-secondary';
    return ['btn', `btn-${this.size}`, mode];
  }
}
