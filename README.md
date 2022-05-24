# Quiver Library Markdown exporter to Obsidian

![npm](https://img.shields.io/npm/v/quiver-markdown-exporter)

A [Quiver](https://yliansoft.com/) markdown note exporter. I started to use Quiver around 2015 and 2016. But I quickly get back to Evernote. Recently I found [Obsidian](https://obsidian.md/) quite useful and migrated all of my notes to it. So I write this exporter to migrate my notes from Quiver to Obsidian.

And my Quiver notes only use a subset of Quiver features, so I can't guarantee that the exported notes are the same as the ones in Quiver. But I hope it's enough for you to get started.

Some working features:

- [Attachments](https://github.com/Yukaii/quiver-obsidian-markdown/blob/c13f42daa8af30268797b3d902ba9f844bc24873/src/quiver-markdown.mts#L24-L29)
- Images, [\[1\]](https://github.com/Yukaii/quiver-obsidian-markdown/blob/c13f42daa8af30268797b3d902ba9f844bc24873/src/quiver-markdown.mts#L32-L46), and [\[2\]](https://github.com/Yukaii/quiver-obsidian-markdown/blob/c13f42daa8af30268797b3d902ba9f844bc24873/src/quiver-markdown.mts#L95-L103A)
- [Diagrams and Markdown/Code block](https://github.com/Yukaii/quiver-obsidian-markdown/blob/c13f42daa8af30268797b3d902ba9f844bc24873/src/quiver-markdown.mts#L117-L120)

## Installation

```bash
npm install -g quiver-markdown-exporter
```

## Usage

```bash
Usage
  $ quiver-markdown <input.qvlibrary> -o <output folder>

Options
  --output, -o Output folder

Examples
  $ quiver-markdown MyLibrary.qvlibrary -o dist
```

## Contributing

If you find any bugs or have any suggestions, simply fork this repo and modify it on your own. I would probably not gonna run this repo again. 😝

Also check out the [Quiver Data format Reference](https://github.com/HappenApps/Quiver/wiki/Quiver-Data-Format).

## License

MIT
