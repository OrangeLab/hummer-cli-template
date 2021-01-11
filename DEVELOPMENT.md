### 开发
```
git checkout main
git pull
git checkout -b feature_xxx  // 子模块开发
```

### 发布beta版本 (当有多个开发包修改，可通过该方式，统一修改依赖和发布)
```
代码分支合并入 release分支
npm run pub:prerelease // cwd工程根目录，走lerna发布，最后发布为"x.x.x-beta.x"
```

### 发布正式版本
```
代码分支合并入 master分支
npm run pub // cwd工程根目录，走lerna发布，最后发布为"x.x.x"
```
