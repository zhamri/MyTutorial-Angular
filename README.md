## Routing-Add Nav Bar

### 1. Update `app.html`
src/app/app.html
```html
<nav style="background-color:#007bff; padding:10px;">
  <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"
     style="color:white; margin-right:20px; text-decoration:none;">Home</a>
  <a routerLink="about" routerLinkActive="active"
     style="color:white; text-decoration:none;">About</a>
</nav>

<div style="padding:20px;">
  <router-outlet></router-outlet>
</div>
```


### 2. Update your `app.ts`
src/app/app.ts
>Import `RouterLink`, `RouterLinkActive`
```typescript
import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';  // ✅ update these

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive,],  // ✅ update these
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyTutorial-Angular');
}
```


