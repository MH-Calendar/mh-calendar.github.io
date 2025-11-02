# Event Management

MHCalendar provides powerful features for creating, editing, and managing events directly in the calendar interface. This guide covers all event-related functionality.

## Creating Events

### Click-to-Create Events

You can enable automatic event creation when users click on empty time slots or days. When enabled, clicking will open a modal for quick event creation.

#### Configuration

```jsx
const config = {
  viewType: 'WEEK',
  // Enable click-to-create events
  createEventOnClick: true,
  
  // Handle the created event
  onEventCreated: (newEvent) => {
    console.log('New event created:', newEvent);
    // Event is automatically added to calendar's reactiveEvents
    // You can sync with your backend or state management
    saveEventToBackend(newEvent);
  },
};
```

#### Behavior

- **In WEEK/DAY view**: Clicking a time slot creates an event starting at that hour (rounded down) with a 1-hour duration.
  - Example: Click at 15:30 → Creates event from 15:00 to 16:00

- **In MONTH view**: Clicking a day creates an all-day event for that day.

#### Event Creation Modal

When `createEventOnClick` is enabled and you click on an empty slot, a modal automatically opens with:
- Title field (pre-filled with "New Event")
- Description field (optional)
- Start date/time picker
- End date/time picker
- All-day checkbox
- Save and Cancel buttons

The event is automatically added to the calendar's internal state (`reactiveEvents`) when saved. You only need to handle syncing with your backend or state management in the `onEventCreated` callback.

## Editing Events

### Click-to-Edit Events

Clicking on an existing event opens an edit modal with all event details.

#### Configuration

```jsx
const config = {
  viewType: 'WEEK',
  
  // Handle updated events
  onEventUpdated: (updatedEvent) => {
    console.log('Event updated:', updatedEvent);
    // Event is automatically updated in calendar's reactiveEvents
    // Sync with your backend
    updateEventInBackend(updatedEvent);
  },
};
```

#### Event Edit Modal

The edit modal includes:
- All event fields (title, description, dates, all-day flag)
- Pre-filled with current event values
- Save and Cancel buttons

Changes are automatically reflected in the calendar when saved. Use `onEventUpdated` callback to sync with your data source.

## Complete Example

Here's a complete example combining event creation and editing:

```jsx
import React, { useState } from 'react';
import { MhCalendar } from 'mh-calendar-react';

function CalendarApp() {
  const [events, setEvents] = useState([]);

  const handleEventCreated = (newEvent) => {
    // Event is already in the calendar
    // Sync with your state (optional, for consistency)
    setEvents(prev => [...prev, newEvent]);
    
    // Sync with backend
    fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify(newEvent),
    });
  };

  const handleEventUpdated = (updatedEvent) => {
    // Event is already updated in the calendar
    // Sync with your state
    setEvents(prev =>
      prev.map(e => e.id === updatedEvent.id ? updatedEvent : e)
    );
    
    // Sync with backend
    fetch(`/api/events/${updatedEvent.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedEvent),
    });
  };

  return (
    <MhCalendar
      config={{
        viewType: 'WEEK',
        createEventOnClick: true,
        onEventCreated: handleEventCreated,
        onEventUpdated: handleEventUpdated,
      }}
      events={events}
    />
  );
}
```

## Event Callbacks

### onEventCreated

Called when a new event is created via the modal.

**Important**: The event is automatically added to the calendar's `reactiveEvents`. This callback is for syncing with external systems (backend, state management).

```typescript
onEventCreated?: (event: MHCalendarEvents) => void;
```

### onEventUpdated

Called when an existing event is updated via the modal.

**Important**: The event is automatically updated in the calendar's `reactiveEvents`. This callback is for syncing with external systems.

```typescript
onEventUpdated?: (event: MHCalendarEvents) => void;
```

## Global Modal System

MHCalendar includes a global modal system that can be used throughout the calendar. The event creation and editing modals use this system internally.

### Opening Modals Programmatically

You can access the modal API through the calendar store:

```javascript
import { useCalendarApi } from 'mh-calendar-react';

function MyComponent() {
  const calendarRef = useRef(null);
  const api = useCalendarApi(calendarRef);

  const openCustomModal = () => {
    // Modal API is accessible through the store
    // This is typically used internally, but can be accessed for advanced use cases
  };
}
```

For most use cases, the built-in event modals should be sufficient. The modal system is primarily designed for internal use.

