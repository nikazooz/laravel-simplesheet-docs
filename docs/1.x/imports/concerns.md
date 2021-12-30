---
pageClass: no-toc
---

# Import concerns

| Interface | Explanation | Documentation |
|---- |----|----|
|`Nikazooz\Simplesheet\Concerns\ToCollection`| Import to a collection. | [Importing to collections](/1.0/imports/collection.html) |
|`Nikazooz\Simplesheet\Concerns\ToArray`| Import to an array. | |
|`Nikazooz\Simplesheet\Concerns\ToModel`| Import each row to a model. | [Importing to models](/1.0/imports/model.html) |
|`Nikazooz\Simplesheet\Concerns\OnEachRow`| Handle each row manually. | |
|`Nikazooz\Simplesheet\Concerns\WithBatchInserts`| Insert models in batches. | [Batch inserts](/1.0/imports/batch-inserts.html) |
|`Nikazooz\Simplesheet\Concerns\WithHeadingRow`| Define a row as heading row. | [Heading row](/1.0/imports/heading-row.html) |
|`Nikazooz\Simplesheet\Concerns\WithLimit`| Define a limit of the amount of rows that need to be imported. |
|`Nikazooz\Simplesheet\Concerns\WithMapping`| Map the row before being called in ToModel/ToCollection. | |
|`Nikazooz\Simplesheet\Concerns\WithMultipleSheets`| Enable multi-sheet support. Each sheet can have its own concerns (except this one). | [Multiple Sheets](/1.0/imports/multiple-sheets.html) |
|`Nikazooz\Simplesheet\Concerns\WithEvents`| Register events to hook into the Box Spout process. | [Events](/1.0/imports/extending.html#events) |
|`Nikazooz\Simplesheet\Concerns\WithCustomCsvSettings`| Allows to run custom Csv settings for this specific importable. | |
|`Nikazooz\Simplesheet\Concerns\WithStartRow`| Define a custom start row. | |
|`Nikazooz\Simplesheet\Concerns\WithValidation`| Validates each row against a set of rules. | [Row Validation](/1.0/imports/validation.html) |
|`Nikazooz\Simplesheet\Concerns\SkipsOnFailure`| Skips on validation errors. | [Row Validation](/1.0/imports/validation.html#skipping-failures) |
|`Nikazooz\Simplesheet\Concerns\SkipsOnError`| Skips on database exceptions. | [Row Validation](/1.0/imports/validation.html#skipping-errors) |


### Traits

| Trait | Explanation | Documentation |
|---- |----|----|
|`Nikazooz\Simplesheet\Concerns\Importable` | Add import/queue abilities right on the import class itself. | [Importables](/1.0/imports/importables.html) |
|`Nikazooz\Simplesheet\Concerns\RegistersEventListeners` | Auto-register the available event listeners. | [Auto register event listeners](/1.0/imports/extending.html#auto-register-event-listeners) |
