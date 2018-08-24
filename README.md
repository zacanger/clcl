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

`clcl` stores up to 100 entries.

## Roadmap

* Listen for copy events, rather than polling for changes synchronously
* Work with primary selection?
* Other platforms?
* Other init systems?
* Postinstall to handle the daemon?

## Bugs

After running `clcl -c`, behavior is strange. Sometimes new changes never show
up in the db, and other times a new change will restore everything that was
cleared. Possibly race condition since reading from the clipboard and writing to
JSON are both sync?

## License

[MIT](./LICENSE.md)
