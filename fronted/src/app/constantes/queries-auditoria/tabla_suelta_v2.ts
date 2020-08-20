
export const TABLA_SIN_RELACIONES_V2 = `SELECT name as 'TABLE_NAME', TYPE_DESC as 'DESCRIPCION' FROM sys.tables WHERE object_id NOT IN (
  SELECT referenced_object_id FROM sys.foreign_keys
union
 SELECT parent_object_id from sys.foreign_keys)
and name not like 'sysdiagrams'`;
