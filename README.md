# clcl

X11 CLi CLipboard manager.

**WIP**

This program is still in progress. See the roadmap section for stuff that
doesn't work yet. This is buggy.

--------

## Installation

`npm i -g clcl`

You'll need to manually start the daemon. I put this in my `~/.xinitrc`:

```shell
#!/bin/sh
# merge xresources, set keybinds, etc
exec i3 # your window manager goes here
clcl-daemon & # add this line
```

## Usage

```
  clcl -h      # print help
  clcl -l      # list all
  clcl -s [n]  # select entry at index n
  clcl -r [n]  # remove entry at index n
  clcl -c      # clear all
```

## Roadmap

* Work with primary selection?
* Other platforms?
* Other init systems?

## License

[MIT](./LICENSE.md)
