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
| `onEventCreated`     | `(event: Event) => void`         | Callback function executed when a new event is created via the modal. The event is automatically added to the calendar. | `undefined` |
| `onEventUpdated`     | `(event: Event) => void`         | Callback function executed when an event is updated via the modal. The event is automatically updated in the calendar. | `undefined` |

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
| `hiddenDays`         | `number[]` | Array of day numbers (0-6) to hide in WEEK/DAY views. `0` = Sunday, `1` = Monday, ..., `6` = Saturday. Example: `[0, 6]` hides weekends. | `undefined` |
| `blockBusinessHours` | `boolean` | If `true`, prevents dragging events into non-business hours areas. Events can only be dropped within business hours. | `false`     |
| `createEventOnClick` | `boolean` | If `true`, creates a new event when user clicks on a day/hour. Opens a modal for event details. | `false`     |
| `minEventDuration`   | `number`  | Minimum duration of an event in minutes. Used for resize validation.                                       | `15`        |
| `allowEventResize`   | `boolean` | If `true`, allows users to resize events by dragging the bottom edge.                                        | `false`     |
| `businessHours`      | `BusinessHoursConfig[]` | Array of business hours configurations. See [Business Hours](#business-hours) section below. | `undefined` |

### Styling

| Property | Type     | Description                                                                                                                             | Default |
| -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `style`  | `object` | A CSS-in-JS object used to override the default styles of calendar elements. See the dedicated **Styling** section for all available keys. | `{}`    |

## Business Hours

The `businessHours` configuration allows you to define working hours for different days of the week or specific dates. Hours outside business hours will be visually distinguished (grayed out), and you can optionally prevent dragging events into non-business hours.

### Configuration Format

```typescript
type BusinessHoursConfig = 
  | { dayOfWeek: number | number[]; start: number; end: number }
  | { date: Date; start: number; end: number };
```

### Examples

#### Basic Business Hours

```jsx
const config = {
  viewType: 'WEEK',
  businessHours: [
    // Monday to Friday: 9 AM to 5 PM
    { dayOfWeek: [1, 2, 3, 4, 5], start: 9, end: 17 },
    // Weekend: 10 AM to 2 PM
    { dayOfWeek: [0, 6], start: 10, end: 14 },
  ],
};
```

#### Specific Date Override

You can override business hours for specific dates (e.g., holidays):

```jsx
const config = {
  viewType: 'WEEK',
  businessHours: [
    // Regular weekdays
    { dayOfWeek: [1, 2, 3, 4, 5], start: 9, end: 17 },
    // Special hours for November 1st
    { date: new Date('2025-11-01'), start: 8, end: 12 },
    // Christmas - closed
    { date: new Date('2025-12-25'), start: 0, end: 0 },
  ],
};
```

#### Blocking Non-Business Hours

To prevent users from dragging events into non-business hours:

```jsx
const config = {
  viewType: 'WEEK',
  businessHours: [
    { dayOfWeek: [1, 2, 3, 4, 5], start: 9, end: 17 },
  ],
  blockBusinessHours: true, // Prevents dragging events outside business hours
};
```

When `blockBusinessHours` is `true`:
- Dragging an event to a non-business hour shows visual feedback (dashed border, opacity)
- The event cannot be dropped outside business hours
- Events can only be moved/resized within allowed business hours

### Day of Week Reference

- `0` = Sunday
- `1` = Monday
- `2` = Tuesday
- `3` = Wednesday
- `4` = Thursday
- `5` = Friday
- `6` = Saturday

## Hiding Days in Multi-View

The `hiddenDays` option allows you to hide specific days of the week in WEEK and DAY views. This is useful for calendars that don't need weekends or specific weekdays.

### Configuration

```jsx
const config = {
  viewType: 'WEEK',
  // Hide weekends (Sunday and Saturday)
  hiddenDays: [0, 6],
  
  // Or using alternative notation
  hiddenDays: [6, 7], // 7 is treated as 0 (Sunday)
};
```

### Examples

```jsx
// Hide weekends
hiddenDays: [0, 6]

// Hide Wednesday
hiddenDays: [3]

// Hide Sunday, Monday, and Friday
hiddenDays: [0, 1, 5]
```

**Note**: This only affects WEEK and DAY views. MONTH view always shows all 7 days of the week.

