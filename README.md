# linQ-chrome-extension

This is a chrome-extension that makes [linQ](https://linq.trap.games/) more useful.

## key bindings

- `Ctrl+Q`: bookmark the page you're watching **without tags**.

- `Ctrl+Shift+Q`: bookmark the page you're watching **with tags**.

If you don't like these key bindings, please change [`src/manifest.json`](https://github.com/Ras96/linQ-chrome-extension/blob/main/src/manifest.json) and rebuild.

## quick start

1. Run ` npm run build `

2. Open <chrome://extensions/>

3. Make sure the `developer mode` is turned on

4. Push 'LOAD UNPACKED' button and Select `/dist`

![image](https://developer-chrome-com.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/iYdLKFsJ1KSVGLhbLRvS.png?w=500)

> [Getting started - Chrome Developers](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

## install

```sh
npm i
```

## build

```sh
npm run build
```

## lint (format: No)

```sh
npm run lint
```

## lint (format: Yes)

```sh
npm run lint:fix
```
