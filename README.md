# Glory Emmanuel: Student Portfolio

A personal portfolio website built for **COS106** at **Miva Open University**. It introduces me, shows my background and skills, and includes three beginner projects: a calculator, a student registration form and an academic task planner.

- **Live website:** https://glowry401.github.io/
- **GitHub repository:** https://github.com/Glowry401/Glowry401.github.io

## Pages

| Page | File | What it does |
|---|---|---|
| Home | `index.html` | Introduction, learning profile table and a voice introduction |
| About Me | `about.html` | Background, education, career aspirations, skills and hobbies |
| Projects | `projects.html` | Cards for the three projects, with links to each one |
| Calculator | `calculator.html` | Adds, subtracts, multiplies and divides two numbers |
| Registration | `registration.html` | Student registration form with validation |
| Academic Planner | `planner.html` | Add, complete and delete study tasks |
| Contact | `contact.html` | Contact details and a validated contact form |

## JavaScript features

- **Responsive navigation (`main.js`):** a menu button opens and closes the navigation on small screens.
- **Current year (`main.js`):** the footer year updates automatically.
- **Academic planner (`planner.js`):** tasks can be added, ticked off and deleted. They are saved in the browser with `localStorage`, so they are still there after a refresh.
- **Contact form validation (`contact.js`):** checks the name, email address, phone number and message, and shows an error under each invalid field.
- **Registration form validation (`registration.js`):** checks seven fields, including two dropdowns and a confirmation checkbox.
- **Calculator (script inside `calculator.html`):** converts the input to numbers, handles empty boxes and division by zero, and rounds small decimal errors.

## Multimedia

The home page has a short **voice introduction** with play, pause and volume controls, and a text transcript.

## Technologies used

- HTML5 (semantic elements, forms, tables, audio)
- CSS3 (custom properties, grid, flexbox, media queries)
- JavaScript (no libraries)
- Google Fonts (DM Sans and Manrope)
- GitHub Pages for hosting

## Project structure

```
Glowry401.github.io/
├── index.html
├── about.html
├── projects.html
├── calculator.html
├── registration.html
├── planner.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── planner.js
│   ├── contact.js
│   └── registration.js
├── images/
└── audio/
```

## Run it locally

1. Download or clone this repository.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or right-click it and choose **Open with Live Server**.

## Limitations

- The contact and registration forms only validate in the browser. They do not send or store any data.
- The planner saves tasks in the current browser only, and is not an online account.
- Google Fonts need an internet connection.

## Author

**Glory Emmanuel**, student at Miva Open University.
