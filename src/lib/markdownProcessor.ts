export async function transformMatter(data: Record<string, unknown>) {
  data = stringifyDates(data);
  data = await parseMatterMd(data);
  return data;
}

async function parseMatterMd(data: Record<string, unknown>) {
  return (
    await Promise.all(
      Object.entries(data).map(async ([key, value]) => {
        if (value == null) {
          // Nothing to do here
        } else if (Array.isArray(value)) {
          value = await Promise.all(value.map(parseMatterMd));
        } else if (typeof value === "object") {
          value = await parseMatterMd(value as Record<string, unknown>);
        }

        return { key, value };
      })
    )
  ).reduce<Record<string, unknown>>((acc, { key, value }) => {
    acc[key] = value;
    return acc;
  }, {});
}

function stringifyDates(data: Record<string, unknown>) {
  return Object.entries(data)
    .map(([key, value]) => ({
      key,
      value: value instanceof Date ? value.toISOString() : value,
    }))
    .reduce<Record<string, unknown>>((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});
}
