  //function to handle getting data from db
  export async function getData (searchId, backendUrl) {

    const response = await fetch(`${backendUrl}/get-patient/${searchId}`);
    if (!response.ok) throw new Error("Not a valid patient number");
    return await response.json();
}