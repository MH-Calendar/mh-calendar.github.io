# Event Object Structure

The `events` array you pass to the calendar is composed of event objects. Each object represents a single item to be displayed on the calendar.

The event object is designed to be highly flexible. Only `id`, `startDate`, and `endDate` are required. All other predefined properties are optional, and you are free to add any custom data your application needs.

### Basic Structure

Here is an example of a valid event object:

```javascript
const myEvent = {
  // --- Required properties ---
  id: 'event-001',
  startDate: new Date('2024-05-21T09:00:00'),
  endDate: new Date('2024-05-21T10:30:00'),

  // --- Optional predefined properties ---
  title: 'Project Stand-up',
  description: 'Daily team sync meeting.',
  allDay: false,

  // --- Your custom data ---
  projectId: 123,
  status: 'confirmed',
  attendees: ['Alice', 'Bob']
};
```

### Property Details

| Property         | Type      | Required? | Description                                                                                                                              |
| ---------------- | --------- | :-------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | `string`  |    **Yes**    | A unique identifier for the event. This is crucial for event manipulation and updates.                                                   |
| `startDate`      | `Date`    |    **Yes**    | The `Date` object representing the start date and time of the event.                                                                     |
| `endDate`        | `Date`    |    **Yes**    | The `Date` object representing the end date and time of the event.                                                                       |
| `title`          | `string`  |    No     | The text displayed within the event's visual representation on the calendar.                                                             |
| `allDay`         | `boolean` |    No     | If `true`, the event will be displayed in the "all-day" section at the top of the 'week' or 'day' view. Time information will be ignored. |
| `description`    | `string`  |    No     | A longer description or additional details for the event. Not displayed by default, but available in callbacks and the edit modal.                            |
| `isHidden`       | `boolean` |    No     | If `true`, the event will be hidden from the calendar view.                                                                              |
| `draggingToggle` | `boolean` |    No     | Overrides the global `allowEventDragging` setting. Set to `false` to prevent this specific event from being dragged.                   |

:::info Custom Properties
You can add any custom properties to event objects. These properties are preserved and accessible in all callbacks (`onEventClick`, `onEventUpdated`, etc.), allowing you to store additional data like `categoryId`, `userId`, `color`, or any other information your application needs.
:::

:::tip Adding Custom Data
You can attach any additional properties to the event object that your application requires (e.g., `categoryId`, `ownerId`, `color`). This data is preserved and will be available in all event-related callbacks like `onEventClick`, allowing you to build rich, interactive features.
:::

## Complete Example

Here is a more complete example demonstrating how to pass events and custom styles.

```jsx
import React from 'react';
import { MhCalendar } from 'mh-calendar-react';

// Sample events data
const myEvents = [
  {
    id: 1,
    title: 'Team Meeting',
    startDate: new Date('2024-05-21T09:00:00'),
    endDate: new Date('2024-05-21T10:30:00'),
  },
  {
    id: 2,
    title: 'Project Deadline',
    startDate: new Date('2024-07-21T09:00:00'),
    endDate: new Date('2024-07-21T10:30:00'),
  }
];


function App() {
  return (
    <div style={{ height: '80vh' }}>
      <MhCalendar events={myEvents} />
    </div>
  );
}

export default App;
```
```