# 🚀 JavaScript Mastery & Reference Guide

A meticulously organized, modular, and 100% runnable JavaScript curriculum and reference repository. Every single concept is isolated in its own dedicated file with crystal-clear explanations, real-world examples, and zero commented-out code blocks.

---

## 📑 Table of Contents

- [Quick Start: How to Run](#-quick-start-how-to-run)
- [Interactive Visual Dashboard](#-interactive-visual-dashboard)
- [Curriculum Breakdown](#-curriculum-breakdown)
  - [01. Core Fundamentals](#01-core-fundamentals)
  - [02. Functions & Scope](#02-functions--scope)
  - [03. Arrays & Data Structures](#03-arrays--data-structures)
  - [04. Objects & OOP](#04-objects--oop)
  - [05. Asynchronous JavaScript](#05-asynchronous-javascript)
  - [06. DOM Manipulation](#06-dom-manipulation)
  - [07. DOM Events & Interactivity](#07-dom-events--interactivity)
  - [08. DOM Lists & ClassList](#08-dom-lists--classlist)
  - [09. Modern ES6 Modules](#09-modern-es6-modules)
  - [10. JSON & REST APIs](#10-json--rest-apis)
  - [11. Node.js Fundamentals](#11-nodejs-fundamentals)

---

## ⚡ Quick Start: How to Run

### 1. Running Core / Backend JavaScript Files (Terminal)
You can execute any concept file directly with Node.js:

```bash
# Core Fundamentals
node js_basics/01_core_fundamentals/01_variables_and_datatypes.js
node js_basics/01_core_fundamentals/02_operators_and_math.js

# Functions & Closures
node js_basics/02_functions_and_scope/04_closures.js

# Array Methods & Sorting
node js_basics/03_arrays_and_data_structures/03_array_methods_map_filter_reduce.js
node js_basics/03_arrays_and_data_structures/04_sorting_and_algorithms.js

# OOP, Classes & Inheritance
node js_basics/04_objects_and_oop/03_classes_and_static.js
node js_basics/04_objects_and_oop/04_inheritance_and_super.js

# Asynchronous JS (Promises & Async/Await)
node js_basics/05_asynchronous_javascript/03_promises.js
node js_basics/05_asynchronous_javascript/04_async_await.js

# Node.js File System
node js_basics/11_nodejs_fundamentals/file_system.js
```

### 2. Running DOM & Browser Applications
Each DOM topic comes with its own standalone interactive HTML application featuring modern UI styling, responsive controls, and live output logs:
- Double click any `index.html` file or open it with VS Code's **Live Server** extension.

---

## 🖥️ Interactive Visual Dashboard

Open [`js_basics/index.html`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/index.html) in your browser!  
It provides a state-of-the-art interactive dashboard with:
- Instant search filter across all topics
- Direct one-click launcher for all 10 browser sandboxes
- Terminal execution cheatsheets

---

## 📚 Curriculum Breakdown

### 01. Core Fundamentals
Located in: [`js_basics/01_core_fundamentals/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/01_core_fundamentals)
- [`01_variables_and_datatypes.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/01_core_fundamentals/01_variables_and_datatypes.js): `let` vs `const` vs `var`, primitives, reference types, type conversion vs coercion.
- [`02_operators_and_math.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/01_core_fundamentals/02_operators_and_math.js): Precedence, `==` vs `===`, full `Math` object methods, random integer generator.
- [`03_strings_and_methods.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/01_core_fundamentals/03_strings_and_methods.js): Template literals, slicing, padding, searching (`includes`, `indexOf`, `startsWith`).
- [`04_conditionals_and_logic.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/01_core_fundamentals/04_conditionals_and_logic.js): Truthy/falsy values, ternary operator, nullish coalescing `??` vs `||`, switch fallthrough.
- [`05_loops_and_iteration.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/01_core_fundamentals/05_loops_and_iteration.js): `for`, `while`, `do...while`, `for...of` (values), `for...in` (keys), `break`, `continue`.

---

### 02. Functions & Scope
Located in: [`js_basics/02_functions_and_scope/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/02_functions_and_scope)
- [`01_function_basics.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/02_functions_and_scope/01_function_basics.js): Declarations vs expressions, default parameters, rest parameters `...args`.
- [`02_arrow_functions.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/02_functions_and_scope/02_arrow_functions.js): Implicit returns, parameter rules, lexical `this` behavior.
- [`03_callbacks.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/02_functions_and_scope/03_callbacks.js): Higher-order functions, synchronous execution, async simulation.
- [`04_closures.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/02_functions_and_scope/04_closures.js): Lexical scoping, private variables, counters, score tracker factory.

---

### 03. Arrays & Data Structures
Located in: [`js_basics/03_arrays_and_data_structures/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/03_arrays_and_data_structures)
- [`01_array_basics.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/03_arrays_and_data_structures/01_array_basics.js): `push`, `pop`, `shift`, `unshift`, non-mutating `slice` vs mutating `splice`.
- [`02_spread_and_rest.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/03_arrays_and_data_structures/02_spread_and_rest.js): Array merging, cloning without mutations, object spread, string spread.
- [`03_array_methods_map_filter_reduce.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/03_arrays_and_data_structures/03_array_methods_map_filter_reduce.js): `forEach`, `map`, `filter`, `reduce`, method chaining pipelines.
- [`04_sorting_and_algorithms.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/03_arrays_and_data_structures/04_sorting_and_algorithms.js): Numerical comparator `(a, b) => a - b`, `localeCompare`, Fisher-Yates shuffle algorithm.
- [`05_destructuring.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/03_arrays_and_data_structures/05_destructuring.js): Array destructuring, variable swapping, object property renaming & defaults.

---

### 04. Objects & OOP
Located in: [`js_basics/04_objects_and_oop/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/04_objects_and_oop)
- [`01_object_literals.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/04_objects_and_oop/01_object_literals.js): Dynamic bracket keys, `this` context, `Object.keys/values/entries`.
- [`02_constructor_functions.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/04_objects_and_oop/02_constructor_functions.js): The `new` keyword, prototype method sharing.
- [`03_classes_and_static.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/04_objects_and_oop/03_classes_and_static.js): ES6 `class`, instance methods, static properties (`User.userCount`), static utilities (`MathUtil`).
- [`04_inheritance_and_super.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/04_objects_and_oop/04_inheritance_and_super.js): `extends`, calling `super()`, method overriding, polymorphism.
- [`05_getters_and_setters.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/04_objects_and_oop/05_getters_and_setters.js): Data validation in setters, computed getters (`radius`, `circumference`, `fullName`).
- [`06_nested_objects_and_arrays.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/04_objects_and_oop/06_nested_objects_and_arrays.js): Deep structures, optional chaining `?.`, querying arrays of objects.

---

### 05. Asynchronous JavaScript
Located in: [`js_basics/05_asynchronous_javascript/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/05_asynchronous_javascript)
- [`01_timers.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/05_asynchronous_javascript/01_timers.js): Event loop, call stack, `setTimeout`, `clearTimeout`, `setInterval`, `clearInterval`.
- [`02_callback_hell.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/05_asynchronous_javascript/02_callback_hell.js): The pyramid of doom problem and why Promises were created.
- [`03_promises.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/05_asynchronous_javascript/03_promises.js): States (pending, fulfilled, rejected), chaining `.then().catch().finally()`, `Promise.all`.
- [`04_async_await.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/05_asynchronous_javascript/04_async_await.js): Sequential async workflows, error handling with `try...catch`, parallel `await`.
- [`05_error_handling.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/05_asynchronous_javascript/05_error_handling.js): `try`, `catch`, `finally`, throwing custom `Error`, `TypeError`, `RangeError`.

---

### 06. DOM Manipulation
Located in: [`js_basics/06_dom_manipulation/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/06_dom_manipulation)
- [`01_selectors/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/06_dom_manipulation/01_selectors/index.html): Interactive playground for `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, `querySelectorAll`.
- [`02_element_crud/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/06_dom_manipulation/02_element_crud/index.html): `createElement`, `append()`, `prepend()`, `insertBefore()`, `remove()`.
- [`03_dom_navigation/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/06_dom_manipulation/03_dom_navigation/index.html): Tree traversal using `firstElementChild`, `lastElementChild`, `nextElementSibling`, `previousElementSibling`, `parentElement`, `children`.

---

### 07. DOM Events & Interactivity
Located in: [`js_basics/07_dom_events/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/07_dom_events)
- [`01_mouse_events/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/07_dom_events/01_mouse_events/index.html): Real-time interactive card reacting to `click`, `mouseover`, `mouseout`, `mousedown`, `mouseup`.
- [`02_keyboard_events/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/07_dom_events/02_keyboard_events/index.html): Player movement in a bounded arena using Arrow keys and WASD.
- [`03_toggle_visibility/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/07_dom_events/03_toggle_visibility/index.html): Toggle `visibility: hidden` (space preserved) vs `display: none` (collapsed) vs `opacity: 0` (faded).

---

### 08. DOM Lists & ClassList
Located in: [`js_basics/08_dom_lists_and_classes/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/08_dom_lists_and_classes)
- [`01_class_list/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/08_dom_lists_and_classes/01_class_list/index.html): Managing CSS classes via `classList.add()`, `remove()`, `toggle()`, `replace()`, and `contains()`.
- [`02_node_list/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/08_dom_lists_and_classes/02_node_list/index.html): Static NodeList vs live DOM mutations, iteration via `forEach()`, and dynamic item deletion.

---

### 09. Modern ES6 Modules
Located in: [`js_basics/09_es6_modules/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/09_es6_modules/index.html)
- Interactive geometry calculator using ES6 `export` in [`math_utils.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/09_es6_modules/math_utils.js) and `import` in [`main.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/09_es6_modules/main.js).

---

### 10. JSON & REST APIs
Located in: [`js_basics/10_json_and_fetch_api/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/10_json_and_fetch_api)
- [`01_json_methods.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/10_json_and_fetch_api/01_json_methods.js): `JSON.stringify()` (with replacers and indentation), `JSON.parse()`, deep cloning comparison.
- [`02_local_fetch/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/10_json_and_fetch_api/02_local_fetch/index.html): Asynchronous `fetch()` loading `names.json`, `person.json`, and `people.json`.
- [`03_pokemon_api_fetch/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/10_json_and_fetch_api/03_pokemon_api_fetch/index.html): Live PokéAPI REST client with search input, quick picks, sprites, and stats.

---

### 11. Node.js Fundamentals
Located in: [`js_basics/11_nodejs_fundamentals/`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/11_nodejs_fundamentals)
- [`file_system.js`](file:///c:/Users/Abinanthan/Desktop/Javascript/js_basics/11_nodejs_fundamentals/file_system.js): Modern `fs.promises` (`writeFile`, `appendFile`, `readFile`, `unlink`) with `async/await`.
