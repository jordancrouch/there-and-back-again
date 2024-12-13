# There & Back Again - Testing Documentation

The main README documentation can be found under [README.md](https://github.com/jordancrouch/there-and-back-again/blob/main/README.md)

[View the website on GitHub Pages](https://jordancrouch.github.io/there-and-back-again/index.html).

## Table of Contents

1. [User Story Testing](#user-story-testing)
2. [Feature Testing](#feature-testing)
3. [Cross-browser Testing](#cross-browser-testing)
4. [Automated Testing](#automated-testing)
5. [Significant Bugs](#significant-bugs)
6. [Other Technical Difficulties](#other-technical-difficulties)

## User Story Testing

**First Time Visitor Goals**

1.  As a first time visitor, I want to be able to quickly and easily identify what the main purpose of the website is.
    1.  When first visiting the site, users are able to see the main navigation bar, which is easily identifiable with lots of white space utilisied around it, and the white background helps to set this apart from the hero image beneath. The links are easily readible to allow the user to choose where they would like to go. The hero underneath contains a large background image, with a 'View latest journals' call to action button that anchors them down to the latest journals section below.
    2.  The hero title and content clearly states that this website contains travel journals and photography.
    3.  The user is provided with two options: to scroll down, or click the call to action button, which will both take them to the latest journal section below to read the latest journal entry, or navigate the the journals page to read past journals.
2.  As a first time visitor, I want to be able to navigate through the website easily, to read content and view photos that I am interested in.
    1.  The site has been designed to be responsive and accessible, so that the user has the ability to easily navigate where they want. There is a navigation bar at the top of each page, and each of the containing links are clearly labelled to show where they will end up when interacting with each of them.
    2.  At the bottom of each page, other than the contact page itself, there is a contact call to action section, which helps to prevent the user from feeling trapped and unsure of where to go when reaching the bottom of the page.
    3.  Modals have a close button situated at the top and bottom of the content, so the user is able to close these when they are finished reading the content.
    4.  The lightbox gallery contains navigation arrows, a fullscreen button, and a close button, giving the user full control when navigating through the gallery when the lightbox is open.
    5.  On the contact page, after the form is submitted, a modal is shown to inform the user that the form has submitted successfully, and they are able to close this modal using either of the two buttons. This then resets the contact form, allowing the user to continue navigating throughout the site.
3.  As a first time visitor, I want to view high-quality images, to get a good sense of the places referenced in the journals.
    1.  All images throughout the site have been exported at optimal sizes for where they appear, and compressed to WebP format to help with performance. The only exception here is the lightbox gallery images, which are in jpeg format, but only load when the lightbox has been activated and thus not having a negative impact on performance when the page loads initially.
    2.  Full-width hero images have been used to highlight the images and help immerse the user with the content.

**Returning Visitor Goals**

1.  As a returning visitor, I want to read detailed travel journal content to learn about the different areas of Scotland to get some ideas for my own travels.
    1. There is a link in the navigation bar at the to of the page, allowing returning users to immediately navigate to this page to read journal content.
    2. There is also an anchor link call to action button in the homepage hero, which takes the user down to the latest journal article to read.
    3. The journal articles are opened in a modal, to provide the user with a focused reading experience, where they can remove any distraction from the rest of the page.
2.  As a returning visitor, I want a way to get in contact with the owner with any comments or questions I may have.
    1. In the top navigation bar, there is a call to action button to take users to the contact page, where they can fill out a form to submit their questions/comments.
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
    1. Immediately when arriving on the homepage of the site, the homepage hero contains a call to action button to provide the user with a way to navigate to the latest journal article section below.
    2. There is a link to the journals page in the navigation bar at the top of every page. When navigating to the journals page, the latest journal article appears as the largest image card on the page, helping the user to see that this is the latest journal article content.
3.  As a frequent user, I want to be able to sign up to a newsletter so I am notified when new content is added to the website.
    1. On the contact page, the contact form contains a checkbox that the user can select to sign up to an email newsletter.
    2. The contact call to action button in the navigation bar of every page is more prominent that the other page links, which takes the user to the contact page for them to be able to sign up to the mailing list when filling out the contact form.
    3. Other than the contact page, each page also has a contact call to action section at the bottom of the page, right above the footer, which is another way the user is able to navigate to the contact page and sign up to the newsletter.

## Feature Testing

All feature testing was done manually, as outlined below:

### Navigation Bar

- Check that the mobile menu icon works on both a mobile device and when on a desktop.
- Check the links to all pages are working from each separate page, and they take you to the right place on mobile and desktop.
- Check that the links don't overlap or conflict with the logo when the mobile menu switches to the expaned desktop view.
- Check to see if there are any issues switching screen size whilst the mobile menu is open, or when switching from portrait to landscape and vice-versa.
- Click on all links in the navigation bar on each page to check that they take you to the correct location.
- Check that all navigation links apply the active state on the correct page.
- Check the hover state of each of the navigation links is working on every page.
- Click on the logo in the navigation bar on each page to check that it takes you back to the homepage.
- Check that the navigation bar appearance is the same across all pages, ensuring that the height is consistent and nothing seems to move place when navigating to another page.
- On desktop, check that using tab keyboard navigation takes you through each link in the displayed order, and that focus styles are applied.

## Browser Testing

## Automated Testing

## Significant Bugs

## Other Technical Difficulties
