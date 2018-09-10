# egg-easy-utils
该插件是为了解放helper， 统一管理工具类函数， 按模块分类，比如： strings, arrays

# Install

```bash
$ npm i --save egg-easy-utils
```

## Usage & configuration

- `config.default.js`

```js
// 相对app目录的路径，默认值utils
exports.utils = {
  path: 'utils'
};
```

- `config/plugin.js`

``` js
exports.utils = {
  enable: true,
  package: 'egg-easy-utils'
}
```

### example

```js
// app/utils/strings.js
module.exports = (app) => {
    return {
        md5(str) {
            const md5sum = crypto.createHash('md5');
            md5sum.update(str);
            return md5sum.digest('hex');
        }
    }
}
```
```js
// controller.js or service.js
console.log(this.ctx.utils.strings.md5('test-md5'));

//print: 42505649011f560d32a0a7a6427a8778
```