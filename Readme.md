# react-native-buffer-image-size

A [Node](https://nodejs.org/en/) module to get dimensions of any image ~~file~~ buffer

Fork of [buffer-image-size](https://github.com/evidentpoint/buffer-image-size)

This fork ensures compatibility with Browsers & React Native.

## Supported formats

* BMP
* CUR
* GIF
* ICO
* JPEG
* PNG
* PSD
* ~~TIFF~~ (no buffer support)
* WebP
* SVG
* DDS

## Install

```
npm install react-native-buffer-image-size --save
```

## Usage

```javascript
var sizeOf = require('react-native-buffer-image-size');
var dimensions = sizeOf(imageBuffer);
console.log(dimensions.width, dimensions.height);
```

#### Multi-size

If the target file is an icon (.ico) or a cursor (.cur), an `images` array is available and returns the dimensions of all the available images.

```javascript
var sizeOf = require('react-native-buffer-image-size');
var images = sizeOf(icoBuffer).images;
for (const dimensions of images) {
  console.log(dimensions.width, dimensions.height);
}
```

#### URL

```javascript
var url = require('url');
var http = require('http');

var sizeOf = require('react-native-buffer-image-size');

var imageUrl = 'http://my-amazing-website.com/image.jpeg';
var options = url.parse(imageUrl);

http.get(options, function (response) {
  var chunks = [];
  response.on('data', function (chunk) {
    chunks.push(chunk);
  }).on('end', function() {
    var buffer = Buffer.concat(chunks);
    console.log(sizeOf(buffer));
  });
});
```

You can optionally check the buffer lengths & stop downloading the image after a few kilobytes. **You don't need to download the entire image**.