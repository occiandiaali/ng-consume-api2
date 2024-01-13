import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-widget',
  standalone: true,
  imports: [],
  templateUrl: './error-widget.component.html',
  styleUrl: './error-widget.component.css'
})
export class ErrorWidgetComponent {
  @Input()
  error: Error | null = null;
}
