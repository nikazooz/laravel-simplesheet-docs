# Exportables

[[toc]]

In the previous example, we used the `Simplesheet::download` facade to start an export.

Laravel Simplesheet also provides a `Nikazooz\Simplesheet\Concerns\Exportable` trait, to make export classes exportable.

```php
namespace App\Exports;

use App\Invoice;
use Nikazooz\Simplesheet\Concerns\Exportable;
use Nikazooz\Simplesheet\Concerns\FromCollection;

class InvoicesExport implements FromCollection
{
    use Exportable;

    public function collection()
    {
        return Invoice::all();
    }
}
```

We can now download the export without the need for the facade:

```php
return (new InvoicesExport)->download('invoices.xlsx');
```

Or store it on a disk:

```php
return (new InvoicesExport)->store('invoices.xlsx', 's3');
```

You can also pass options to the disk if you like:

```php
return (new InvoicesExport)->store('invoices.xlsx', 's3', null, 'private');
```

### Responsable

The previous example can be made even shorter when adding Laravel's `Responsable` interface to the export class:

```php
namespace App\Exports;

use App\Invoice;
use Illuminate\Contracts\Support\Responsable;
use Nikazooz\Simplesheet\Concerns\Exportable;
use Nikazooz\Simplesheet\Concerns\FromCollection;

class InvoicesExport implements FromCollection, Responsable
{
    use Exportable;

    /**
    * It's required to define the fileName within
    * the export class when making use of Responsable.
    */
    private $fileName = 'invoices.xlsx';

    public function collection()
    {
        return Invoice::all();
    }
}
```

You can now easily return the export class, without the need of calling `->download()`.

```php
return new InvoicesExport();
```
