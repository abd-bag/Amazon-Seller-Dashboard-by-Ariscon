// ==UserScript==
// @name        Amazon Seller Dashboard by Ariscon
// @description Dashboard to help sellers.
// @version      0.1
// @author      Arisconde.com
// @include     *sellercentral.amazon.*
// @grant       none
// ==/UserScript==

// See the end of the code for the sources we referenced.


// Create a div element in another div element with the same styles etc. as on the page.
var divel = document.createElement ('div');
var htmls = '<div class="a-box-inner a-padding-base">'
+'    <div class="a-section a-spacing-small sc-widget-title clearfix">'
+'        <h2 class="a-size-medium sc-widget-heading a-text-normal"> Seller Dashboard by Ariscon</h2>'
+'           <div class="sc-handle-wrap sc-handle-wrap-popover">'
+'              <span class="a-declarative" data-action="a-sc-menu" data-a-sc-menu="{&quot;dataStrategy&quot;:&quot;preload&quot;,&quot;cardId&quot;:&quot;fLsHF2&quot;,&quot;name&quot;:&quot;widget-menu-fLsHF2&quot;,&quot;cardTitle&quot;:&quot;Notifications&quot;}">'
+'                 <i class="icon icon-more"></i>'
+'            </span>'
+'       </div>  '
+'    </div>'
+'    <div class="a-section sc-widget-content">'
+'       <div class="a-row">'
+'          <div class="a-column a-span12 a-span-last">'
+'             <span class="a-size-medium a-spacing-none a-color-price a-text-normal">'
+'                **** ALL THE DASHBORAD WILL BE DISPLAYED HERE AS REQUESTED BY THE SELLER ****'
+'           </span>'
+'                 <button id="myButton" type="button">'
+ '                click click!</button>'
+''
+'                *** some more data here ***'
+'                <span class="a-declarative" data-action="notificationLinkClick" data-notificationlinkclick="{}">'
+'                    <span>'
+'                        <a class="a-link-normal" href="https://www.arisconde.com/">'
+'                           ARISCON WEB PAGE ...'
+'                      </a>'
+'                 </span>'
+'            </span>'
+'       </div>'
+'  </div>'
+'    </div>'
+'</div>';

divel.innerHTML = htmls;
divel.setAttribute('id','widget-Ariscon');
divel.setAttribute("class","a-box a-spacing-base a-box-normal a-color-base-background sc-widget-box sc-responsive-unit gw-widget-center");
document.getElementById('gw-sentry').prepend(divel);

// Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false);

// Add action to the button.
function ButtonClickAction () {
    var bevent = document.createElement('p');
    bevent.innerHTML = 'The button was clicked. Tıklama ile script icinde yazılmıs baska herhangi bir fonksiyon da çalıştırılabilir...';
    document.getElementById ("widget-Ariscon").appendChild(bevent);
}

/*
References:
https://stackoverflow.com/questions/39644678/how-to-create-buttons-and-text-enters-with-javascript-in-scripts-tampermonkey
https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-the-first-child
https://openuserjs.org/scripts/cuzi/flickr_Download_Link/source
*/