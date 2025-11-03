## Routing-Basic

### 1. Create two components
```aiignore
ng g c home
ng g c about
```

### 2. Update `app.routes.ts`
src/app/app.routes.ts
```typescript
import { Routes } from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
];
```

### 3. Update `app.html`
src/app/app.html
```html
<h1>STIWK2124 Web Engineering</h1>
<router-outlet />
```

### 4. Check `RouterOutlet` has been imported in `app.ts`
src/app/app.ts
```typescript
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
```

### 5. Test
1. http://localhost:4200/
2. http://localhost:4200/about


