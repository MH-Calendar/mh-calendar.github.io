# Calendar API

MHCalendar exposes a powerful API that allows you to programmatically control the calendar and retrieve its current state. This is useful for building custom navigation, integrating with other UI elements, or fetching calendar data on demand.

The way you access the API depends on the technology you are using.

## React

The recommended way to interact with the API in a React application is by using the `useCalendarApi` custom hook. This hook simplifies the process by abstracting away the direct management of the component's `ref`.

1.  **Create a ref** using `useRef` to attach to the `<MhCalendar>` component.
2.  **Call the `useCalendarApi` hook** and pass the ref to it.
3.  The hook will return a stable **API instance** that you can use to call methods.

#### Example: Building Custom Navigation

```jsx
import React, { useRef } from 'react';
import { MhCalendar, useCalendarApi } from 'mh-calendar-react';
import type { UserApi } from 'mh-calendar-react'; // Optional: for TypeScript type safety

function CustomCalendarControls() {
  const calendarRef = useRef<UserApi>(null);
  const api = useCalendarApi(calendarRef);

  return (
    <>
      <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
        <h3>Custom Navigation:</h3>
        <button onClick={() => api?.previousPeriod()}>Previous Period</button>
        <button onClick={() => api?.nextPeriod()}>Next Period</button>
      </div>

      <div style={{ height: '80vh' }}>
        <MhCalendar ref={calendarRef} config={{ viewType: 'WEEK' }} />
      </div>
    </>
  );
}
```

## Web Components

When using MHCalendar as a standard Web Component (e.g., in vanilla JavaScript or other frameworks), you interact with it by calling methods directly on the DOM element.

Before you can call a method, you must ensure the custom element has been defined and rendered by the browser. The standard way to do this is with `customElements.whenDefined()`. The calendar component provides an async method, `getApi()`, which returns the API instance.

#### Example: Vanilla JavaScript

```html
<!-- Add an ID to your component for easy selection -->
<mh-calendar id="my-calendar"></mh-calendar>

<button onclick="goToNext()">Next</button>
<button onclick="goToPrev()">Prev</button>
```

```javascript
// This script can be placed at the end of your <body>

let calendarApi;

// Use an async IIFE to wait for the component and get the API
(async () => {
  // 1. Wait until the <mh-calendar> element is defined
  await customElements.whenDefined('mh-calendar');

  // 2. Get a reference to the DOM element
  const calendarElement = document.querySelector('#my-calendar');

  // 3. Call the getApi() method to retrieve the API instance
  if (calendarElement) {
    calendarApi = await calendarElement.getApi();
    console.log('Calendar API is ready!', calendarApi);
  }
})();

function goToNext() {
  calendarApi?.nextPeriod();
}

function goToPrev() {
  calendarApi?.previousPeriod();
}
```

:::info Learn More
This is the standard pattern for interacting with methods on custom elements built with Stencil. For more details, you can refer to the official [StencilJS documentation on methods](https://stenciljs.com/docs/methods).
:::

## API Reference

The API is divided into readable properties and callable methods.

### Properties

| Property            | Type                                  | Description                                                                                                   |
| ------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `calendarDateRange` | `{ fromDate: Date, toDate: Date }`    | An object containing the start and end dates of the currently visible range.                                |
| `viewType`          | `'DAY'` \| `'WEEK'` \| `'MONTH'`      | The currently active view type.                                                                               |

### Methods

| Method           | Arguments              | Returns             | Description                                                                                             |
| ---------------- | ---------------------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| `nextPeriod()`   | `void`                 | `void`              | Navigates the calendar to the next period (e.g., next week).                                            |
| `previousPeriod()` | `void`                 | `void`              | Navigates the calendar to the previous period.                                                          |
| `getEvents()`    | `void`                 | `Event[]`           | Returns an array of all event objects currently loaded in the calendar.                                 |
| `getEventById()` | `id: string`           | `Event \| undefined`  | Retrieves a single event object by its unique `id`.                                                     |
| `daysInRange()`  | `void`                 | `Date[]`            | Returns an array of `Date` objects for each day currently visible in the view.                          |