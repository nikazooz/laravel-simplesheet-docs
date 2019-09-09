# Testing

[[toc]]

The Excel facade can be used to swap the exporter to a fake.

### Testing downloads

```php
/**
* @test
*/
public function user_can_download_invoices_export()
{
    Simplesheet::fake();

    $this->actingAs($this->givenUser())
         ->get('/invoices/download/xlsx');

    Simplesheet::assertDownloaded('filename.xlsx', function(InvoicesExport $export) {
        // Assert that the correct export is downloaded.
        return $export->collection()->contains('#2018-01');
    });
}
```

### Testing storing exports

```php
/**
* @test
*/
public function user_can_store_invoices_export()
{
    Simplesheet::fake();

    $this->actingAs($this->givenUser())
         ->get('/invoices/store/xlsx');

    Simplesheet::assertStored('filename.xlsx', 'diskName');

    Simplesheet::assertStored('filename.xlsx', 'diskName', function(InvoicesExport $export) {
        return true;
    });

    // When passing the callback as 2nd param, the disk will be the default disk.
    Simplesheet::assertStored('filename.xlsx', function(InvoicesExport $export) {
        return true;
    });
}
```

### Testing queuing exports

```php
/**
* @test
*/
public function user_can_queue_invoices_export()
{
    Simplesheet::fake();

    $this->actingAs($this->givenUser())
         ->get('/invoices/queue/xlsx');

    Simplesheet::assertQueued('filename.xlsx', 'diskName');

    Simplesheet::assertQueued('filename.xlsx', 'diskName', function(InvoicesExport $export) {
        return true;
    });

    // When passing the callback as 2nd param, the disk will be the default disk.
    Simplesheet::assertQueued('filename.xlsx', function(InvoicesExport $export) {
        return true;
    });
}
```

### Testing exports with dynamic file name/path

> Available since version 1.1.0

If you have dynamic naming for files or paths, you can use a regular expression to represent those while testing:

```php
/**
 * @test
 */
public function user_can_store_invoices_export()
{
    Simplesheet::fake();

    $this->actingAs($this->givenUser())
        ->get('/invoices/store/xlsx');

    // Tells the mock to use regular expressions
    Simplesheet::matchByRegex();

    // For a given dynamic named file 'invoices_2019.xlsx'
    Simplesheet::assertStored('/invoices_\d{4}\.xlsx/', 'diskName');
}
```
