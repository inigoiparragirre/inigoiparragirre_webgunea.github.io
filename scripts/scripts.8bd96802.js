jQuery(document).ready(function(a){"use strict";function b(){new TimelineLite}var c=a(".io-nav"),d=a(".intro"),e=(a(".intro-inner"),d.find("h1"),a(".io-nav-inner")),f=e.find(".io-nav-header"),g=(a(".userIcon"),a(".io-nav-text > *")),h=(a(".io-title"),a(".io-title > h1"),a(".io-navigation")),i=h.find(".io-navigation-item"),j=h.find(".io-navigation-item.active"),k=h.find(".io-navigation-item-text"),l=i.find("i"),m=a(".io-content"),n=new TimelineLite;n.add(b).to(c,0,{autoAlpha:1,delay:.3}).from(c,1,{y:"-100%",delay:.5}).from(e,.5,{x:"-100%"}).from(f,1,{width:0},1).staggerFrom(g,.5,{autoAlpha:0,rotationX:180},.2).from(h,1,{x:"-100%"},1).staggerFrom(l,.5,{rotation:"270deg",autoAlpha:0},.1).from(k,.5,{autoAlpha:0,marginLeft:"-20px"}).from(j,.5,{background:"rgba(0,0,0,0)"}).from(m,1,{x:100,autoAlpha:0},6)}(jQuery)),angular.module("nirewebguneaApp",["tmh.dynamicLocale","pascalprecht.translate","ngRoute","ngAnimate","ngCookies","ngResource","ngSanitize","duScroll"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"index.html",controller:"AppCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("nirewebguneaApp").config(["$translateProvider",function(a){a.useStaticFilesLoader({prefix:"resources/locale-",suffix:".json"}),a.preferredLanguage("eu_ES"),a.useLocalStorage(),a.useSanitizeValueStrategy("sanitize")}]).config(["tmhDynamicLocaleProvider",function(a){a.localeLocationPattern("bower_components/angular-i18n/angular-locale_{{locale}}.js")}]).constant("DEBUG_MODE",!0).constant("VERSION_TAG",(new Date).getTime()).constant("LOCALES",{locales:{es_ES:"Espanol",en_US:"English",eu_ES:"Euskera"},preferredLocale:"eu_ES"}),angular.module("nirewebguneaApp").controller("AppCtrl",["$scope","$translate","LocaleService",function(a,b,c){a.name={full:"Iñigo I",all:"Iñigo Iparragirre",first:"Iñigo",last:"Iparragirre"},a.birthday="Maiatza 28, 1977",a.email="inigoiparraguirre@gmail.com",a.phone="(+34) 656761151",a.positions=["Ingenieri Industriala","Software Garatzailea"],a.address="Oiartzun - Gipuzkoa",a.currentLocaleDisplayName=c.getLocaleDisplayName(),a.localesDisplayNames=c.getLocalesDisplayNames(),a.visible=a.localesDisplayNames&&a.localesDisplayNames.length>1,a.changeLanguage=function(c){a.locale=b.use(c)}}]),angular.module("nirewebguneaApp").service("LocaleService",["$translate","LOCALES","$rootScope","tmhDynamicLocale",function(a,b,c,d){"use strict";var e=b.locales,f=Object.keys(e);f&&0!==f.length||console.error("There are no _LOCALES provided");var g=[];f.forEach(function(a){g.push(e[a])});var h=a.proposedLanguage(),i=function(a){return-1!==f.indexOf(a)},j=function(b){return i(b)?(h=b,void a.use(b)):void console.error('Locale name "'+b+'" is invalid')};return c.$on("$translateChangeSuccess",function(a,b){document.documentElement.setAttribute("lang",b.language),d.set(b.language.toLowerCase().replace(/_/g,"-"))}),{getLocaleDisplayName:function(){return e[h]},setLocaleByDisplayName:function(a){j(f[g.indexOf(a)])},getLocalesDisplayNames:function(){return g}}}]),angular.module("nirewebguneaApp").run(["$templateCache",function(a){"use strict";a.put("views/experientzia/ceit.view.html",'<div class="io-section-heading-xs ng-scope"> <div class="io-section-heading-top"> <div class="section-logo"> <a href="http://www.ceit.es" target="new"><img width="80px" height="100px" src="images/ceit.cfb13211.png" class="responsive-img no-flex"></a> </div> <div class="section-title">Ceit-IK4 Research Center</div> <div class="section-date grey-text text-darken-1"> <span class="">2001-2004</span> </div> </div> <div class="io-section-heading-bottom"> <div class="section-subtitle"> <span class="yellow-text text-darken-4">Software Garatzailea</span> </div> </div> </div> <div class="io-section-content ng-scope"> <ul> <li class="center-item"> <i class="fa fa-circle yellow-text text-darken-4"></i> <span>{{"ceit.descripcion.1" | translate}}</span> </li> <li class="center-item"> <i class="fa fa-circle yellow-text text-darken-4"></i> <span>{{"ceit.descripcion.2" | translate}}</span> </li> </ul> </div>'),a.put("views/experientzia/freelance.view.html",'<div class="io-section-heading-xs ng-scope"> <div class="io-section-heading-top"> <div class="section-logo"> <a href="http://www.iksim.com" target="new"><img width="80px" height="60px" src="images/iksim.2749d02d.png" class="responsive-img no-flex"></a> </div> <div class="section-title">Freelance - IKSim</div> <div class="section-date grey-text text-darken-1"> <span class="">2013-Actual</span> </div> </div> <div class="io-section-heading-bottom"> <div class="section-subtitle"> <span class="yellow-text text-darken-4">Software Garatzailea</span> </div> </div> </div> <div class="io-section-content ng-scope"> <ul> <li class="center-item"> <i class="fa fa-circle yellow-text text-darken-4"></i> <span>{{"freelance.descripcion.1" | translate}}</span> </li> <li class="center-item"> <i class="fa fa-circle yellow-text text-darken-4"></i> <span>{{"freelance.descripcion.2" | translate}}</span> </li> </ul> </div>'),a.put("views/experientzia/tknika.view.html",'<div class="io-section-heading-xs ng-scope"> <div class="io-section-heading-top"> <div class="section-logo"> <a href="http://www.tknika.eus" target="new"><img width="80px" height="60px" src="images/tknika.4efc16ab.png" class="responsive-img no-flex"></a> </div> <div class="section-title">Tknika – Lanbide Heziketarako Berrikuntza Zentrua</div> <div class="section-date grey-text text-darken-1"> <span class="">2005-2009</span> </div> </div> <div class="io-section-heading-bottom"> <div class="section-subtitle"> <span class="yellow-text text-darken-4">Proiektu Kudeatzailea</span> </div> </div> </div> <div class="io-section-content ng-scope"> <ul> <li class="center-item"> <i class="fa fa-circle yellow-text text-darken-4"></i> <span>{{"tknika.descripcion.1" | translate}}</span> </li> <li class="center-item"> <i class="fa fa-circle yellow-text text-darken-4"></i> <span>{{"tknika.descripcion.2" | translate}} </span> </li> </ul> </div>'),a.put("views/experientzia/vicomtech.view.html",'<div class="io-section-heading-xs ng-scope"> <div class="io-section-heading-top"> <div class="section-logo"> <a href="http://www.vicomtech.es" target="new"><img width="80px" height="60px" src="images/vicomtech.107f7453.png" class="responsive-img no-flex"></a> </div> <div class="section-title">Visual Interaction Communication Technologies - IK4</div> <div class="section-date grey-text text-darken-1"> <span class="">2011-2013</span> </div> </div> <div class="io-section-heading-bottom"> <div class="section-subtitle"> <span class="yellow-text text-darken-4" translate="software garatzailea"></span> </div> </div> </div> <div class="io-section-content ng-scope"> <ul> <li class="center-item"> <i class="fa fa-circle yellow-text text-darken-4"></i> <span>{{"vicomtech.descripcion.1" | translate}} </span> </li> <li class="center-item"> <i class="fa fa-circle yellow-text text-darken-4"></i> <span>{{"vicomtech.descripcion.2" | translate}} </span> </li> </ul> </div>'),a.put("views/gaitasunak.view.html",'<div class="io-section-card"> <div class="io-section-card-heading"> Aurreratua </div> <div class="io-section-logos"> <div class="img-wrap"> <img src="images/cpp.000d5f8b.jpg" class="responsive-img no-flex"> <h6>C++</h6> </div> <div class="img-wrap"> <img src="images/java.2e1ca872.png" class="responsive-img no-flex"> <h6>Java</h6> </div> <div class="img-wrap"> <img src="images/html5-logo.a1b8925d.png" class="responsive-img no-flex"> <h6>HTML 5</h6> </div> <div class="img-wrap"> <img src="images/opengl.38a2a9f4.jpg" class="responsive-img no-flex"> <h6>OpenGL</h6> </div> <div class="img-wrap"> <img src="images/javascript-logo.dce2f574.png" class="responsive-img no-flex"> <h6>JavaScript</h6> </div> <div class="img-wrap"> <img src="images/angular-logo.9b1935b2.png" class="responsive-img no-flex"> <h6>AngularJS</h6> </div> <div class="img-wrap"> <img src="images/nodejs_logo.b33ae498.png" class="responsive-img no-flex"> <h6>NodeJS</h6> </div> <div class="img-wrap"> <img src="images/github-logo.d2e4a5da.png" class="responsive-img no-flex"> <h6>Github</h6> </div> <div class="img-wrap"> <img src="images/openhab.46eeb276.png" class="responsive-img no-flex"> <h6>Openhab</h6> </div> <div class="img-wrap"> <img src="images/aws.26a26e03.jpg" class="responsive-img no-flex"> <h6>AWS</h6> </div> </div> <div class="io-section-logos"> <!-- <div class="img-wrap">\r\n      <img  src="images/github-logo.d2e4a5da.png" class="responsive-img no-flex">\r\n      <h6>Github</h6>\r\n    </div> --> </div> </div> <!-- <div class="io-section-card">\r\n  <div class="io-section-card-heading">\r\n    Sakona\r\n  </div>\r\n\r\n  <div class="io-section-logos">\r\n\r\n  </div>\r\n  <div class="io-section-logos">\r\n\r\n    <div class="img-wrap"></div>\r\n  </div>\r\n</div> --> <div class="io-section-card"> <div class="io-section-card-heading"> Experientziarekin </div> <div class="io-section-logos"> <div class="img-wrap"> <img src="images/visualstudio.c8590a8b.png" class="responsive-img no-flex"> <h6>Visual Studio</h6> </div> <div class="img-wrap"> <img src="images/qt.cf6e73dc.jpg" class="responsive-img no-flex"> <h6>Qt</h6> </div> <div class="img-wrap"> <img src="images/eclipse.5c9599ef.png" class="responsive-img no-flex"> <h6>Eclipse IDE</h6> </div> <div class="img-wrap"> <img src="images/android.10563962.png" class="responsive-img no-flex"> <h6>Android SDK</h6> </div> </div> </div>'),a.put("views/hezkuntza/hezkuntza.view.html",'<div class="io-section-heading-xs ng-scope"> <div class="io-section-heading-top"> <div class="section-logo"> <a href="http://www.tecnun.es" target="new"><img width="80px" height="100px" src="images/tecnun.8a8c5071.png" class="responsive-img no-flex"></a> </div> <div class="section-title">Tecnun - Nafarroako Unibertsitatea</div> <div class="section-date grey-text text-darken-1"> <span class="">2001</span> </div> </div> <div class="io-section-heading-bottom"> <div class="section-subtitle"> <span class="yellow-text text-darken-4">Ingeniaritza Industriala</span> </div> </div> </div> <div class="io-section-content ng-scope"> <ul> <li class="center-item"> <i class="fa fa-circle yellow-text text-darken-4"></i> <span> Karrera amaiera proiektua: Ibilgailu simulatzaile baten 3D sistema bisualaren garapena TCP/IP sarean.</span> </li> </ul> </div>'),a.put("views/perfila.view.html",'<div class="io-profile-header ng-cloak"> <h1 class="grey-text darken-1">{{name.all}}</h1> <hr> <div></div> </div> <div class="io-profile-details"> <blockquote> <div class="b-icon"> <i class="mdi mdi-communication-phone red-text accent-2"></i> </div> <div class="b-text"> <span>{{phone}}</span> </div> </blockquote> <blockquote> <div class="b-icon"> <i class="mdi mdi-communication-email red-text accent-2"></i> </div> <div class="b-text"> <span>{{email}}</span> </div> </blockquote> <blockquote> <div class="b-icon"> <i class="mdi mdi-action-home red-text accent-2"></i> </div> <div class="b-text"> <div>{{address}}</div> </div> </blockquote> </div>'),a.put("views/prueba.html",'<div class="io-section-heading-xs ng-scope"> <div class="io-section-heading-top"> <div class="section-logo"> <img src="content/images/hourglass-logo.1aa1ec13.png" class="responsive-img" width="60px"> </div> <div class="section-title">Visual Interaction Communication Technologies - IK4</div> <div class="section-date grey-text text-darken-1"> <span class="">2011-2013</span> </div> </div> <div class="io-section-heading-bottom"> <div class="section-subtitle"> <span class="yellow-text text-darken-4">Software Garatzailea</span> </div> </div> </div> <div class="io-section-content ng-scope"> <ul> <li class="center-item"><i class="fa fa-circle yellow-text text-darken-4"></i> <span>Aplikazio interaktiboetan software garatzailea</span> </li> <li class="center-item"><i class="fa fa-circle yellow-text text-darken-4"> </i> <span>Mobil eta tablet aplikazioen garapena</span> </li> </ul> </div>'),a.put("views/socials.view.html",'<div class="io-section-card"> <div class="io-section-card-heading"> </div> <div class="io-section-logos"> <div class="img-wrap"> <img src="images/github-logo.d2e4a5da.png" class="responsive-img no-flex"> <h6>Github</h6> </div> <div class="img-wrap"> <img src="images/linkedin.6312ddf2.png" class="responsive-img no-flex"> <h6>Linkedin</h6> </div> <div class="img-wrap"> <img src="images/stack.362f209b.png" class="responsive-img no-flex"> <h6>Stackoverflow</h6> </div> </div> <div class="io-section-logos"> </div> </div> ')}]);