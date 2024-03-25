# Dom Manipulation Assignment

## 1. Webiste Name: [Dev To](https://dev.to/)

#### Topics

    - Query Selctory, Inner HTML

#### Sample Image

![Sample One](./images/Pic1.png)

#### Tasks

    Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

#### Output

![Output](./images/Pic2.png)

### Solution:-

```javascript
document.querySelector(
	'.side-bar .crayons-card .crayons-subtitle-2'
).innerHTML = 'iNeuron';

document.querySelector('.side-bar .crayons-card .color-base-70').innerHTML =
	'I Write Code';
```

<br>

## 2. Website Name: [Apple](https://support.apple.com/en-in)

#### Sample Image

![Store](./images/Picture_3.png)

#### Tasks

    Fetch all the product name and store in an array

#### Output

    ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

### Solution:-

```javascript
let itemArray = [];
let itemList = document.querySelectorAll('.as-imagegrid-item-title');
for (let name of list) {
	itemsArray.push(name.innerText);
}
```

<br>

## 3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

#### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

#### Sample Image

![Sample One](./images/Pic4.png)

#### Tasks

     Add another FAQ 'My New FAQ' to the list

#### Output

![Output](./images/Pic5.png)

### Solution:-

```javascript
let faq = document.querySelector('.accordion-homepage');
let newFaq = document.createElement('h3');
newFaq.innerHTML = 'My New FAQ';
let section = document.createElement('section');
section.classList.add('faq');

section.appendChild(newFaq);
parent.appendChild(section);
```

<br>

## 4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

#### Topics

    Query Selector, InnerText

#### Sample Image

![Sample One](./images/Pic6.png)

#### Tasks

    Change the contact number

#### Output

![Output](./images/Pic7.png)

### Solution:-

```javascript
document.querySelector('.customer-support .one-tel-number').innerText ='+91-6366256689';
```

<br>

## 5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

#### Topics

    getElementById, createElement, InnerText, append, setAttribute

#### Sample Image

![Sample One](./images/Pic8.png)

#### Tasks

    Target the main div of card and change the Button text to Check out

#### Output

![Output](./images/Pic9.png)

### Solution:-

```javascript
let anchorTag = document.querySelector('.diwali-deals-product-sale-btn');
let new_anchorTag = document.createElement('a');
document.querySelector('.diwali-deals-product-sale-pro').removeChild(anchorTag);
new_anchorTag.classList.add('diwali-deals-product-sale-btn');
new_anchorTag.innerText = 'Checkout';
document
	.querySelector('.diwali-deals-product-sale-pro')
	.appendChild(new_anchorTag);
```

<br>

## 6. Webiste Name: [Adidas](https://www.adidas.co.in/)

#### Topics

    - Query Selector, Event listeners, Changing Styles

#### Sample Image

![Sample One](./images/Pic10.png)

#### Tasks

     Target the search box and on hover change thebackground color to red.

#### Output

![Output](./images/Pic11.png)

### Solution:-

```javascript
let SearchBar = document.querySelector(".searchinput___19uW0");
searchBar.addEventListener("mouseover", () => {
    searchBox.style.backgroundColor = "#880808";
});
```

<br>

## 7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

#### Topics

       Form, Value, Submit

#### Sample Image

![Sample One](./images/Pic12.png)

#### Tasks

    To Search a topic in the MDN Search bar.
    First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

#### Output

![Output](./images/Pic13.png)

### Solution:-

```javascript
document.querySelector("#top-nav-search-input").value = "CSS Selector";
```

<br>

## 8. Webiste Name: [Google](https://www.google.com/)

#### Topics

       Remove Elements

#### Sample Image

![Sample One](./images/Pic14.png)

#### Tasks

     Remove alternate languages from the home page languages listed

#### Output

![Output](./images/Pic15.png)

### Solution:-

```javascript
let langs = document.querySelectorAll("#SIvCob a");
let newlangs = [];
for (let i = 0; i < langs.length; i++) {
	if (i % 2 != 0) {
		newlangs.push(langs[i]);
	}
}
let langsDiv = document.querySelector("#SIvCob");
for (let j = 0; j < langs.length; j++) {
	langsDiv.removeChild(langs[j]);
}
for (let j = 0; j < newlangs.length; j++) {
	langsDiv.appendChild(newlangs[j]);
}
```

<br>

## 9. Webiste Name: [Code Wars](https://www.codewars.com/)

#### Topics

       Change Font Family, Color of Text.

#### Sample Image

![Sample One](./images/Pic16.png)

#### Tasks

    Change the font family of the text to monospace and text color to the logo’s background color.

#### Output

![Output](./images/Pic17.png)

### Solution:-

```javascript
document.querySelector(".display-heading-1").style.cssText = "color:red;font-family:monospace";
```

<br>

## 10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

#### Topics

    querySelector, mouseover, click eventListener,  callback function, style,

#### Sample Image

![Sample One](./images/Pic18.png)

#### Tasks

    Target the button and change background colour on mouseover

