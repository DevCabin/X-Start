=== The X Starter Theme ===

Contributors: automattic
Tags: custom-background, custom-logo, custom-menu, featured-images, threaded-comments, translation-ready

Requires at least: 4.0
Tested up to: 4.8
Stable tag: 1.0.0
License: GNU General Public License v2 or later
License URI: LICENSE

A starter theme called The X Starter Theme.

== Description ==

Starter Theme Based on Underscore S with a gulp file for Sass - with Woocommerce Support

== Usage ==

Note: Directions below assume you have NPM and Gulp installed. 

1. Unzip locally 
2. Via command line cd into the new unzipped directory 'xstart'
3. run 'npm install' to get the dependencies (not that many, promise)
4. run 'gulp'

That's it!

This allows you to now edit for scss (sass) files and js files as needed and gulp will automagically
compile them into style.css and /js/app.min.js respectively. And don't worry, the functions.php file
already enqueues the app.min.js file for you.

Solid head start! I suggest you use this as the Underscore S doc indicate, whcih is not as a child theme but
as a theme all it's own. 

So say you're building for a client "acme co" and you don't really want the theme to be called X Starter Theme which
is understandable, you can do a couple of things. QUick and easiest is to just go into style.css and 
change "Theme Name: The X Starter Theme" as you see fit, for example "Theme Name: Acme Co Theme ". Quick and effective.

You should be able to get rolling from here. Have fun, and ask questions. Stack overflow is your friend. 


== Installation ==

After local development and gulp tasks have run, zip up the theme file minus any node,  and . files 
like .git and .jshintrc, I don't think it will hurt anything on most servers, but you really don't need
to upload extra junk. 

1. In your admin panel, go to Appearance > Themes and click the Add New button.
2. Click Upload Theme and Choose File, then select the theme's .zip file. Click Install Now.
3. Click Activate to use your new theme right away.

== Frequently Asked Questions ==

= Does this theme support any plugins? =

The X Starter Theme includes support for Infinite Scroll in Jetpack.

== Changelog ==

= 1.0 - May 12 2015 =
* Initial release

== Credits ==

* Based on Underscores https://underscores.me/, (C) 2012-2017 Automattic, Inc., [GPLv2 or later](https://www.gnu.org/licenses/gpl-2.0.html)
* normalize.css https://necolas.github.io/normalize.css/, (C) 2012-2016 Nicolas Gallagher and Jonathan Neal, [MIT](https://opensource.org/licenses/MIT)
