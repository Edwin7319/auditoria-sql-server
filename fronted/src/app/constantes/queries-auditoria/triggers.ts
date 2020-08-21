export const OBTENER_TRIGGERS = `SELECT
	tab.name as nombre_tabla,
	ob.name as nombre_trigger,
	tr_ev.type_desc as tipo_trigger,
	tr.parent_class_desc as parent_class,
	OBJECT_DEFINITION(tr.object_id) as script_trigger
FROM sys.objects ob
INNER JOIN sys.triggers tr ON ob.object_id = tr.object_id
INNER JOIN sys.trigger_events tr_ev ON tr.object_id = tr_ev.object_id
INNER JOIN sys.tables tab ON tr.parent_id = tab.object_id
WHERE ob.type = 'TR'
`;
