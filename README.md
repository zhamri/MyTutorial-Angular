## Routing-Add Nav Bar Bootstrap

### 1. Install Bootstrap
- https://www.npmjs.com/
- https://www.npmjs.com/package/bootstrap

```
npm i bootstrap
npm i bootstrap@5
```

### 2. Update `Angular.json`
- Copy "./node_modules/bootstrap/dist/css/bootstrap.min.css" in `Angular.json`
```
            "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ]
```
OR
### 2. Update `styles.css` (Global stylesheet)
src/styles.css
```aiignore
@import 'bootstrap/dist/css/bootstrap.min.css';
```

### 3. Update `main.ts`
src/main.ts
```aiignore
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 👈 required for dropdowns, modals, etc.
```

### 4. Copy code from Bootstrap 
Example: Tabs with dropdowns
1. https://getbootstrap.com/docs/5.3/components/navs-tabs/

### 5. Paste at `app.html`
src/app/app.html
```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### 6. Replace all `href` with `routerLink`

### 7. Run Again
```aiignore
ng serve
ng s
```


## Reference
1. https://getbootstrap.com/docs/5.3/components/navbar/
2. https://getbootstrap.com/docs/5.3/components/navs-tabs/
 


