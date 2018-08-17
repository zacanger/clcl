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
# merge xresources, set keybinds, etc
clcl-daemon &
exec i3 # your window manager goes here
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

* Listen for copy events, rather than polling for changes synchronously
* Work with primary selection?
* Other platforms?
* Other init systems?
* Postinstall to handle the daemon?

## License

[MIT](./LICENSE.md)
