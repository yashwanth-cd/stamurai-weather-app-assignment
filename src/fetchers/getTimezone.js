export async function getTimezone(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.wheretheiss.at/v1/coordinates/${latitude},${longitude}`,
    );
    const data = await response.json();
    return data.timezone_id;
  } catch (error) {
    console.error("Error fetching timezone:", error);
    return null;
  }
}
