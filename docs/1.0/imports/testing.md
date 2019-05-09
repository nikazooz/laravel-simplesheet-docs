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
