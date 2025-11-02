# MHCalendar Documentation

Complete documentation for the MHCalendar component library.

## Documentation Structure

- **Introduction** - Overview and core features
- **Installation** - Setup instructions for React and Web Components
- **Usage** - Complete configuration reference and examples
- **Events** - Event object structure and properties
- **Event Management** - Creating, editing, and managing events
- **API Examples** - Programmatic control and API reference

## Recent Updates

### Event Management (Latest)

- **Click-to-Create Events**: Enable `createEventOnClick: true` to allow users to create events by clicking on empty time slots
- **Event Edit Modal**: Click any event to open a comprehensive edit modal
- **Automatic State Management**: Events are automatically added/updated in the calendar's internal state (`reactiveEvents`)
- **New Callbacks**: `onEventCreated` and `onEventUpdated` for syncing with external systems

### Business Hours & Restrictions

- **Business Hours Configuration**: Define working hours per day of week or specific dates
- **Block Non-Business Hours**: Use `blockBusinessHours: true` to prevent dragging events outside business hours
- **Visual Feedback**: Non-business hours are grayed out, and blocked drag operations show clear visual indicators

### View Customization

- **Hide Days**: Use `hiddenDays` array to hide specific days (e.g., weekends) in WEEK/DAY views
- **Flexible Day Management**: Supports hiding any combination of days, with automatic grid adjustment

### Global Modal System

- Built-in modal system for event creation and editing
- Consistent UI with system-ui font family
- Keyboard support (Escape to close, Enter to save)
- Automatic positioning relative to trigger element

For detailed information, see the [Event Management](./event-management.md) guide.

