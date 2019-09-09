# Concerns

[[toc]]

Most of the export/import configuration is done by using **Concerns**.

## Contracts

Concerns are basically just simple interfaces. Implementing them will make the object adhere to a
certain contract. This contract can request specific methods that e.g. data can be passed through.

For instance, the `FromCollection` requests the Export object to implement a `collection` method, that needs to return a `Collection` instance.

```php
namespace App\Exports;

use App\User;
use Nikazooz\Simplesheet\Concerns\FromCollection;

class UsersExport implements FromCollection
{
    public function collection()
    {
        return User::all();
    }
}
```
