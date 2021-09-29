# countdown-lite

This plugin counts how much time is left until the date you set.

## Install

Use [NPM](https://www.npmjs.com/package/countdown-lite) to download latest version of a plugin and install it directly in your project.

```sh
$ npm install countdown-lite
```

## Usage

In order to use this plugin you don't need to install jQuery or another library! You just need to:

1. Add the latest countdown-lite.js file or minified countdown-lite.min.js.

```html
<script src="/your-path/countdown-lite/countdown-lite.js"></script>
```

2. Set the following classes:

```html
<div class="countdown">
  <div class="any class">
    <span class="countdown__days">00</span>
    <span class="countdown__days-text">Days</span>
  </div>

  <div class="any class">
    <span class="countdown__hours">00</span>
    <span class="countdown__hours-text">Hours</span>
  </div>

  <div class="any class">
    <span class="countdown__minutes">00</span>
    <span class="countdown__minutes-text">Minutes</span>
  </div>

  <div class="any class">
    <span class="countdown__seconds">00</span>
    <span class="countdown__seconds-text">Seconds</span>
  </div>
</div>
```

3. Set the "data-time" attribute to div with class="countdown". Write the date in this format: "Month" 'space' "day" 'space' "year" 'comma' "24-hour time format with UTC".

```html
<div class="countdown" data-time="October 1 2021, 00:00 UTC">.......</div>
```

If you live in UTC+1,... UTC+2,... UTC-5,... and you want the countdown-lite to work based on your time, you should write this in the "data-time".

```html
<div class="countdown" data-time="October 1 2021, 00:00 UTC-4">.......</div>
```

4. Write this to the end of your js file:

```js
var countdown = countdownLite();
```

## Settings

1. If you want the plugin to count only hours, minutes and seconds, you need to:

   1.1 Add another js file (countdown-lite-hours.js or minified countdown-lite-hours.min.js) instead of the previous one.

   ```html
   <script src="/your-path/countdown-lite/countdown-lite-hours.js"></script>
   ```

   1.2. Remove the span with class="countdown**days" and span with class="countdown**days-text":

   ```html
   <div class="countdown">
     <div class="any class">
       <span class="countdown__hours">00</span>
       <span class="countdown__hours-text">Hours</span>
     </div>

     <div class="any class">
       <span class="countdown__minutes">00</span>
       <span class="countdown__minutes-text">Minutes</span>
     </div>

     <div class="any class">
       <span class="countdown__seconds">00</span>
       <span class="countdown__seconds-text">Seconds</span>
     </div>
   </div>
   ```

2. If you want to disable the plugin when the screen width is decreasing (e.g. starting at 768 pixels):

Replace it

```js
var countdown = countdownLite();
```

with it

```js
if (window.innerWidth > 769) {
  var countdown = countdownLite();
}
```

## History

1. I took this script from the open source codepen.io: https://codepen.io/mosmain/pen/MWazJPO. The author gave me permission.
2. Translated the comments and some words in functions into English.
3. Made a separate js file.
4. Created another file that only counts hours, minutes and seconds.
5. Write it right now:)

## License

[MIT](https://github.com/mountain-climber/countdown-lite/blob/main/LICENSE.md)
