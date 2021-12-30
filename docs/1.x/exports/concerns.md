---
pageClass: no-toc
---

# Export concerns

| Interface | Explanation | Documentation |
|---- |----|----|
|`Nikazooz\Simplesheet\Concerns\FromArray`| Use an array to populate the export. | |
|`Nikazooz\Simplesheet\Concerns\FromCollection`| Use a Laravel Collection to populate the export. | [Exporting collections](/1.0/exports/collection.html) |
|`Nikazooz\Simplesheet\Concerns\FromIterator`| Use an iterator to populate the export. | |
|`Nikazooz\Simplesheet\Concerns\FromQuery`| Use an Eloquent query to populate the export. | [From Query](/1.0/exports/from-query.html) |
|`Nikazooz\Simplesheet\Concerns\WithTitle`| Set the Workbook or Worksheet title. | [Multiple Sheets](/1.0/exports/multiple-sheets.html) |
|`Nikazooz\Simplesheet\Concerns\WithHeadings`| Prepend a heading row. | [Adding a heading row](/1.0/exports/mapping.html#adding-a-heading-row) |
|`Nikazooz\Simplesheet\Concerns\WithMapping`| Format the row before it's written to the file. | [Mapping data](/1.0/exports/mapping.html) |
|`Nikazooz\Simplesheet\Concerns\WithMultipleSheets`| Enable multi-sheet support. Each sheet can have its own concerns (except this one). | [Multiple Sheets](/1.0/exports/multiple-sheets.html) |
|`Nikazooz\Simplesheet\Concerns\WithEvents`| Register events to hook into the Box Spout process. | [Events](/1.0/exports/extending.html#events) |
|`Nikazooz\Simplesheet\Concerns\WithCustomCsvSettings`| Allows to run custom Csv settings for this specific exportable. | [Custom CSV Settings](/1.0/imports/custom-csv-settings.html) |

### Traits

| Trait | Explanation | Documentation |
|---- |----|----|
|`Nikazooz\Simplesheet\Concerns\Exportable` | Add download/store abilities right on the export class itself. | [Exportables](/1.0/exports/exportables.html) |
|`Nikazooz\Simplesheet\Concerns\RegistersEventListeners` | Auto-register the available event listeners. | [Auto register event listeners](/1.0/exports/extending.html#auto-register-event-listeners) |
