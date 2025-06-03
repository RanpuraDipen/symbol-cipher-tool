export const encodeText = async (text) => {
  const res = await fetch("/api/encode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw err;
  }
  const { encoded } = await res.json();
  return encoded;
};

export const decodeText = async (encoded) => {
  const res = await fetch("/api/decode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ encoded }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw err;
  }
  const { text } = await res.json();
  return text;
};
