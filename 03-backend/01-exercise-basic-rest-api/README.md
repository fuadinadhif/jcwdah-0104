# README

## Init Express Project

1. `npm init --y`
2. Install development dependencies: `npm i -D typescript tsx @types/express @types/node`
3. Install reguler dependencies: `npm i express`
4. (Optional at development phase) init `tsconfig.json`: `npx tsc --init`
5. Customize `tsconfig.json` file:
   ```json
   {
     "compilerOptions": {
       // ...
       "target": "esnext",
       "module": "nodenext",
       "outdir": "./dist"
       // ...
     }
   }
   ```
6. Customize `package.json` file:

   ```json
   {
     // ...
     "scripts: {
      "build": "npx tsc",
      "dev": "npx tsx --watch src/app.ts",
     },
     "type": "module"
     // ...
   }
   ```

7. Create `src` folder
8. Inside `src` folder create entry file name `app.ts`

## Endpoint Format

```ts
app.get("/api/v1/status", () => {});
// [SERVER_VARIABLE].[HTTP_METHOD]("[ROUTE_PATH]", [ROUTE_HANDLER])
```
