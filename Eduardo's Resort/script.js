!function(a){"use strict";a.fn.typer=function(b){function c(a,b){k<b.length?(g=b[k].split(""),h=g.length,setTimeout(function(){a.append(g[j]),j++,j<h?c(a,b):(j=0,k++,setTimeout(function(){e(a,function(){c(a,b)})},i.backspaceDelay))},i.typeSpeed)):i.repeat&&d(a,b)}function d(a,b){k=0,setTimeout(function(){c(a,b)},i.repeatDelay)}function e(a,b){setTimeout(function(){a.text(a.text().slice(0,-1)),0<a.text().length?e(a,b):"function"==typeof b&&b()},i.backspaceSpeed)}function f(a){setInterval(function(){a.fadeOut(400).fadeIn(400)},900)}var g,h,i=a.extend({typeSpeed:60,backspaceSpeed:20,backspaceDelay:800,repeatDelay:1e3,repeat:!0,autoStart:!0,startDelay:100,useCursor:!0,strings:["Typer.js plugin"]},b),j=0,k=0;return this.each(function(){var b,d,e=a(this);i.autoStart&&(e.append('<span class="typed"></span>'),i.useCursor&&(e.append('<span class="typed_cursor">&#x7c;</span>'),d=e.children(".typed_cursor"),f(d)),b=e.children(".typed"),setTimeout(function(){c(b,i.strings)},i.startDelay))})}}(jQuery);


$(document).ready(function(){
    //Typing Animation
    var typed = new Typed('.animate-1', {
        strings: ["CAPTIVATING VIEWS", "BREATHTAKING SUNSETS", "PERFECT VACATIONS"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });

    var typed = new Typed('.animate-2', {
        strings: ["A HAVEN OF LUXURY", "COMFORT", "THAT EVERYONE DESERVES"],
     typeSpeed: 100,
     backSpeed: 60,
     loop: true
     });

    var typed = new Typed('.animate-3', {
    strings: ["LET THE JOURNEY BEGIN", "A WORLD OF ADVENTURES", "RELAXATION", "MEMORIES AWAIT!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });
});