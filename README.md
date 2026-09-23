# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX) from Frontend Mentor.

## Overview

### The challenge

Users should be able to:

- View a responsive layout on mobile and desktop displays
- See hover states for interactive elements
- Calculate the tip and total cost per person
- Enter a custom tip percentage
- Reset the calculator

### Screenshot

The reference designs are available in the [`design`](design) folder.

### Links

- Solution URL: [Live Repository](https://github.com/L3viath4n-365/tip-calculator-app-main)
- Live Site URL: [Live Site](https://tip-calculator-app-main.onrender.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Express
- EJS templates
- Responsive flexbox and CSS grid layouts
- Mobile-first workflow

### What I learned

This project helped me practise keeping form values available after a server-side render, validating numeric input, and handling both preset and custom tip percentages.

The calculation uses these formulas:

```text
tip per person = (bill x tip percentage) / number of people
total per person = (bill + bill x tip percentage) / number of people
```

### Continued development

- Add more detailed inline validation for each input
- Add automated tests for the calculation route
- Deploy the application and add the live URL above

### Useful resources

- [MDN - HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) - Input types and validation attributes
- [MDN - Express routing](https://expressjs.com/en/guide/routing.html) - Handling form submissions on the server
- [Tailwind CSS documentation](https://tailwindcss.com/docs) - Responsive utility classes

### AI Collaboration

GitHub Copilot was used to review the existing form and route, identify the responsive layout issues, test the calculator behavior, and help update the project documentation.

## Author

- Frontend Mentor: [L3viath4n](https://www.frontendmentor.io/profile/L3viath4n-365)

## Acknowledgments

Thanks to Frontend Mentor for providing the design challenge and reference assets.
