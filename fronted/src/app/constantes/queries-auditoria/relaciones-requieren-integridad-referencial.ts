export const
RELACIONES_REQUIRE_INTEGRIDAD_REFERENCIAL = `SELECT  obj.name AS [obj_name],
    sch.name AS [esquema],
    tab1.name AS [tabla],
    col1.name AS [columna],
    tab2.name AS [relacion_tabla],
    col2.name AS [relacion_columna],
	fk.is_not_trusted [posible_inconsistencia],
	fk.is_disabled [fk_deshabilitada]
FROM sys.foreign_key_columns fkc
INNER JOIN sys.objects obj ON obj.object_id = fkc.constraint_object_id
INNER JOIN sys.tables tab1 ON tab1.object_id = fkc.parent_object_id
INNER JOIN sys.schemas sch ON tab1.schema_id = sch.schema_id
INNER JOIN sys.columns col1 ON col1.column_id = parent_column_id AND col1.object_id = tab1.object_id
INNER JOIN sys.tables tab2 ON tab2.object_id = fkc.referenced_object_id
INNER JOIN sys.columns col2 ON col2.column_id = referenced_column_id AND col2.object_id = tab2.object_id
INNER JOIN sys.foreign_keys fk ON fk.object_id = fkc.constraint_object_id`;
