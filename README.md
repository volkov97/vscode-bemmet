# VSCode "Bemmet" Extension

This is VS Code extension for BEMMET. Simple Emmet-like tool to expand abbreviations into BEMJSON.

## Features

Here you can see what this extension actually does.

For example, you have this this abbreviation:

```
menu>__item*2>link_theme_islands
```

Select it, press Alt+B, and it will be transformed into BEMJSON:

```
{
    block: 'menu',
    content: [
        {
            block: 'menu',
            elem: 'item',
            content: {
                block: 'link',
                mods: {
                    theme: 'islands'
                },
                content: {}
            }
        },
        {
            block: 'menu',
            elem: 'item',
            content: {
                block: 'link',
                mods: {
                    theme: 'islands'
                },
                content: {}
            }
        }
    ]
}
```

## Install

You can install this extension via `ext install bemmet`

## Usage

1. Write abbreviation.
2. Select it.
3. Press Alt+B or choose 'bemmet: convert' command.
4. Your abbreviation will be replaced by BEMJSON.

## Release Notes

### 0.1.0

Initial release of vscode-bemmet, contains only basic functionality:

* press Alt+B or choose 'bemmet: convert' command to expand abbreviations into BEMJSON

## Author

- [GitHub](https://github.com/VolkovGerman)
- [Website](http://volkov97.com)
