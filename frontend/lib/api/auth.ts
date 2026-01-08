
export async function logOut() {
  const url = `https://finance-dashboard-webapp.onrender.com/api/auth/logout`;
  try {
    const response = await fetch(url,{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result
  } catch (error:any) {
    console.error(error.message);
  }
}

export async function logIn({email, password}: { email: string; password: string }) {
  const url = `https://finance-dashboard-webapp.onrender.com/api/auth/login`;
  try {
    const response = await fetch(url,{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result
  } catch (error:any) {
    console.error(error.message);
  }
}