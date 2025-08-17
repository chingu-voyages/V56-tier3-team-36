  //function to handle getting data from db
  export async function getData (searchId, backendUrl) {
  const normalizedId = searchId.toUpperCase();

    const response = await fetch(`${backendUrl}/get-patient/${normalizedId}`);
    if (!response.ok) throw new Error("Not a valid patient number");
    return await response.json();
}