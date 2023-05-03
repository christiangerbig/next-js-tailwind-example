# NextJS React app with tailwindCSS

## Description

A small exercise to create a webpage based on a UX/UI template with TailwindCSS.

### TailwindCSS

For the case if there are more than 5 css style classnames, the classnames could be written with template literals, each classname in a separate line to make it easier to read. Here is an example how this code looks like:

```javascript
<div
  className={`
  text-left
  font-roboto-bold
  text-[2.9375rem]
  leading-[3.25rem]
  tracking-normal
  text-white
  opacity-100
  `}
>
```

With this syntax it is still guaranteed that the Prettier Code plugin for TailwindCSS can sort the classes.

This syntax also works with function calls as expressions withing the classes:

```javascript
<div
  className={`
  relative
  z-10
  -mt-[22.3rem]
  mr-0
  flex
  h-[22.3rem]
  rounded-[1.1875rem]
  border
  border-smokey-grey
  bg-white
  px-[8rem]
  ${alignTextContainer(textContainerPosition)}
  `}
>
```

The expression in the template literal remains at its position, but it must be at the end of the template literal. Otherwise the sorting will stop there and all class names after the expression will be ignored.

# Client Frontend

## nextJS router (React nextJS app)

| Path | Component | Behavior      |
| ---- | --------- | ------------- |
| '/'  | Home      | Show homepage |

## Components

### about

- About
- Caroussel
- CarousselEelement
- DirectorCard
- DirectorCollection
- ThumbnailCard
- ThumbnailCardCollection
- TileCollection
- TileHeadline
- TileKeyData
- TitleKeyDataDouble

### contact

- Contact
- ThumbnailCard
- ThumbnailCardCollection

### helpers

- ArrowLeft
- ArrowLeftSolid
- ArrowRigh
- ArrowRighSolid

### news

- News
- ThumbnailCard
- ThumbnailCardCollection

### works

- Caroussel
- CarousselElement
- Works

FooterBar

## Pages

- Home

## Style

- tailwindCSS

## Custom hooks

- useCardsDataAbout()
- useCardsDataContact()
- useCardsDataDirectors()
- useCardsDataNews()
- useTilesKeyData()
