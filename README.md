# linQ-chrome-extension

読んだ記事をショートカットキーで [linQ](https://linq.trap.games/) にブックマークする Chrome 拡張

## Key bindings

- `Ctrl+Q`: 現在開いているページを**タグ無し**で linQ にブックマーク
- `Ctrl+Shift+Q`: 現在開いているページを**タグあり**で linQ にブックマーク

## Quick start

1. <chrome://extensions/>から「パッケージ化されていない拡張機能を読み込む」を ON
1. <https://github.com/ras0q/linQ-chrome-extension/releases/latest>から`linQ-chrome-extension.zip`をダウンロードして解凍
1. <chrome://extensions/>の「パッケージ化されていない拡張機能を読み込む」から`linQ-chrome-extension/dist`フォルダを選択
1. キーバインドが使えるようになる

※キーバインドが動作しない場合は、<chrome://extensions/shortcuts>から手動で設定してください

## Development

### install

```sh
npm i
```

### build

```sh
npm run build
```

### lint (format: No)

```sh
npm run lint
```

### lint (format: Yes)

```sh
npm run lint:fix
```
