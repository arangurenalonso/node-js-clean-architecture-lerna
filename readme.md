Step 1. Install lerna globally

````
npm install -g lerna
```

Step 2. Initialize lerna
-> Version de lerna  "lerna": "^8.1.3"

````

lerna init

```
Con el comando se generan los siguientes archivos y documentos
    node_modules
    .gitignore
    lerna.json
    package-lock.json
    package.json


Step 3. Install typescript

```

npm install typescript @types/node --save-dev

```
Crear el tsconfig.json
{
 "compilerOptions": {
   "module": "commonjs",
   "declaration": true,
   "noImplicitAny": false,
   "removeComments": true,
   "noLib": false,
   "emitDecoratorMetadata": true,
   "experimentalDecorators": true,
   "target": "es6",
   "sourceMap": true,
   "lib": [
     "es6"
   ]
 },
 "exclude": [
   "node_modules",
   "**/*.test.ts"
 ]
}

Step 3. Crear los package

```

lerna create @project-app/domain
lerna create @project-app/application
lerna create @project-app/infrastructure
lerna create @project-app/rest

```

Step 4. Install las dependencias de cada uno de los proyecto
cd packages/domain
```

npm install typescript @types/node --save-dev

1. crear el archivo tsconfig.json en cada uno de los package

```
{
 "extends": "../../tsconfig.json",
 "compilerOptions": {
   "outDir": "lib"
 },
 "include": [
   "src"
 ]
}

```

Step 5. Configuracion de package json en todos los proyectos

1. en el package json por defecto se crea la propiedad main

```
  "main": "lib/domain.js",

```

2. Cambiar por

```
  "main": "lib/index.js",

```

3. Agregar la propiedad

```
"typings": "lib/index.d.ts",

```

4. Agregar la propiedad build dentro de scripts

```
"scripts": {
    "build": "tsc",
  }

```

5. cambiar en la carpeta lib el nombre del domain.js por index.js
6. Crear la carpeta src
7. dentro de la carpeta src colocar el index.ts
   -> Esta carpeta va a ser la q se va a exponer al exterior

```

Step 6. Agregar el otro package
a) Ahi va el name definido en el package.json que se quiere agregar

  Ejm en el proyecto app quiero agregar a domain
  El name del proyecto domain es

  "name": "@project-app/domain",

```

"dependencies": {
"@project-app/domain": "^0.0.0"
}

```
el el archivo de package.json del package que se va a ejcutar debemos de colocar dentro de scripts lo siguiente

    "start": "node lib/index.js"


para ejecutar el proyecto
lerna run build
lerna run start --scope @project-app/app
```

// npx ts-node src/index.ts
