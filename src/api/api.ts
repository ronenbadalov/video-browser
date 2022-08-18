export const getData = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json"
    );
    if (!res.ok) throw new Error("error while fetching videos");
    return res.json();
  } catch (e: unknown) {
    if (e instanceof Error) console.error(e.message);
  }
};
