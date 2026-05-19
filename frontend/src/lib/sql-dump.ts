import "server-only";

import fs from "node:fs";
import path from "node:path";

export type SqlValue = number | string | null;

export function getSqlDump(filename = "aryadp.sql") {
  const sqlPath = path.join(process.cwd(), "public", filename);
  return fs.readFileSync(sqlPath, "utf8");
}

export function extractInsertValues(sql: string, table: string) {
  const marker = `INSERT INTO \`${table}\` `;
  const start = sql.indexOf(marker);

  if (start === -1) {
    return { columns: [] as string[], rows: [] as SqlValue[][] };
  }

  const columnsStart = sql.indexOf("(", start);
  const columnsEnd = sql.indexOf(")", columnsStart);
  const valuesStart = sql.indexOf("VALUES", columnsEnd);

  if (columnsStart === -1 || columnsEnd === -1 || valuesStart === -1) {
    return { columns: [] as string[], rows: [] as SqlValue[][] };
  }

  const columns = sql
    .slice(columnsStart + 1, columnsEnd)
    .split(",")
    .map((column) => column.replaceAll("`", "").trim());

  let cursor = valuesStart + "VALUES".length;
  while (/\s/.test(sql[cursor] ?? "")) {
    cursor += 1;
  }

  let body = "";
  let inString = false;
  let escaped = false;

  for (; cursor < sql.length; cursor += 1) {
    const char = sql[cursor];

    if (inString) {
      body += char;

      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "'") {
        inString = false;
      }

      continue;
    }

    if (char === "'") {
      inString = true;
      body += char;
      continue;
    }

    if (char === ";") {
      break;
    }

    body += char;
  }

  return {
    columns,
    rows: parseSqlTuples(body),
  };
}

function parseSqlTuples(input: string) {
  const tuples: string[] = [];
  let current = "";
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (const char of input) {
    if (depth === 0 && char === ",") {
      continue;
    }

    current += char;

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "'") {
        inString = false;
      }
      continue;
    }

    if (char === "'") {
      inString = true;
      continue;
    }

    if (char === "(") {
      depth += 1;
      continue;
    }

    if (char === ")") {
      depth -= 1;

      if (depth === 0) {
        tuples.push(current.trim());
        current = "";
      }
    }
  }

  return tuples.map(parseSqlTuple);
}

function parseSqlTuple(tuple: string) {
  const body = tuple.trim().replace(/^\(/, "").replace(/\)$/, "");
  const values: SqlValue[] = [];
  let current = "";
  let inString = false;
  let escaped = false;

  for (let index = 0; index < body.length; index += 1) {
    const char = body[index];

    if (inString) {
      if (escaped) {
        current += `\\${char}`;
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "'") {
        inString = false;
      } else {
        current += char;
      }

      continue;
    }

    if (char === "'") {
      inString = true;
      continue;
    }

    if (char === ",") {
      values.push(parseScalar(current.trim()));
      current = "";
      continue;
    }

    current += char;
  }

  values.push(parseScalar(current.trim()));

  return values;
}

function parseScalar(value: string): SqlValue {
  if (value === "NULL") {
    return null;
  }

  if (/^-?\d+$/.test(value)) {
    return Number(value);
  }

  return value
    .replaceAll("\\r", "\r")
    .replaceAll("\\n", "\n")
    .replaceAll("\\'", "'")
    .trim();
}

export function mapRows<T extends Record<string, SqlValue>>(columns: string[], rows: SqlValue[][]) {
  return rows.map((row) => {
    const entry = Object.fromEntries(columns.map((column, index) => [column, row[index] ?? null]));
    return entry as T;
  });
}
