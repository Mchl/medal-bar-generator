# Medal bar generator

This is a little application which procedurally generates fake [medal ribbons][Wikipedia: Medal ribbon]

## Why?

I was looking for some kind of (digital) badges that I could award to members of my team for their accomplishments. 
Military style medal ribbons was one idea, but I didn't want to deface any actual award. 
That's why I decided to make an application that would generate designs similar to actual medal ribbons.
I haven't decided yet if I'm going to use it for the initial purpose, but I've learned quite a lot about 
[phaleristics][Wikipedia: Phaleristics] along the way.
 
## What?

* The application has a couple of general ribbon layouts to choose from (both symmetric and asymmetric). 
* It selects a color palette for a ribbon from an [official list used by US Military][Wikipedia: Medal ribbon]
* It applies a horizontal grille pattern to simulate ribbon threads
* Finally it randomly decides whether to apply some [award devices][Wikipedia: United States military award devices]
  At this point devices available are the [gold frame][Wikipedia: Gold frame], [the arrowhead][Wikipedia: Arrowhead device]
  and the silver and bronze [service stars][Wikipedia: Service star].      
  No actual rules regarding how these devices can be applied in real life 
  (e.g. silver and bronze service stars can be mixed on one ribbon to 
  represent number of times medal was awarded to an individual or a unit) are implemented

## How?

The application is created using some quite fresh JavaScript/ECMAScript features, including ES Modules. 
No transpiling, bundling, preprocessing etc. 
Whatever I typed in my IDE is the code that runs in your browser. 

If you're on any fairly recent or 'evergreen' browser, it should work fine. 
If it doesn't work for your browser... well I don't really plan to work on extending support. 
It's just not that kind of project, sorry. Give it a go in Chromium, Chrome, Firefox, Safari, even latest Edge should be ok.

[Alea][Github: node-alea] is used as seedable pseudo random number generator.
It is loaded from external CDN to avoid copying its code into this repository.
If the CDN fails on first try, refresh page. If it fails consistently - [let me know by creating an issue][Github: create new issue]. 

## Where?

[See it in action here!](https://mchl.github.io/medal-bar-generator/?utm_source=github-readme&utm_medium=web&utm_campaign=github&utm_content=see-it-in-action-link)

## Assets used and their licenses

* [Arrowhead][Commons: Arrowhead]: Public Domain created by Wikimedia Commons user Ipankonin
* [Bronze Star][Commons: Bronze star]: Creative Commons Attribution-Share Alike 3.0 Unported, created by Wikimedia Commons user Lestatdelc
* [Silver Star][Commons: Silver star]: Creative Commons Attribution-Share Alike 3.0 Unported, created by Wikimedia Commons user Lestatdelc 
* [Alea][Github: node-alea]: MIT by Johannes Baagøe
 
[Wikipedia: Arrowhead device]: https://en.wikipedia.org/wiki/Arrowhead_device
[Wikipedia: Awards and decorations of the United States Armed Forces]: https://en.wikipedia.org/wiki/Awards_and_decorations_of_the_United_States_Armed_Forces
[Wikipedia: Gold frame]: https://en.wikipedia.org/wiki/Gold_frame
[Wikipedia: Medal ribbon]: https://en.wikipedia.org/wiki/Medal_ribbon
[Wikipedia: Phaleristics]: https://en.wikipedia.org/wiki/Phaleristics
[Wikipedia: Service star]: https://en.wikipedia.org/wiki/Service_star
[Wikipedia: United States military award devices]: https://en.wikipedia.org/wiki/United_States_military_award_devices

[Commons: Arrowhead]: https://commons.wikimedia.org/wiki/File:Arrowhead_device.svg
[Commons: Bronze star]: https://commons.wikimedia.org/wiki/File:Bronze-service-star-3d.png
[Commons: Silver star]: https://commons.wikimedia.org/wiki/File:Award-star-silver-3d.png

[Github: node-alea]: https://github.com/coverslide/node-alea
[Github: create new issue]: https://github.com/Mchl/medal-bar-generator/issues/new