#### Output

![Output](./images/Pic19.png)

### Solution:-

```javascript
const btn = document.querySelector("[data-test-label=landing-big-cta]");
btn.addEventListener("mouseover", () => {
	document.querySelector("[data-test-label=landing-big-cta] .login-btn-text").style.backgroundColor="red";
});
```

<br>

## 11. Webiste Name: [realme](https://www.realme.com/in/)

#### Topics

    querySelector,style,background-image

#### Sample Image

![Sample One](./images/Pic20.png)

#### Tasks

    change the realme logo to ineuron logo

#### Output

![Output](./images/Pic21.png)

### Solution:-

```javascript
const container = document.querySelector(".header .wrapper .logo");
container.innerHTML = `<img src="https://ineuron.ai/images/ineuron-logo.png" style="width: 80px;
height: 24px" >`;
```

<br>

## 12. Webiste Name: [Github](https://github.com/)

#### Topics

    querySelector,style,background-Color

#### Sample Image

![Sample One](./images/Pic22.png)

#### Tasks

     change the background colour of the button to blue.

#### Output

![Output](./images/Pic23.png)

### Solution:-

```javascript
document.querySelector(".btn-primary").style.backgroundColor = "blue";
```

<br>

## 13. Webiste Name: [Hackerrank](https://www.hackerrank.com/)

#### Topics

    querySelector,innerHtml

#### Sample Image

![Sample One](./images/Pic24.png)

#### Tasks

    Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.

#### Output

![Output](./images/Pic25.png)

### Solution:-

```javascript
document.querySelector(".fl-heading-text").innerText = "JSBOOTCAMP";
```

<br>

## 14. Webiste Name: [Asus](https://www.asus.com/in/)

#### Topics

    querySelector,style,font-size

#### Sample Image

![Sample One](./images/Pic26.png)

#### Tasks

    change the fontsize of “Hot Deals” to 80px

#### Output

![Output](./images/Pic27.png)

### Solution:-

```javascript
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";
```

<br>

## 15. Webiste Name: [Dell](https://www.dell.com/en-in/shop/deals/laptop-deals?gacd=10415953-9016-5761040-285981356-0&dgc=ST&gclid=Cj0KCQjwguGYBhDRARIsAHgRm4-XUDMhhVNyHXb3s1gY4ZBzORr_d9Se-buhJwy7asyUe7YdqEA11eEaAt6UEALw_wcB&gclsrc=aw.ds&nclid=BxjBlpBQsX6pjSHh-L8YYSU77EpfXRkG1AGMB5Wbeu386ykspfrPDnfx_DdFau20)

#### Topics

    querySelector,style.textAlign

#### Sample Image

![Sample One](./images/Pic28.png)

#### Tasks

    Convert the text “G15 Gaming Laptop” from left to right

#### Output

![Output](./images/Pic29.png)

### Solution:-

```javascript
document.querySelector(".ps-title").style.cssText = "text-align:end";
```

<br>

## 16. Webiste Name: [Vercel](https://vercel.com/)

#### Topics

    querySelector,innerHTMl

#### Sample Image

![Sample One](./images/Pic30.png)

#### Tasks

    change the heading “Start with the developer” to “Start with Scratch”

#### Output

![Output](./images/Pic31.png)

### Solution:-

```javascript
document.querySelector(".section-title_title__VEDfK").innerText = "Start with Scratch";
```

<br>

## 17. Webiste Name: [Sony](https://www.sony.co.in/)

#### Topics

    querySelector,innerHTMl

#### Sample Image

![Sample One](./images/Pic33.png)

#### Tasks

    change the button text To current Date.

#### Output

![Output](./images/Pic32.png)

### Solution:-

```javascript
const date = new Date();
document.querySelector(".btn-container").innerHTML = date.toUTCString();
```

<br>

## 18. Webiste Name: [Philips](https://www.philips.co.in/)

#### Topics

    querySelector,style,backgroundcolor

#### Sample Image

![Sample One](./images/Pic34.png)

#### Tasks

    change the background colour blue to orange

#### Output

![Output](./images/Pic35.png)

### Solution:-

```javascript
document.querySelector(
	".p-f03-footer-container .p-footer"
).style.backgroundColor = "orange";
```

<br>

## 19. Webiste Name: [Canon](https://in.canon/)

#### Topics

    querySelector,src

#### Sample Image

![Sample One](./images/Pic36.png)

#### Tasks

    extract the canon logo

#### Output

![Output](./images/Pic37.png)

### Solution:-

```javascript
document.querySelector(".navbar-brand img").src;
```

<br>

## 20. Webiste Name: [Oppo](https://www.oppo.com/in/)

#### Topics

    querySelector,style,color

#### Sample Image

![Sample One](./images/Pic38.png)

#### Tasks

    Change the description colour black to orange

#### Output

![Output](./images/Pic39.png)

### Solution:-

```javascript
document.querySelector(".product-card-content .wide .desc").style.color = "orange";
```

<br>
