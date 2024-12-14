# There & Back Again

![There & Back Again Mockups](https://jordancrouch.github.io/there-and-back-again/assets/mockups/there-and-back-again-responsive-mockups.jpg)

This is a personal travel journal website, used to document and share trips taken to Scotland.

[View the website on GitHub Pages](https://jordancrouch.github.io/there-and-back-again/index.html).

# Table of Contents

1.  [Overview](#overview)
2.  [User Experience (UX)](#user-experience-ux)
    1.  [Strategy](#strategy)
    2.  [Scope](#scope)
    3.  [Structure](#structure)
    4.  [Skeleton](#skeleton)
    5.  [Surface](#surface)
3.  [Features](#features)
    1.  [Existing Features](#existing-features)
    2.  [Future Feature Considerations](#future-feature-considerations)
4.  [Technologies Used](#technologies-used)
5.  [Testing](#testing)
6.  [Deployment](#deployment)
    1.  [How this Project was Deployed](#how-this-project-was-deployed)
    2.  [How to Run this Project in your Browser](#how-to-run-this-project-in-your-browser)
    3.  [How to Run this Project Locally](#how-to-run-this-project-locally)
7.  [Credits](#credits)
    1.  [Content](#content)
    2.  [Media](#media)
    3.  [Code](#code)
8.  [Acknowledgements](#acknowledgements)

# Overview

There & Back Again is a personal travel website, which was born out of a desire of wanting to have a place to document trips taken to Scotland, and be able to revisit them in the future. It also serves as a place where a large amount of photography images can be curated and added to enhance the travel journals, and to form a gallery highlighting some of our favourite images.

# User Experience (UX)

## Strategy

### User stories

**First Time Visitor Goals**

1.  As a first time visitor, I want to be able to quickly and easily identify what the main purpose of the website is.
2.  As a first time visitor, I want to be able to navigate through the website easily, to read content and view photos that I am interested in.
3.  As a first time visitor, I want to view high-quality images, to get a good sense of the places referenced in the journals.

**Returning Visitor Goals**

1.  As a returning visitor, I want to read detailed travel journal content to learn about the different areas of Scotland to get some ideas for my own travels.
2.  As a returning visitor, I want a way to get in contact with the owner with any comments or questions I may have.
3.  As a returning visitor, I want to engage with a community of like-minded people on social media.

**Frequent User Goals**

1.  As a frequent user, I want to read more detailed information on travel locations, including distances to different places of interest and recommended or required travel gear that can be used as inspiration for my own adventures.
2.  As a frequent user, I want to be able to easily find and read the latest travel journal.
3.  As a frequent user, I want to be able to sign up to a newsletter so I am notified when new content is added to the website.

## Scope

### Requirements

**Information Architecture (IA)**

- There should be clearly defined sections throughout the site.
- Navigation should be logical and intuitive, so it is easy to navigate to the latest journal, all journals, to the gallery, and contact page.
- Content should be organised in a chronological manner.

**Content Strategy**

- Define, plan, and create the relevant content to be included.
- Source high-quality, engaging photography to enhance the content.

**Technical Implementation**

- Responsive, mobile-first design, to ensure the website can be used on all devices.
- Testing and performance optimisation to ensure the website is performant so users want to interact with it and are undeterred.
- Accessibility compliance so everyone can access, use, and engage with the website.

**User Engagement**

- Contact form for users to be able to submit any queries or comments.
- Social media links.

## Structure

### Homepage

- Immediately grabs the user's attention and provides an outline of the website's content.
- Defined overview sections linking to each of the other pages of the website.
- **User Goals:**
  - Quickly understand what the website is about and it's purpose.
  - Easily access different sections of the website.
  - Be enticed by engaging content, like featured travel journals and images.
- **Business Goals:**
  - Make a strong first impression to keep users on the site.
  - Highlight the latest content.
  - Instil trust in the user.

### Journals Page

- Showcases a collection of travel journals, allowing users to explore and read different stories.
- **User Goals:**
  - Easily find and read content that they're interested in.
  - Get information that can be used to plan their own trips.
- **Business Goals:**
  - Increase the time users spend on the site engaging with journal content.
  - Provide useful information to help others plan their own trips.

### Gallery Page

- Displays a curated selection of images that highlight the beauty of Scotland.
- **User Goals:**
  - Quickly navigate over images to find what interests them.
  - Full-screen viewing of high-quality images.
- **Business Goals:**
  - Interest and engage the user.
  - Highlight the quality of content.

### Contact Page

- Provide a way for users to get in touch with the website owner.
- **User Goals:**
  - Get in touch with the website owner with questions/comments.
  - Find relevant contact information, such as social links.
- **Business Goals:**
  - Provide a easy way for users to send a message.
  - Build trust by being responsive and supplying useful information.
  - Gather user feedback on how the website can be improved.

## Skeleton

### Wireframes

[View](https://jordancrouch.github.io/there-and-back-again/assets/wireframes/there-and-back-again-wireframes.pdf) - it is recommended to download the wireframe PDF file for a better viewing experience, which can be done by right-clicking the link, followed by selecting 'Save Link As...'.

## Surface

### Design

#### Colour Scheme

The colour palette was inspired by [The Scottish Higlands colour palette by The Colour Palette Company](https://thecolourpalettecompany.com/collections/the-scottish-highlands-colour-palette), with some minor adjustments to meet accessibility requirements, and consists of four colours:

- Dark blue: #022C40 (Primary text colour and dark backgrounds)
- Light blue: #9FC9DF (Light background colour)
- Turquoise: #2C8376 (Accent colour for links)
- White: #FFFFFF (Primary background colour and for text on darker backgrounds and images)

On initial design, the turquoise colour from the colour palette was used (#3AAC9C). However, it was later found to not meet the [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (AA) guidelines minimum contrast ratio of 4.5:1, instead only achieving a ratio of [2.77:1](https://www.siegemedia.com/contrast-ratio#%233AAC9c-on-white). As a result, this colour was changed to the value referenced above, in order to achieve a [contrast ratio of 4.55](https://www.siegemedia.com/contrast-ratio#%232c8376-on-white).

#### Typography

- [Metamorphous](https://fonts.google.com/specimen/Metamorphous) is used as the display font for large heading styles (H1 & H2). This font is inspired by Romanesque, Gothic, and Renaissance letter shapes, and was used to help convey the blend between historical landmarks and nature content throughout the website. A serif font has been set as a fallback, which will replace Metamorphous if there are any issues with the font loading correctly for any reason.
- [Monstserrat](https://fonts.google.com/specimen/Montserrat) is used as the font for the body copy and other heading sizes. This font is a good pairing with the larger display heading font used, as they have a similar x-height, and makes for easy reading of longer passages of content. A sans serif font has been set as a fallback to replace Monsterrat, in any case where there are issues with this loading correctly.

#### Imagery

- The imagery used throughout the site is important to help immerse the user in the content. All photos are entirely my own, and were taken on trips to Scotland, in order to provide an authentic and realistic experience. Ther is one exception of an image used in the featured journal article (Inveruglass II), which was taken from [cottages.com](https://www.cottages.com/cottages/kintulloch-uk5230), and it's use has also been credited on the website.

#### Visual Effects

**Navigation Links**

The menu links in the main navigation bar have a subtle underline hover effect, which is used to help stand out and differentiate from the other links on the page, as this is the primary method of navigation on the website. The 'Contact' page button background colour was changed to use the dark blue, in order to match the colour of the other links in the navigation bar, so that it could also then have a matching hover/active state, which also helps to differentiate it from other buttons used throughout the site, so that it is clear that this is also part of the primary navigation element.

**Homepage Hero**

The homepage hero has parallax effect applied, which was achieved through help from [StackOverflow](https://stackoverflow.com/questions/33550450/how-to-use-css-background-attachment-in-img-tag), as header is using a bootstrap card component, so it is an img element as opposed to a background image. Due to the large size of this header image, this effect was implemented as a subtle way to immerse the user and highlight the image, allowing them to view it in it's entirety.

**Hero Images**

The hero images throughout the site have a pseudo element overlayed, which contains a linear gradient from top to bottom, to help set the overlayed text apart from the background and improve it's legibility, whilst trying to keep as much of the images visible as possible. A multiply blend mode has also been applied to this, which helps for more of the background image colours to filter through, as opposed to just having a solid colour blocking more of the image.

Gradients used throughout the site were generated on [Colorzilla](https://www.colorzilla.com/en-gb/gradient-editor/)

**'Read More' Style Links**

Aside from buttons, this secondary style of links has a heavier font weight with an arrow icon to indicate that it is a link that will take you somewhere else on the site. When hovering on these links, there is a subtle movement of the arrow, to further help the user identify these links are interactive and can be clicked.

**Journal Article Cards**

The journal cards also have the same gradient applied to them as the hero images, but they also have a scaling effect to the images on hover. As the whole card is a link, the read more style link arrow also moves at the same time. This combination of effects were used to make these elements interesting to the user, as when they are clicked, the journal content opens up in a modal.

#### High-fidelity Designs

[View](https://jordancrouch.github.io/there-and-back-again/assets/wireframes/there-and-back-again-design.pdf) - it is recommended to download the design PDF file for a better viewing experience, which can be done by right-clicking the link, followed by selecting 'Save Link As...'.

## Features

### Existing Features

#### Navigation Bar

A navigation bar is present and fixed to the top of every page. Having the first element of each page be consistent, clean, and easy to use, helps to build trust for the user that they are in control of their journey and don't feel as though they are being forced to a specific area of the website. The logo is the first item visible on the left, and is larger than the navigation links so that it is more prominent to ensure the user always knows that they are still on the same website whilst navigating to other pages.

#### Homepage Hero Anchor Link

The use of a large homepage hero image has been implemented to instantly provide the user with a sense of the content of the website and draw them in. However, due to the size of the hero, it could provide the possibility that users are unaware they are able to scroll down further on the homepage, if the height of the hero is taking up the full height of the viewport. A contrasting button has been utilized as a call to action, which also includes a down arrow icon, as a way to guide the user down toward the latest journal article section by interacting with the anchor link.

#### Journal Article Modals

Journal article content has been placed into modals to provide users with a more focused and uninterrupted reading experience. When a modal is opened, it is brought forward away from the rest of the content on the page, which allows the reader to immerse themselves in the content more easily. The modals have a set set maximum width that ensures lines of text do not become too long, which helps to provide a better reading experience. Images and image carousels are used to illustrate the article content, and provide a break between passages.

#### Masonry Gallery Lighbox

The masonry gallery was implemented to create an aesthetically pleasing layout of high quality images, to help further engage visitors, and draw them in to want to interact with the gallery. Users can interact with an image to open it in the lightbox gallery, where the high definition images are loaded so they can be viewed at a larger size and higher resolution.

#### Contact Form

A basic contact form has been added to allow users to submit any comments or questions they have. It requires only a small amount of information, so that it is possible to respond to the user. An optional checkbox has been included, providing an opportunity to sign up to a newsletter and to stay up to date with the latest travel journal content.

### Future Feature Considerations

#### Journal Article Categorisation/Filtering

As more journal articles are added, it would provide a good opportunity to add a way users are able to sort/filter through them by date, region, location, activity type, etc. This would provide a much better user experience compare to having to filter through a long list of articles/pages, and would also help to prevent having to load a large amount of content and images on one page.

#### Image Captions

To help provide more immediate information to the user, it would be good to provide image captions that clearly identify the subject matter and location of each image, both in journal article content, and within the lightbox image gallery.

#### Maps

Static and/or interactive maps would also serve as a way to give the user additional relevant information relating to each journal. Whether it is to illustrate the distance between locations, or so that they are able to get a better understanding of local geography, or even just to search for their own points of interest around destinations.

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript ES6](https://en.wikipedia.org/wiki/ECMAScript)

### Frameworks, Libraries & Programs Used

- [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
  - Bootstrap was used primarily to build the website using elements, styles, and functionality provided from the toolkit.
- [Google Fonts](https://fonts.google.com/)
  - Google fonts were used to embed the "Metamorphous" and "Montserrat" fonts in the head of each file, and are used on all pages of the project.
- [Font Awesome](https://fontawesome.com/)
  - Font Awesome was used on all pages throughout the site, to add social media icons and arrow icons for buttons/links.
- [Masonry](https://masonry.desandro.com/)
  - Masonry was used on the gallery page of the website, to create a aesthetically pleasing layout for the gallery thumbnails.
- [Images Loaded](https://imagesloaded.desandro.com/)
  - Images Loaded was used in combination with Masonry on the gallery page, to help generate the layout used as images on the page are loaded.
- [FS Lightbox](https://fslightbox.com/)
  - FS Lightbox was used on the gallery page to provide an efficient way to load large, high-quality images, that the user can see by clicking on the thumbnails. This provides users with the ability to view HD quality images, without having to suffer from slow loading times, as the larger images only start to load once the thumbnails have been clicked.
- [Git](https://git-scm.com/)
  - Git was used for version control by utilising the Gitpod terminal to commit to Git and push to GitHub.
- [GitHub](https://github.com/)
  - GitHub was used to store the projects code after being pushed to Git, as well as deploying the project files so that the project can be viewed online.
- [ui.dev/amiresponsive](https://ui.dev/amiresponsive)
  - ui.dev/amiresponsive was used to create the website device mockup image used at the top of this file.
- [Figma](https://www.figma.com/)
  - Figma was used to create the [wireframes](https://jordancrouch.github.io/there-and-back-again/assets/wireframes/there-and-back-again-wireframes.pdf) and [designs](https://jordancrouch.github.io/there-and-back-again/assets/wireframes/there-and-back-again-design.pdf) for the project, as well as the logo and favicon. The wireframes were created using the [BRIX Templates Website Wireframes UI Kit](https://www.figma.com/community/file/1200835310657744518)
- [Photoshop](https://www.adobe.com/uk/products/photoshop.html)
  - Photoshop was used to edit, resize, and export the images in WebP format throughout the website.
- [W3C Markup Validation Service](https://validator.w3.org/)
  - The W3C Markup Validation Service was used to validate the project's HTML.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
  - The W3C CSS Validation Service was used to validate the project's CSS.
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
  - Google PageSpeed Insights was used to check the websites performance across mobile and desktop devices.
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
  - WAVE was used to test the websites accessibility features.

## Testing

Testing documentation and process can be found under [TESTING.md](https://github.com/jordancrouch/there-and-back-again/blob/main/TESTING.md)

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [jordancrouch/there-and-back-again](https://github.com/jordancrouch/there-and-back-again/) repository.
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. In the left-hand navigation, click on "Pages".
4. Under "Source", click the dropdown labelled "Deploy from a branch" and select "main".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com/jordancrouch/there-and-back-again/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [jordancrouch/there-and-back-again](https://github.com/jordancrouch/there-and-back-again/) repository.
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [jordancrouch/there-and-back-again](https://github.com/jordancrouch/there-and-back-again/) respository.
2. Under the repository name, click "Code".
3. To clone the repository using HTTPS, under "Code", click on the "HTTPS" tab and copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/jordancrouch/there-and-back-again.git
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/jordancrouch/there-and-back-again.git
> Cloning into 'there-and-back-again'...
> remote: Enumerating objects: 573, done.
> remote: Counting objects: 100% (157/157), done.
> remote: Compressing objects: 100% (109/109), done.
> remote: Total 573 (delta 80), reused 109 (delta 37), pack-reused 416 (from 1)
> Receiving objects: 100% (573/573), 46.33 MiB | 50.95 MiB/s, done.
> Resolving deltas: 100% (247/247), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

- The homepage hero styles required to achieve the parallax effect on desktop were found on this [StackOverflow post](https://stackoverflow.com/questions/33550450/how-to-use-css-background-attachment-in-img-tag).
- [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) was used throughout the ensure the site was responsive, and to utilise the pre-existing components and modal functionality.
- Code from [FS Lightbox documentation](https://fslightbox.com/javascript/documentation) was used to implement the lightbox.
- Code from [Masonry layout documentation](https://masonry.desandro.com/layout) was used to help with implementing the masonry grid layout.
- Code from [imagesLoaded](https://imagesloaded.desandro.com/#vanilla-javascript) was used to layout the masonry grid images as they loaded.
- Gradient overlays used on top of images were generated by [Colorzilla](https://www.colorzilla.com/en-gb/gradient-editor/).

### Content

- All text content used throughout this project was written by me.

### Media

- All photographs used throughout the project are my own, other than one journal article image that was taken from [cottages.com](https://www.cottages.com/cottages/kintulloch-uk5230).
- The logo was created in [Figma](https://www.figma.com)
- The favicon was also created in [Figma](https://www.figma.com), and converted using [favicon.io](https://favicon.io/)

### Acknowledgements

- Thank you to my mentor, Ben Kavanagh, who has been extremely helpful over such a short space of time, has encouraged me to push myself, and inspired me to work harder.
- Thank you to our Cohort Facilitator, Lewis Dillon, for our weekly standups.
