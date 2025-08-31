# Installation

MHCalendar is designed with a modular architecture to provide the best experience for your specific technology stack. The project is divided into a `core` package, which contains the main Web Component logic, and framework-specific wrappers that simplify integration.

Choose the installation method that matches your project's needs.

## React

If you are working with React, we recommend using our dedicated wrapper package, `mh-calendar-react`. It handles all the necessary boilerplate and provides a native React component experience.

**1. Install the package using your preferred package manager:**

**npm**
```bash
npm install mh-calendar-react
```

**Yarn**
```bash
yarn add mh-calendar-react
```

**pnpm**
```bash
pnpm add mh-calendar-react
```

**Bun**
```bash
bun add mh-calendar-react
```

**2. Import and use the component in your application:**

```jsx
import React from 'react';
import { MhCalendar } from 'mh-calendar-react';

function MyCalendarPage() {
  return (
    <div>
      <h1>My Schedule</h1>
      <MhCalendar />
    </div>
  );
}

export default MyCalendarPage;
```

## Web Components 

For use in plain JavaScript projects or with other frameworks like Vue, Angular, or Svelte (before a dedicated wrapper is available), you can use the core Web Component package directly.

**1. Install the core package:**

**npm**
```bash
npm install mh-calendar-core
```

**Yarn**
```bash
yarn add mh-calendar-core
```

**pnpm**
```bash
pnpm add mh-calendar-core
```

**Bun**
```bash
bun add mh-calendar-core
```

**2. Initialize the component loader:**

In your application's main entry point (e.g., `main.js`, `main.ts`), you need to import and call the loader. This function defines the `<mh-calendar>` custom element so the browser knows how to render it.

```javascript
// src/main.ts (or your main entry file)
import { defineCustomElements } from "mh-calendar-core/loader";

// This registers the <mh-calendar> element with the browser.
defineCustomElements();
```

**3. Use the component in your HTML:**

Once the loader has been called, you can use the `<mh-calendar>` tag anywhere in your HTML.

```html
<!DOCTYPE html>
<html lang="en">
<body>
  <h1>My Calendar</h1>
  <mh-calendar></mh-calendar>
</body>
</html>
```

## Angular

:::info
The dedicated wrapper for Angular is currently under development. Stay tuned!
In the meantime, you can use the [Web Components](#web-components) package.
:::

## Svelte

:::info
The dedicated wrapper for Svelte is currently under development. Stay tuned!
In the meantime, you can use the [Web Components](#web-components) package.
:::

## Vue

:::info
The dedicated wrapper for Vue is currently under development. Stay tuned!
In the meantime, you can use the [Web Components](#web-components) package.
:::
```