# accessibility.js

This file must be transpiled for browser like IE11 using babel

First install babel:

```
npm install --save-dev @babel/core @babel/cli
```

You will also need npx: 

```
npm install -g npx
```

and the env preset: 

```
npm install @babel/preset-env
```

And then declare it in your .babelrc:

```
{
  "presets": ["@babel/preset-env"]
}
```
If you make any changes to the main source file (accessibility.js), please transpile with the `build.sh` command.


## Resources: 

- https://babeljs.io/docs/en/babel-cli
- https://www.npmjs.com/package/npx
- https://stackoverflow.com/questions/34747693/how-do-i-get-babel-6-to-compile-to-es5-javascript