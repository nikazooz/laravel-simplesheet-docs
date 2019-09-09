# Testing

[[toc]]

The Simplesheet facade can be used to swap the importer to a fake.

### Testing imports

```php
/**
 * @test
 */
public function user_can_import_users()
{
    Simplesheet::fake();

    $this->actingAs($this->givenUser())
         ->get('/users/import/xlsx');

    Simplesheet::assertImported('filename.xlsx', 'diskName');

    Simplesheet::assertImported('filename.xlsx', 'diskName', function(UsersImport $import) {
        return true;
    });

    // When passing the callback as 2nd param, the disk will be the default disk.
    Simplesheet::assertImported('filename.xlsx', function(UsersImport $import) {
        return true;
    });
}
```

### Testing queuing imports

```php
/**
 * @test
 */
public function user_can_queue_the_users_import()
{
    Simplesheet::fake();

    $this->actingAs($this->givenUser())
         ->get('/users/queue/xlsx');

    Simplesheet::assertQueued('filename.xlsx', 'diskName');

    Simplesheet::assertQueued('filename.xlsx', 'diskName', function(UsersImport $import) {
        return true;
    });

    // When passing the callback as 2nd param, the disk will be the default disk.
    Simplesheet::assertQueued('filename.xlsx', function(UsersImport $import) {
        return true;
    });
}
```

### Testing imports with dynamic file name/path

> Available since version 1.1.0

If you have dynamic naming for files or paths, you can use a regular expression to represent those while testing:

```php
/**
 * @test
 */
public function user_can_import_users()
{
    Simplesheet::fake();

    $this->actingAs($this->givenUser())
        ->get('/users/import/xlsx');

    // Tells the mock to use regular expressions
    Simplesheet::matchByRegex();

    // For a given dynamic named file 'dynamic_1234_filename.xlsx'
    Simplesheet::assertStored('/\w{7}_\d{4}\_\w{8}\.xlsx/', 'diskName');
}
```
