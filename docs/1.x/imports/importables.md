# Importables

[[toc]]

In the previous example, we used the `Simplesheet::import` facade to start an import.

Laravel Simplesheet also provides a `Nikazooz\Simplesheet\Concerns\Importable` trait, to make import classes importable.

```php
namespace App\Imports;

use App\User;
use Nikazooz\Simplesheet\Concerns\ToModel;
use Nikazooz\Simplesheet\Concerns\Importable;

class UsersImport implements ToModel
{
    use Importable;

    public function model(array $row)
    {
        return new User([
            'name' => $row[0],
        ]);
    }
}
```

## Importing

We can now import without the need for the facade:

```php
(new UsersImport)->import('users.xlsx', 'local', \Nikazooz\Simplesheet\Simplesheet::XLSX);
```

## Queuing

Or queue the import:

```php
(new UsersImport)->queue('users.xlsx');
```

## To array

The import can be loaded into an array :

```php
$array = (new UsersImport)->toArray('users.xlsx');
```

## To collection

The import can be loaded into a collection:

```php
$collection = (new UsersImport)->toCollection('users.xlsx');
```
