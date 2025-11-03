# One-Way Data Binding
One-way data binding in Angular means that data flows in only one direction — from the component (TypeScript) → to the view (HTML).

1. Create model for student
```aiignore
ng g i models/student
```
src/app/models/student.ts
```typescript
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  year: number;
}
```

2. Create component for student
```aiignore
ng g c student
```
3. Create student object
```typescript
import { Student } from '../models/student';

export class StudentComponent {
  course: string = "STIWK2124 Web Engineering";
  student: Student = {
    id: 1,
    firstName: 'zhamri',
    lastName: 'che ani',
    year: 2025,
  };
}
```
3. Update `src/app/student/student.html`
```html
<h4>{{course}}</h4>
<h4>Student Information</h4>

<!-- Interpolation: {{ }} -->
<p><strong>Id:</strong> {{ student.id }}</p>
<p><strong>First Name:</strong> {{ student.firstName }}</p>
<p><strong>Last Name:</strong> {{ student.lastName }}</p>
<p><strong>Year:</strong> {{ student.year }}</p>
```
4. Update `src/app/app.html`
```html
<h1>One-Way Data Binding</h1>
<app-student></app-student>
```
5. Update `src/app/app.ts`
```typescript
import {StudentComponent} from './student/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
```

6. Copy `uum.png` into `src/assets/images/uum.png`
   - `src/assets` is a must

7. Update `angular.json`
add "src/assets",
```json
"build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/assets",
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
```

8. Build Angular
```aiignore
ng build --configuration production
```
You should see the `uum.png` at `dist/MyTutorial-Angular/browser/assets/images/uum.png`
