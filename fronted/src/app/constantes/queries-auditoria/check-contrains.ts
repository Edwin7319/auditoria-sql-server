export const CHECK_CONSTRAINS = `select con.[name] as constraint_name,
    schema_name(t.schema_id) + '.' + t.[name]  as [tabla],
    col.[name] as nombre_columna,
    con.[definition] as definicion,
    con.is_disabled as estado
from sys.check_constraints con
    left outer join sys.objects t
        on con.parent_object_id = t.object_id
    left outer join sys.all_columns col
        on con.parent_column_id = col.column_id
        and con.parent_object_id = col.object_id
order by con.name`;
