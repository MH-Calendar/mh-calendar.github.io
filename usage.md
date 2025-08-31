# Usage

After successfully installing MHCalendar, you can import and render it in your application. The component's behavior and appearance are primarily controlled through a single `config` prop.

This approach keeps the component's API clean and makes managing its state straightforward.

## Basic Usage

Here is a basic example of how to render the calendar in a React application.

```jsx
import React from 'react';
import { MhCalendar } from 'mh-calendar-react';

// 1. Define your configuration object
const calendarConfig = {
  view: 'week', // Set the initial view to 'week'
};

function MyCalendarPage() {
  // 2. Pass the config object to the component
  return (
    <div style={{ height: '80vh' }}>
      <MhCalendar config={calendarConfig} />
    </div>
  );
}

export default MyCalendarPage;
```

## The `config` Object

The `config` prop is the primary way to interact with and customize MHCalendar. It accepts an object containing various properties that control everything from the initial view and displayed events to styling and user interactions.

Below is a detailed list of all available properties for the `config` object.

### General Configuration

| Property         | Type                           | Description                                                                                                                                                                                                                                              | Default        |
| ---------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `viewType`       | `'DAY'`, `'WEEK'`, `'MONTH'`   | Sets the initial view of the calendar.                                                                                                                                                                                                                   | `'WEEK'`       |
| `startDate`      | `Date` \| `string`             | The reference date for the calendar to display. For `week` view, it can be any day within that week. Defaults to the current date.                                                                                                                          | `new Date()`   |
| `fixedHeight`    | `string`                       | Sets a fixed height for the calendar view, useful for virtual scrolling (e.g., `'80vh'`, `'600px'`).                                                                                                                                                         | `undefined`    |
| `virtualScrollHeight` | `string`                  | A custom height adjustment for the virtual scroller.                                                                                                                                                                                                     | `undefined`    |

### Navigation & UI

| Property                 | Type      | Description                                                                                             | Default |
| ------------------------ | --------- | ------------------------------------------------------------------------------------------------------- | ------- |
| `showCalendarNavigation` | `boolean` | If `false`, the entire top navigation bar (date and view switchers) is hidden.                          | `true`  |
| `showDateSwitcher`       | `boolean` | If `false`, hides the arrows and date display used to navigate between weeks/months.                      | `true`  |
| `showViewTypeSwitcher`   | `boolean` | If `false`, hides the buttons for switching between Day, Week, and Month views.                         | `true`  |
| `showViewHeader`         | `boolean` | If `false`, hides the header row that displays the days of the week (e.g., "Mon 27", "Tue 28").           | `true`  |

### Interactivity & Callbacks

| Property             | Type                             | Description                                                                 | Default     |
| -------------------- | -------------------------------- | --------------------------------------------------------------------------- | ----------- |
| `allowEventDragging` | `boolean`                        | If `false`, all events become read-only and cannot be dragged or resized.   | `true`      |
| `onEventClick`       | `(event: Event) => void`         | Callback function executed when a user clicks on an event.                  | `undefined` |
| `onRightEventClick`  | `(event: Event) => void`         | Callback function executed when a user right-clicks on an event.            | `undefined` |
| `onDayClick`         | `(day: Date) => void`            | Callback function executed when a user clicks on a day cell.                | `undefined` |
| `onRightDayClick`    | `(day: Date) => void`            | Callback function executed when a user right-clicks on a day cell.          | `undefined` |

### Custom Rendering

| Property       | Type                        | Description                                                                | Default     |
| -------------- | --------------------------- | -------------------------------------------------------------------------- | ----------- |
| `eventContent` | `(event: Event) => any`     | A function that returns custom content (e.g., JSX) to render inside an event. | `undefined` |

### Day & Week View Options

These options apply to views that have a time grid, such as `DAY` and `WEEK`.

| Property            | Type                             | Description                                                                                               | Default     |
| ------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------- |
| `showTimeFrom`      | `number`                         | The hour (0-23) at which the time grid should start. For example, `8` will start the view at 8:00 AM.       | `10`         |
| `showTimeTo`        | `number`                         | The hour (0-24) at which the time grid should end. For example, `20` will end the view at 8:00 PM.        | `24`        |
| `slotInterval`      | `{ hours: number, minutes: number }` | The time duration for each slot in the calendar grid.                                                     | `undefined` |
| `hoursSlotInterval` | `{ hours: number, minutes: number }` | The interval for displaying hour labels on the time axis.                                                 | `undefined` |
| `hoursDisplayFormat`| `string`                         | The format for hour labels, using date-fns tokens (e.g., `'h a'`, `'HH:mm'`).                             | `'h a'`     |
| `showAllDayTasks`    | `boolean` | If `true`, displays a dedicated row at the top of the week view for all-day events.                                                                                      | `true`      |
| `allDayEventsHeight` | `number`  | The height in pixels for the all-day event section.                                                                                                                      | `100`       |
| `makeAllDaysSticky`  | `boolean` | If `true`, the all-day event section will remain visible ("sticky") when scrolling the time grid vertically.                                                             | `false`     |
| `customWeekView`     | `boolean` | **(Not Implemented)** If `true`, the week view will start on the specific day of the week provided in `startDate`.                                                         | `false`     |
| `showWeekends`       | `boolean` | **(Not Implemented)** If `false`, Saturday and Sunday columns will be hidden from the week view.                                                                           | `true`      |

### Styling

| Property | Type     | Description                                                                                                                             | Default |
| -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `style`  | `object` | A CSS-in-JS object used to override the default styles of calendar elements. See the dedicated **Styling** section for all available keys. | `{}`    |

