# Import formats

[[toc]]

By default, the import format is determined by the extension of the file. If you want
to explicitly configure the import format, you can pass it through as 3rd parameter.

## XLSX

```php
(new UsersImport)->import('users.xlsx', null, \Nikazooz\Simplesheet\Simplesheet::XLSX);
```

## CSV

```php
(new UsersImport)->import('users.csv', null, \Nikazooz\Simplesheet\Simplesheet::CSV);
```

## TSV

```php
(new UsersImport)->import('users.tsv', null, \Nikazooz\Simplesheet\Simplesheet::TSV);
```

## ODS

```php
(new UsersImport)->import('users.ods', null, \Nikazooz\Simplesheet\Simplesheet::ODS);
```
