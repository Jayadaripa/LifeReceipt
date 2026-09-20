// Get the item with the highest count
export function getTop(items = []) {
  return [...items].sort((a, b) => b.count - a.count)[0];
}


// Calculate how your data is distributed
export function getLifeBalance(data) {
  const values = [
    {
      name: "Music",
      value: data.music.events,
    },
    {
      name: "Spending",
      value: data.spending.transactions,
    },
    {
      name: "Daily Life",
      value: data.daily.transactions,
    },
  ];

  const total = values.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return values.map((item) => ({
    ...item,
    percent: total
      ? Math.round((item.value / total) * 100)
      : 0,
  }));
}


// --------------------------------------------------
// CONNECTION ENGINE
// --------------------------------------------------

// Find meaningful relationships from yearly activity
export function findYearlyConnections(trend = []) {
  return trend
    .map((year) => {
      const activeSources = [];

      if (year.music > 0) {
        activeSources.push("Music");
      }

      if (year.spending > 0) {
        activeSources.push("Spending");
      }

      if (year.daily > 0) {
        activeSources.push("Daily Life");
      }

      // A connection needs at least 2 active sources
      if (activeSources.length < 2) {
        return null;
      }

      return {
        year: year.year,
        sources: activeSources,
        sourceCount: activeSources.length,
        activity: {
          music: year.music,
          spending: year.spending,
          daily: year.daily,
        },
        strength: calculateConnectionStrength(
          activeSources.length,
          year
        ),
      };
    })
    .filter(Boolean);
}


// Calculate connection strength
export function calculateConnectionStrength(
  sourceCount,
  year
) {
  let strength = sourceCount * 30;

  const values = [
    year.music || 0,
    year.spending || 0,
    year.daily || 0,
  ];

  const activeValues = values.filter(
    (value) => value > 0
  );

  if (activeValues.length) {
    const largest = Math.max(...activeValues);

    const relativeActivity =
      activeValues.reduce(
        (sum, value) => sum + value / largest,
        0
      );

    strength += Math.round(
      relativeActivity * 20
    );
  }

  return Math.min(Math.round(strength), 100);
}


// Get connections between two specific sources
export function getConnectionsBySource(
  connections = [],
  sourceA,
  sourceB
) {
  return connections.filter(
    (connection) =>
      connection.sources.includes(sourceA) &&
      connection.sources.includes(sourceB)
  );
}


// Get the strongest yearly connection
export function getStrongestConnection(
  connections = []
) {
  if (!connections.length) {
    return null;
  }

  return [...connections].sort(
    (a, b) => b.strength - a.strength
  )[0];
}


// Create a human-readable explanation
export function describeConnection(connection) {
  if (!connection) {
    return "";
  }

  const sources = connection.sources.join(" + ");

  return `${sources} both show recorded activity in ${connection.year}.`;
}