export const ANOMALIA_CONSTRAINS = (constraint) => {
  return `DBCC CHECKCONSTRAINTS (${constraint})`;
};

export const ANOMALIA_RELACIONAL_NECESARIA =
  (tabla_padre, columna_padre, tabla_hija, columna_hija) => {
    return `SELECT * FROM [${tabla_hija}] WHERE [${columna_hija}] NOT IN (SELECT [${columna_padre}] from [${tabla_padre}])`;
  };
