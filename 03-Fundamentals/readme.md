# Angular Fundamentals

[Angular Template Syntax](https://stackblitz.com/edit/ng10-template-syntax?file=src/app/app.component.html)

[Frequently-used modules]https://angular.io/guide/frequent-ngmodules

## Configure Creation of Unit Test Files - \*.spec.ts

Method 1:

You can disable spec generation at the time of creating things using Angular-cli by adding "--no-spec"

```
ng generate component my-component --no-spec
```

Method 2:

Permanently disable in `angular.json` file. You can edit the schematics for your project.

```
"schematics": {
    "@schematics/angular:component": {
      "styleext": "scss",
      "spec": false
    },
    "@schematics/angular:class": {
      "spec": false
    },
    "@schematics/angular:directive": {
      "spec": false
    },
    "@schematics/angular:guard": {
      "spec": false
    },
    "@schematics/angular:module": {
      "spec": false
    },
    "@schematics/angular:pipe": {
      "spec": false
    },
    "@schematics/angular:service": {
      "spec": false
    }
  }, ...
```
