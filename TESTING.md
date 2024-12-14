# There & Back Again - Testing Documentation

The main README documentation can be found under [README.md](https://github.com/jordancrouch/there-and-back-again/blob/main/README.md)

[View the website on GitHub Pages](https://jordancrouch.github.io/there-and-back-again/index.html).

## Table of Contents

1. [User Story Testing](#user-story-testing)
2. [Feature Testing](#feature-testing)
3. [Cross-browser Testing](#cross-browser-testing)
4. [Automated Testing](#automated-testing)
5. [Significant Bugs](#significant-bugs)

## User Story Testing

**First Time Visitor Goals**

1.  As a first-time visitor, I want to be able to quickly and easily identify what the main purpose of the website is.
    1.  When first visiting the site, users can see the main navigation bar, which is easily identifiable with lots of white space utilised around it, and the white background helps to set this apart from the hero image beneath. The links are easily readable to allow the user to choose where they would like to go. The hero underneath contains a large background image, with a 'View latest journals' call to action button that anchors them down to the latest journals section below.
    2.  The hero title and content clearly state that this website contains travel journals and photography.
    3.  The user is provided with two options: to scroll down, or click the call-to-action button, which will both take them to the latest journal section below to read the latest journal entry or navigate to the journals page to read past journals.
2.  As a first-time visitor, I want to be able to navigate through the website easily, to read content and view photos that I am interested in.
    1.  The site has been designed to be responsive and accessible, so that the user could easily navigate where they want. There is a navigation bar at the top of each page, and each of the containing links are clearly labelled to show where they will end up when interacting with each of them.
    2.  At the bottom of each page, other than the contact page itself, there is a contact call to action section, which helps to prevent the user from feeling trapped and unsure of where to go when reaching the bottom of the page.
    3.  Modals have a close button situated at the top and bottom of the content, so the user can close these when they are finished reading the content.
    4.  The lightbox gallery contains navigation arrows, a full screen button, and a close button, giving the user full control when navigating through the gallery when the lightbox is open.
    5.  On the contact page, after the form is submitted, a modal is shown to inform the user that the form has submitted successfully, and they are able to close this modal using either of the two buttons. This then resets the contact form, allowing the user to continue navigating throughout the site.
3.  As a first-time visitor, I want to view high-quality images, to get a good sense of the places referenced in the journals.
    1.  All images throughout the site have been exported at optimal sizes for where they appear, and compressed to WebP format to help with performance. The only exception here is the lightbox gallery images, which are in jpeg format, but only load when the lightbox has been activated and thus not having a negative impact on performance when the page loads initially.
    2.  Full-width hero images have been used to highlight the images and help immerse the user with the content.

**Returning Visitor Goals**

1.  As a returning visitor, I want to read detailed travel journal content to learn about the different areas of Scotland to get some ideas for my own travels.
    1. There is a link in the navigation bar at the top of the page, allowing returning users to immediately navigate to this page to read journal content.
    2. There is also an anchor link call to action button in the homepage hero, which takes the user down to the latest journal article to read.
    3. The journal articles are opened in a modal, to provide the user with a focused reading experience, where they can remove any distraction from the rest of the page.
2.  As a returning visitor, I want a way to get in contact with the owner with any comments or questions I may have.
    1. In the top navigation bar, there is a call-to-action button to take users to the contact page, where they can fill out a form to submit their questions/comments.
    2. At the bottom of each page, other than the contact page itself, is a contact call to action section, giving the user an additional opportunity to navigate to the contact page to fill out the form.
    3. In the footer of the website there are social links, so the user is also provided with an option to get in touch with the site owner a social media platform of their choosing.
3.  As a returning visitor, I want to engage with a community of like-minded people on social media.
    1. At the bottom of every page throughout the website, the footer is shown, which contains social media icons. These links give the user the ability to interact with a platform of their choice and connect with other like-minded people.

**Frequent User Goals**

1.  As a frequent user, I want to read more detailed information on travel locations, including distances to different places of interest and recommended or required travel gear that can be used as inspiration for my own adventures.
    1. Travel journal articles have clearly defined headings, so that the content is easy to read and navigate to specific content sections.
    2. The content of the travel journals contain information on how long it takes to reach each destination by car.
    3. Where relevant, information is included in the content to provide users with an understanding of attire or travel required for the trip.
2.  As a frequent user, I want to be able to easily find and read the latest travel journal.
    1. Immediately when arriving on the homepage of the site, the homepage hero contains a call-to-action button to provide the user with a way to navigate to the latest journal article section below.
    2. There is a link to the journals page in the navigation bar at the top of every page. When navigating to the journals page, the latest journal article appears as the largest image card on the page, helping the user to see that this is the latest journal article content.
3.  As a frequent user, I want to be able to sign up to a newsletter, so I am notified when new content is added to the website.
    1. On the contact page, the contact form contains a checkbox that the user can select to sign up to an email newsletter.
    2. The contact call to action button in the navigation bar of every page is more prominent that the other page links, which takes the user to the contact page for them to be able to sign up to the mailing list when filling out the contact form.
    3. Other than the contact page, each page also has a contact call to action section at the bottom of the page, right above the footer, which is another way the user can navigate to the contact page and sign up to the newsletter.

## Feature Testing

All feature testing was done manually, as outlined below:

### Navigation Bar

- Check that the mobile menu icon works on both a mobile device and when on a desktop.
- Check the links to all pages are working from each separate page, and they take you to the right place on mobile and desktop.
- Check that the links don't overlap or conflict with the logo when the mobile menu switches to the expanded desktop view.
- Check to see if there are any issues switching screen size whilst the mobile menu is open, or when switching from portrait to landscape and vice-versa.
- Click on all links in the navigation bar on each page to check that they take you to the correct location.
- Check that all navigation links apply the active state on the correct page.
- Check the hover state of each of the navigation links is working on every page.
- Click on the logo in the navigation bar on each page to check that it takes you back to the homepage.
- Check that the navigation bar appearance is the same across all pages, ensuring that the height is consistent, and nothing seems to move out of place when navigating to another page.
- On desktop, check that using tab keyboard navigation takes you through each link in the displayed order, and that focus styles are applied.
- Check that screen readers read the navigation links in the correct order they appear.

### Home Hero Anchor Link

- Check that the button scrolls down to the relevant section when clicked on mobile and desktop, and that the section is fully visible and not hidden behind the fixed navigation bar.
- Check that the button scrolls down to the relevant section when touched on mobile devices, and that the section is fully visible and not hidden behind the fixed navigation bar.
- Check that it is possible to use tab on a keyboard to focus on the button, and that the focus state is applied, and pressing enter takes the user to the relevant section without it hiding behind the fixed navigation bar.
- Check that the button hover state is applied when hovering over it with a mouse cursor.
- Check that screen readers can identify the button and read the button content.

### Buttons and Links

- Check that buttons and links throughout the site take the user to the specified location.
- Check that button and link hover styles throughout the site are applied when interacting with them with a mouse cursor.
- Check that button and link focus styles throughout the site are applied when reached using keyboard tab navigation.
- Check that buttons and links throughout the site can be reached using tab keyboard navigation in the correct order, and when pressing enter when the button/link is in focus takes you to the desired link destination.
- Check that screen readers can read button and link content when scanned or navigated to using tab on a keyboard.

### Journal Article Cards

- Check that journal cards on the homepage and journals page open the modal content when clicked or touched.
- Check that journal card hover styles on the homepage and journals page are applied when they are interacted with using a mouse cursor.
- Check that the journal cards on the homepage and journals page can be navigated to using tab on a keyboard, and that focus styles are applied when they are reached and pressing enter when they are selected opens the corresponding journal article modal.

### Modals

- Check that journal modals open the relevant modal content when clicked, touched, or opened by using enter on a keyboard.
- Check that the close icon and close button successfully close the opened modal when clicked, touched, or when pressing enter on a keyboard when they are in focus, or when pressing escape on a keyboard.
- Check that image carousels in journal modals can be interacted with using a mouse, touch, or keyboard navigation, and that hover/focus styles are applied to the navigation arrows.
- Check that the contact form thank you modal opens after a form has been submitted successfully, and that the close icon and button close the modal when clicked, touched, or when pressing enter on a keyboard when they are in focus, or escape whilst the modal is open, and that the hover/focus styles are applied for each instance.
- Check that the contact form 'thank you' modal resets the contact form when it is closed, as intended.
- Check that screen readers can read journal article content, navigation elements (close buttons, links, and carousel navigation previous/next arrows), as well as image alt text.
- Check that the modals work responsively across all screen sizes, and that a user can scroll down to read all of the content in both desktop (mouse/spacebar) and mobile (swipe).

### Masonry Image Gallery

- Check that the masonry layout is applied to the images across all viewports, and that the layout adjusts when the viewport changes size, or when a mobile device is rotated between portrait and landscape view.
- Check that the image hover state is applied when it is interacted with using a mouse.
- Check that the focus hover state is applied whilst each image is in focus when navigating through them using tab on a keyboard.

### Lightbox

- Check that clicking on, touching, or pressing enter on a keyboard when an image is on focus opens the corresponding larger image file in the lightbox.
- Check that the lightbox navigation arrows, when interacted with using a mouse, touch, or keyboard (left/right arrow keys) take you to the correct previous/next image in the gallery.
- Check that it is possible to close the lightbox, either by clicking/touching the close icon, or by clicking or touching outside of the image.
- Check that it is possible to close the lightbox using the escape key on a keyboard.
- Check that it is possible to open the lightbox in full screen mode, either by clicking/touching the full screen icon, or by using the keyboard shortcut (F11) whilst the lightbox is open.
- Check that is it also possible to navigate through the lightbox gallery by clicking and dragging a mouse in the desired direction, or by swiping on mobile devices.
- Check that the lightbox is responsive and works correctly across all screen sizes.

### Contact Form

- Check that the relevant error messages are displayed for each required field when they are empty or not the correct format, and the form submit button has been clicked, touched, or when enter has been pressed on a keyboard whilst it is in focus.
- Check that it is possible to click, touch, and tab to each field on the form so that it can be filled out, and that a focus state is visible when a field is in focus.
- Check that the submit button can be interacted with by clicking, touching, or pressing enter on a keyboard whilst it is in focus, and that the hover/focus styles are present.
- Ensure that the checkbox can be selected/deselected by mouse click, touch, and by pressing the spacebar whilst it is in focus.
- Check that the contact form labels, inputs, and placeholder text can be read by screen readers.
- Check that the form works responsively across all screen sizes, going from a single column on smaller devices and the name/email fields occupy the same row on larger screens.

### Footer

- Check that the footer is present and consistent across all pages on the site, and that it works responsively.
- Check that footer social icons open in a new tab when clicked, touched, or when enter is pressed on a keyboard whilst the link is in focus.
- Check that the correct hover/focus styles are applied in each instance.

## Cross-browser Testing

Cross-browser testing was conducted by manually checking each of the features above on the different browsers and operating systems outlined below:

### Windows 11

#### Firefox/Chrome/Edge

All features work as intended.

### Android

#### Firefox/Chrome

All features work as intended.

### macOS

#### Safari/Firefox/Chrome

All features work as intended.

### iOS

#### Safari/Firefox/Chrome

All features work as intended.

## Automated Testing

### HTML Validation

[W3C Markup Validation Service](https://validator.w3.org/) was used to check the markup validity of the HTML used in this project. The following errors and warnings were identified upon initial checks:

#### Homepage

- Error: Element figcaption not allowed as child of element div in this context.
  - Upon inspection of this element, I noticed that a figcaption had been added without the required enclosing figure element. To fix this, the image and figcaption elements were wrapped in a containing figure element.

#### Journals Page

- Error: Element figcaption not allowed as child of element div in this context.
  - This was the same error present on the homepage, and the same fix was applied to resolve this issue.
- Error: Duplicate ID second-journal-modal-label.
  - The third journal modal H1 element ID was referencing the second journal modal label. This was updated to correctly match the third journal modal ID to fix this error.
- Error: The aria-labelledby attribute must point to an element in the same document.
  - The duplicate ID error above resulted in this error, which was resolved by resolving the duplicate ID error.
- Error: End tag footer seen, but there were open elements.
  - Error: Unclosed element div
    - The two errors above pointed towards an unclosed div element, with the unclosed element div error providing the reference to where in the document this occurred, which was added to resolve both errors.
- Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.
  - Although only a warning, to resolve this I decided to add a H2 heading to this section, with the Bootstrap class 'visually-hidden', so that it wouldn't show on the page and change the appearance of this section but will still be accessible to screen readers.

#### Gallery Page

- Error: Duplicate attribute width.
  - After adding explicit image size attributes, the width attribute had been mistakenly added twice to both navigation bar and footer logos. This was fixed by changing the relevant attribute from 'width' to 'height'.
- Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.
  - Although only a warning, to resolve this I decided to add a H2 heading to this section, with the Bootstrap class 'visually-hidden', so that it wouldn't show on the page and change the appearance of this section but will still be accessible to screen readers.

Following fixing the errors and warnings above, the pages were tested again and returned no further errors or warnings, confirming that they have been validated and contain no syntax errors.

#### Results

- [Homepage](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjordancrouch.github.io%2Fthere-and-back-again%2Findex.html)
- [Journals](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjordancrouch.github.io%2Fthere-and-back-again%2Fjournals.html)
- [Gallery](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjordancrouch.github.io%2Fthere-and-back-again%2Fgallery.html)
- [Contact](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjordancrouch.github.io%2Fthere-and-back-again%2Fcontact.html)

### CSS Validation

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to check the CSS used in this project for errors and ensure it meets W3C compliance.

The following error was identified on initial validation checks:

- `#contact-form`: Value Error: padding-bottom auto is not a padding-bottom value: auto

This error was fixed by removing the incorrect padding-bottom style. Although incorrect, this error led me to remove a mobile style that was applied for an earlier iteration of the contact form layout, which was also removed as it was redundant.

Upon checking the CSS again with the validation service, no errors were shown and is confirmed to be valid CSS that meets W3C compliance.

### PageSpeed Insights

[Google PageSpeed Insights (PSI)](https://developers.google.com/speed/docs/insights/v5/about) 'reports on the user experience of a page on both mobile and desktop devices and provides suggestions on how that may be improved'.

All pages of the website were tested using Google PSI and produced the following results:

**Home**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-index-html/knkvvn9z1j?form_factor=mobile)

![Homepage mobile psi results - first test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-home-mobile-1.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-index-html/knkvvn9z1j?form_factor=desktop)

![Homepage desktop psi results - first test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-home-desktop-1.png)

**Journals**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-journals-html/wjub0frwnb?form_factor=mobile)

![Journals page mobile psi results - first test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-journals-mobile-1.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-journals-html/wjub0frwnb?form_factor=desktop)

![Journals page desktop psi results - first test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-journals-desktop-1.png)

**Gallery**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-gallery-html/bfpq1bvymc?form_factor=mobile)

![Gallery page mobile psi results - first test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-gallery-mobile-1.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-gallery-html/bfpq1bvymc?form_factor=desktop)

![Gallery page desktop psi results - first test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-gallery-desktop-1.png)

**Contact**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-contact-html/su0784ukcj?form_factor=mobile)

![Contact page mobile psi results - first test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-contact-mobile-1.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-contact-html/su0784ukcj?form_factor=desktop)

![Contact page desktop psi results - first test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-contact-desktop-1.png)

#### Largest Contentful Paint

The primary issue identified with lower performance scores on mobile was related to the largest contentful pain element of the hero images. Due to the file size, it was taking longer for these to load on mobile, despite being compressed and exported served in WebP format. I tried to refrain from compressing these images too much, as I wanted them to remain as high quality as possible.

To attempt to resolve this and improve mobile performance, I decided to create mobile image sizes for the hero images and implement them as [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

However, after implementing these responsive images and checking the performance on Google PSI, it didn't have any impact. As a result, I decided to further compress the primary images used in an attempt to further reduce their file size, without causing the image quality to deteriorate too much.

It appeared that the performance results started to decline after trying to implement the above improvements, so I removed the responsive images and kept with the desktop images that had been further compressed for the outcome.

#### Eliminate render-blocking resources

Potential performance savings of one second could be made by eliminating the render blocking CSS attributed to Bootstrap CSS. I look at potentially [potentially implementing a fix for this](https://stackoverflow.com/questions/68035757/how-to-eliminate-render-blocking-resources-app-css), however, as the Bootstrap is its own external file, it wouldn't be possible to separate out critical CSS and inline the styles, and as this CSS is critical to the layout of the page, I decided against it.

#### Properly size images

Like largest contentful paint, on mobile there are some images that are reported as not being sizes correctly on the viewport tested. However, images throughout the website have been exported at the largest size they can appear, but in this case, they are still too large for the viewport size being tested. It would be possible to implement responsive images across the website too, but with the largest potential savings coming from the homepage of 142kb, I decided to not implement this, as the largest performance issue of the hero images had been addressed.

#### Image elements do not have explicit width and height

Images identified as having missing explicit width and height attributes had these values added to resolve report. This caused some of the images to appear stretched vertically, but by adding the auto height Bootstrap utility class to the images to make sure they scale at the correct aspect ratio to their width, they then displayed correctly.

#### Accessibility

Heading elements were identified to not be in a sequentially-descending order. To fix this, the heading tags were removed and replaced with Bootstrap utility classes to replicate the heading element size and style, to resolve this error and not make any alterations to the appearance of the text.

Accessibility testing was also conducted with the [web accessibility evaluation tool (WAVE)](https://wave.webaim.org/) to ensure that the errors and warnings were fixed, and there were no additional errors shown separate to the Google PSI reports.

After changing the heading elements as describe above, and with adding visually hidden heading elements to sections that did not contain a header, there were new errors regarding skipped heading levels. To rectify this, journal article card headings were changed back to H3 with the "h5 fw-semibold" class applied to keep the same styling as before.

For journal article content, a H2 tag was skipped between the main H1 modal title and H3 tags used for content headings. To resolve this skipped tag, the H3 headings were changed to H2 with "h3 fw-semibold" classes applied, to keep the same styling. However, this meant that the secondary font used for the larger heading tags (H1 & H2) was being used, so a CSS style was added for this instance, where a H2 tag utilised the "h3" class.

#### Final Results

Each page was re-tested after implemented the above steps with the following results:

**Home**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-index-html/9xbnp11xdo?form_factor=mobile)

![Homepage mobile psi results - second test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-home-mobile-2.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-index-html/9xbnp11xdo?form_factor=desktop)

![Homepage desktop psi results - second test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-home-desktop-2.png)

**Journals**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-journals-html/fj3sr5ca6n?form_factor=mobile)

![Journals page mobile psi results - second test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-journals-mobile-2.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-journals-html/fj3sr5ca6n?form_factor=desktop)

![Journals page desktop psi results - second test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-journals-desktop-2.png)

**Gallery**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-gallery-html/80ja2745cf?form_factor=mobile)

![Gallery page mobile psi results - second test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-gallery-mobile-2.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-gallery-html/80ja2745cf?form_factor=desktop)

![Gallery page desktop psi results - second test](https://raw.githubusercontent.com/jordancrouch/there-and-back-again/refs/heads/main/assets/pagespeed/psi-gallery-desktop-2.png)

**Contact**

[Mobile](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-contact-html/y1g2syulks?form_factor=mobile)

![Contact page mobile psi results - second test](https://github.com/jordancrouch/there-and-back-again/blob/main/assets/pagespeed/psi-contact-mobile-2.png)

[Desktop](https://pagespeed.web.dev/analysis/https-jordancrouch-github-io-there-and-back-again-contact-html/y1g2syulks?form_factor=desktop)

![Contact page desktop psi results - second test](https://github.com/jordancrouch/there-and-back-again/blob/main/assets/pagespeed/psi-contact-desktop-2.png)

## Significant Bugs

### Home hero image parallax effect

I found that the home hero background image was not filling the height of the header on scroll, which would reveal some of the dark blue background behind, and at a point the image would 'jump' and increase in size. On Firefox (Android), this seemed to be a result of the browser navigation bar disappearing on scroll, but a similar issue was also present on Chrome (Android), despite not having the browser navigation at the bottom of the page. This issue was not as noticeable in Safar/Firefox/Chrome on iOS, but I decided to remove the parallax scroll effect on mobile and tablet devices to mitigate this issue.

### Lightbox browser scrollbar

When the lightbox was opened, the vertical scroll (overflow) of the browser was hidden. This wasn't noticeable on Firefox, as the scrollbar is very narrow. However, this created a blank space on Chrome, as the scrollbar is much wider, so there was an empty space. To resolve this, vertical scroll (overflow-y) is forced on the html element using the class that lightbox adds: fslightbox-open.

#### Masonry gallery

When adding images to the masonry gallery, I found that the masonry grid didn't actually seem to be working. After looking further into the documentation, I realised that I hadn't added the imageslayout JavaScript that I was attempting to use. Further to this, I noticed some console errors, and these referenced things not on the gallery page, such as bootstrap modal. This led me to add additional checks to ensure that the elements existed before any functions were being called, and this was applied on all pages that the site's internal JavaScript was being loaded.

### Journal article layout

After adding the images to the journal article cards, they no longer aligned as intended, so that there was a consistent and equal horizontal and vertical gap between all articles, and that the smaller journal article cards always aligned to the top and bottom of the larger featured article. This required some additional CSS styling to be added, as I couldn't achieve this purely with Bootstrap.

---

[Click here](https://github.com/jordancrouch/there-and-back-again/blob/main/README.md) to return to the main README.md.
