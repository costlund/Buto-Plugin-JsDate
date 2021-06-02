# Buto-Plugin-JsDate
Get a date like 2001-01-01 without dealing with months (0-11) and always in right length (10 character for example).

## Include in html head
```
type: widget
data:
  plugin: js/date
  method: include
```

## Usage
Get dates in different formats. Add/remove days. Change separator.

### Methods
Get YYYY-MM-DD.
```
console.log(PluginJsDate.get_date_yy_mm_dd());
```
Get YY-MM-DD
```
console.log(PluginJsDate.get_date_y_mm_dd());
```
Add days.
```
PluginJsDate.add_date(10);
```
Change separator.
```
PluginJsDate.data.separator='/';
```
Js date object.
```
console.log(PluginJsDate.data);
```
