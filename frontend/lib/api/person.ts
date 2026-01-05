import { PersonsApi } from "@/types/person";

 export async function createPerson(formData: { name: string; email: string; description: string }) {
  const url = `http://localhost:5000/api/person/create`;
  try {
    const response = await fetch(url,{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name:formData.name,email:formData.email,details:formData.description})
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log('ABCD---addded person',result);
    return result;
  } catch (error:any) {
    console.error(error.message);
  }
}


export async function getAllPersons(): Promise<PersonsApi[]> {
  const url = `http://localhost:5000/api/person/getAll`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // IMPORTANT (cookies / auth)
      cache: 'no-store', // Next.js SSR safe
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response?.status}`);
    }

    const result: PersonsApi[] = await response.json();
    console.log('ABCD---persons fetched', result);

    return result;
  } catch (error: any) {
    console.error('Failed to fetch persons:', error.message);
    throw error; // rethrow so Next.js error boundary can catch it
  }
}
