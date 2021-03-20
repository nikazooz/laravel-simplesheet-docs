# Storing exports on disk

[[toc]]

Exports can easily be stored on any [filesystem](https://laravel.com/docs/master/filesystem) that Laravel supports.


## Default disk

```php
public function storeSheet()
{
    // Store on default disk
    Simplesheet::store(new InvoicesExport(2018), 'invoices.xlsx');
}
```

## Custom disks

```php
public function storeSheet()
{
    // Store on a different disk (e.g. s3)
    Simplesheet::store(new InvoicesExport(2018), 'invoices.xlsx', 's3');

    // Store on a different disk with a defined writer type.
    Simplesheet::store(new InvoicesExport(2018), 'invoices.xlsx', 's3', Simplesheet::XLSX);
}
```

## Disk options

If you want to pass some options to the disk, pass them to Simplesheet::store() as the fifth parameter.

```php
public function storeSheet()
{
    Simplesheet::store(new InvoicesExport(2018), 'invoices.xlsx', 's3', null, [
        'visibility' => 'private',
    ]);
}
```

Laravel has a shortcut for private files:

```php
public function storeSheet()
{
    Simplesheet::store(new InvoicesExport(2018), 'invoices.xlsx', 's3', null, 'private');
}
```
