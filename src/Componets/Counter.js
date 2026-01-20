import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a User Context with a default value
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {}
});

// A custom hook for using the User Context
export function useUser() {
  return useContext(UserContext);
}

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from an API with mock data
    const fetchUser = async () => {
      try {
        // Simulated delay for fetching data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockData = { name: 'Jane Doe' };
        setCurrentUser(mockData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Form />
    </UserContext.Provider>
  );
}

function Form() {
 
  return (
    <Panel title = "Welcome">
     
      <LoginButton/>
    </Panel>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useUser();

  if (currentUser) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button onClick={() => setCurrentUser({ name: 'Advika' })}>
      Log in as Advika
    </Button>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
